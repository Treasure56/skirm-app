import { PageTitle } from "@/components/admin";
import Search from "@/components/admin/Search";
import Table from "./Table";
import CreateLeague from "./CreateLeage";
import { HiPlus } from "react-icons/hi2";
import { AppPageProps } from "@/types/basicTypes";
import { buildUrlQuery } from "@/functions/helpers";

export default function Page({searchParams}:AppPageProps) {
  return (
    <div className="flex flex-col gap-6">
      <PageTitle>Leagues</PageTitle>
      <div className="flex justify-between">
        <Search />
        <CreateLeague>
          <button className="flex items-center btn-primary px-2">
            Create League <HiPlus />
          </button>
        </CreateLeague>
      </div>
      <Table query={(buildUrlQuery(searchParams))} />
    </div>
  );
}
