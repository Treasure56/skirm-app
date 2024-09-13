import { PageTitle } from "@/components/admin";
import OverviewCardContainer from "./OverviewCardContainer";


export default function Page() {
  return (
    <div className="flex flex-col gap-6">
           <PageTitle>
            Overview
        </PageTitle>
      <OverviewCardContainer />
    </div>
  );
}
