import { PageTitle } from "@/components/admin";
import Table from "./Table";
import Search from "@/components/admin/Search";
import DateFilter from "@/components/admin/DateFilter";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      <PageTitle>Deposit</PageTitle>
      <div className="flex justify-between max-md:flex-col gap-2">
        <Suspense>
          <Search />
          <DateFilter />
        </Suspense>
      </div>
      <Table />
    </div>
  );
}
