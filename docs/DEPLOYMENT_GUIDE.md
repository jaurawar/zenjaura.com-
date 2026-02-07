# Deploying Zenjaura to Hostinger

Since you have a Hostinger plan and a domain, follow these steps to take your "Intellectual Luxury" platform live.

## Option A: Using Hostinger Node.js Hosting (Best for VPS)

1.  **Login to hPanel**: Go to your Hostinger dashboard.
2.  **Setup Node.js**:
    - Under the **Advanced** section, find **Node.js**.
    - Click **Create Application**.
    - Set the **Application Root** to your project folder (e.g., `/home/u12345/domains/zenjaura.com/public_html`).
    - Set **Application URL** to your domain `https://zenjaura.com`.
    - Set **Startup File** to `package.json`.
3.  **Upload Files**:
    - Use the **File Manager** or **Git Integration** to upload your project files.
    - **Note**: Do not upload the `node_modules` folder.
4.  **Install Dependencies**:
    - Open the **Console** or use the **Run NPM Install** button in the Node.js menu.
5.  **Build & Start**:
    - Run `npm run build`.
    - Start the application.

## Option B: Using Vercel + Hostinger Domain (Easiest & Free)

Vercel is the creator of Next.js and offers the best performance for free. You can still use your Hostinger domain.

1.  **Push to GitHub**: (Already done! Your code is at `https://github.com/jaurawar/zenjaura.com-.git`).
2.  **Connect to Vercel**:
    - Sign up at [vercel.com](https://vercel.com).
    - Click **Add New** -> **Project**.
    - Import your GitHub repository.
3.  **Connect Your Domain**:
    - Go to **Project Settings** -> **Domains**.
    - Type `zenjaura.com`.
    - Vercel will give you two **Nameservers** (e.g., `ns1.vercel-dns.com`).
4.  **Update Hostinger DNS**:
    - Go to Hostinger hPanel -> **Domains** -> **Manage**.
    - Change the **Nameservers** to the ones Vercel provided.
    - Your site will be live in minutes!

---

### Important: Supabase Environment Variables
In both options, you **MUST** add these environment variables in the project settings (Vercel or Hostinger):

- `NEXT_PUBLIC_SUPABASE_URL`: (From your Supabase project)
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: (From your Supabase project)

### Recommendation
I highly recommend **Option B (Vercel)** because it handles everything automatically (SSL, High Speed, Auto-deploy when you update code).
