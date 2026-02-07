/**
 * Zenjaura Legal Module
 * 
 * Provides templates and generation logic for automated Author Contracts.
 */

interface ContractData {
    authorName: string;
    bookTitle: string;
    royaltyPercentage: number;
    tier: string;
    date: string;
}

export function generateAuthorContract(data: ContractData) {
    return `
    ZENJAURA PUBLISHING HOUSE: PUBLISHING AGREEMENT
    ---------------------------------------------
    
    This Agreement is entered into on ${data.date} between Zenjaura Publishing House 
    ("Publisher") and ${data.authorName} ("Author") regarding the work titled 
    "${data.bookTitle}" ("Work").

    1. GRANT OF RIGHTS
    Author grants Publisher the exclusive right to publish, distribute, and sell 
    the Work globally in print and digital formats for the "${data.tier}" tier.

    2. ROYALTIES
    Publisher shall pay Author a royalty of ${data.royaltyPercentage}% of Net Revenue 
    received from sales of the Work. "Net Revenue" is defined as the gross sale price 
    minus production costs and platform fees.

    3. PAYOUT CYCLE
    Royalties will be calculated and paid on a 60-day cycle following the last day 
    of the month in which the sale occurred.

    4. TERMINATION
    Either party may terminate this agreement with 90 days' written notice, subject 
    to fulfillment of outstanding orders.

    Executed by:
    
    Zenjaura Publishing House (Admin)
    ---------------------------------
    
    ${data.authorName} (Digital Signature)
    ---------------------------------
  `;
}
