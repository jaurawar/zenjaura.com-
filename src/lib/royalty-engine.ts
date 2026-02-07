/**
 * Zenjaura Royalty Engine
 * 
 * Logic to calculate net royalties after production costs.
 * Standard payout cycle: 60 days.
 */

interface SaleRecord {
    salePrice: number;
    productionCost: number;
    platformFeePercentage: number; // e.g., 15% for international dist
    authorRoyaltyPercentage: number; // e.g., 70% of net
}

export function calculateRoyalty(sale: SaleRecord) {
    const platformFee = (sale.salePrice * sale.platformFeePercentage) / 100;
    const netRevenue = sale.salePrice - sale.productionCost - platformFee;

    if (netRevenue <= 0) return 0;

    const authorRoyalty = (netRevenue * sale.authorRoyaltyPercentage) / 100;
    return Number(authorRoyalty.toFixed(2));
}

/**
 * Generates the expected payout date based on a 60-day cycle.
 */
export function getPayoutDate(saleDate: Date): Date {
    const payoutDate = new Date(saleDate);
    payoutDate.setDate(payoutDate.getDate() + 60);
    return payoutDate;
}

/**
 * Logic for "Profile Ranking" badges
 */
export function getAuthorRank(totalSales: number) {
    if (totalSales >= 500000) return "Platinum";
    if (totalSales >= 100000) return "Elite";
    if (totalSales >= 10000) return "Gold";
    return "Writer";
}
