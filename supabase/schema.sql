-- Database Schema for Zenjaura Publishing House

-- 1. Users & Profiles (Roles: author, vendor, admin)
CREATE TYPE user_role AS ENUM ('author', 'vendor', 'admin');

CREATE TABLE profiles (
    id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
    full_name TEXT,
    role user_role DEFAULT 'author',
    avatar_url TEXT,
    bio TEXT,
    bank_details JSONB, -- Bank name, IFSC, Tax ID
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Books (The core product)
CREATE TYPE book_status AS ENUM ('manuscript', 'editing', 'design', 'print', 'published');
CREATE TYPE pricing_tier AS ENUM ('basic', 'global_signature', 'franchise_building');

CREATE TABLE books (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    author_id UUID REFERENCES profiles(id),
    title TEXT NOT NULL,
    genre TEXT,
    status book_status DEFAULT 'manuscript',
    tier pricing_tier,
    isbn TEXT UNIQUE,
    manuscript_url TEXT,
    cover_url TEXT,
    published_date DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Submissions (Traditional Publishing PDF uploads)
CREATE TABLE submissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    author_id UUID REFERENCES profiles(id),
    manuscript_url TEXT NOT NULL,
    genre TEXT,
    synopsis TEXT,
    approved BOOLEAN DEFAULT FALSE,
    reviewer_id UUID REFERENCES profiles(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. Transactions (Purchases and Payouts)
CREATE TABLE transactions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES profiles(id),
    amount DECIMAL(12, 2) NOT NULL,
    currency TEXT DEFAULT 'USD',
    type TEXT, -- 'payout', 'service_purchase', 'royalty'
    status TEXT DEFAULT 'pending', -- 'pending', 'completed', 'failed'
    metadata JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. Royalties (Calculated earnings)
CREATE TABLE royalties (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    book_id UUID REFERENCES books(id),
    author_id UUID REFERENCES profiles(id),
    amount DECIMAL(12, 2) NOT NULL,
    sale_price DECIMAL(12, 2) NOT NULL,
    production_cost DECIMAL(12, 2) NOT NULL,
    calculation_date DATE DEFAULT CURRENT_DATE,
    payout_id UUID REFERENCES transactions(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 6. RLS Policies
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public profiles are viewable by everyone." ON profiles FOR SELECT USING (true);
CREATE POLICY "Users can update own profile." ON profiles FOR UPDATE USING (auth.uid() = id);

ALTER TABLE books ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Authors can view own books." ON books FOR SELECT USING (auth.uid() = author_id);
CREATE POLICY "Admins can view all books." ON books FOR SELECT USING (EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin'));

-- [Additional RLS policies for sessions, royalties etc.]
