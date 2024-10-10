import { type SortBy, type TimeRange, fetchTopContracts } from "lib/search";
import type { Metadata } from "next";
import { ContractsSidebarLayout } from "../../../core-ui/sidebar/contracts";
import { TrendingContractSection } from "./components/trending-table";

export const metadata: Metadata = {
  title: "Trending Contracts",
  description: "See what's hot onchain right now",
  openGraph: {
    title: "Trending Contracts",
    description: "See what's hot onchain right now",
  },
};

// we're using searchParams here - use dynamic rendering
export const dynamic = "force-dynamic";

export default async function DashboardContractTrendingPage(props: {
  searchParams: { timeRange?: TimeRange; page?: number; sortBy?: SortBy };
}) {
  const topContracts = await fetchTopContracts({
    ...props.searchParams,
    timeRange: "month",
    perPage: 20,
  });

  return (
    <ContractsSidebarLayout>
      <h1 className="mb-5 font-semibold text-2xl tracking-tight md:text-3xl">
        Trending Contracts
      </h1>

      <TrendingContractSection
        topContracts={topContracts}
        searchParams={props.searchParams}
        showPagination={true}
      />
    </ContractsSidebarLayout>
  );
}
