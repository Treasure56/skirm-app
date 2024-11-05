import { PageTitle } from "@/components/admin";
import OverviewCardContainer from "./OverviewCardContainer";
import UsersTable from "./UsersTable";
import SkirmTable from "./Withdrals";
import MatchesTable from "./MatchesTable";


export default function Page() {
  return (
    <div className="flex flex-col gap-6">
           <PageTitle>
            Overview
        </PageTitle>
      <OverviewCardContainer />
      <div className="grid grid-cols-2  items-start gap-6 max-md:grid-cols-1">
      <UsersTable />
      <div className="grid grid-cols-1 gap-6">
        <SkirmTable />
        <MatchesTable />
      </div>
      </div>
    </div>
  );
}
