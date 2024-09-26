import { PageTitle } from "@/components/admin";
import Table from "./table";
import Search from "@/components/admin/Search";
import LeagueFilter from "@/components/admin/LeagueFilter";
import CreateMatch from "./CreateMatch";
import { HiPlus } from "react-icons/hi2";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between  gap-2">
        <PageTitle>Matches</PageTitle>
        <CreateMatch>
          <button className="flex text-sm items-center btn-primary flex-shrink-0 w-fit px-2">
            add match <HiPlus />
          </button>
        </CreateMatch>
      </div>
      <div className="flex justify-between items-center">
        <Suspense>
          <Search />
          <LeagueFilter />
        </Suspense>
      </div>
      <Table />
    </div>
  );
}
