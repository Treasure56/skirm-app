import { AppSelect } from "@/components/form";
import OverViewCard from "./OverviewCard";
import { HiCheckCircle, HiUsers } from "react-icons/hi2";
import { IoMdFootball } from "react-icons/io";
import { SiPremierleague } from "react-icons/si";

export default function OverviewCardContainer() {
    return (
        <div>
           
     <div className="flex flex-col shadow bg-light rounded-lg p-4">
     <div className="flex justify-between p-4">
        <h1 className="text-md font-bold">Statistics</h1>
        <AppSelect variant="app-select-underline"  name="" options={["Option 1", "Option 2", "Option 3"]} value=""/>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

      <OverViewCard  title="Total Users" icon={<HiUsers/>} count={100} />
      <OverViewCard  title="Total Skirm" icon={<HiCheckCircle />} count={200} />
      <OverViewCard  title="Total Matches" icon={<IoMdFootball />} count={50} />
      <OverViewCard  title="Total Leagues" icon={<SiPremierleague />} count={10} />
      </div>
     </div>
        </div>
    );
}