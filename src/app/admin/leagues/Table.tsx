import { dummyLeagues } from "@/skirm-app-shared/league";
import TableRow from "./TableRow";

export default function Table() {
    const league = dummyLeagues;
    return (
        <div className="bg-light p-4 flex flex-col shadow  rounded-xl overflow-x-auto">
        <div className="flex flex-col divide-y-2 min-w-[700px]">
          <div className="grid grid-cols-4 text-sm font-semibold bg-gray-200 p-2 rounded">
            <p>Title</p>
            <p>Start Date</p>
            <p>End Date</p>
            <p>Date</p>
          </div>
          {
              league.map(league => (
                  <TableRow key={league._id} {...league}/>
              ))
          }
         
        </div>
      </div>
    );
}
