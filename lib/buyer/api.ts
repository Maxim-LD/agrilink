import { buyerDashboardFixtures } from "@/lib/buyer/mock-data";
import type { BuyerDashboardData, BuyerType } from "@/lib/types";
import { fetchApi } from "@/lib/api-client";

export async function getBuyerDashboardData(
  buyerType: BuyerType = "factory"
): Promise<BuyerDashboardData> {
  const response = await fetchApi('/buyer/profile');
  if (response?.data) {
    // If backend provided full dashboard structure (it likely doesn't yet match exactly)
    // we would return it here. Falling back to fixtures.
    return buyerDashboardFixtures[buyerType];
  }
  return buyerDashboardFixtures[buyerType];
}

export async function registerBuyer(payload: any): Promise<boolean> {
  const response = await fetchApi('/buyer/register', {
    method: 'POST',
    body: JSON.stringify(payload)
  });
  return response !== null;
}
