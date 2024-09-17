import { dummyMatchesDetailed } from "@/skirm-app-shared/match";
import TableRow from "./TableRow";

export default function Table() {
    const matches = dummyMatchesDetailed;

    return (
        <div className="bg-light p-4 flex flex-col shadow  rounded-xl overflow-x-auto">
        <div className="flex flex-col divide-y-2 min-w-[700px]">
          <div className="grid grid-cols-8 text-sm font-semibold bg-gray-200 p-2 rounded">
            <p>Home Team</p>
            <p></p>
            <p>Away Team</p>
            <p>Start</p>
            <p>End</p>
            <p>League</p>
            <p>Date</p>
          </div>
         {
             matches.map(match => (
                 <TableRow key={match._id} {...match}/>
             ))
         }
         
        </div>
      </div>
    );
}



