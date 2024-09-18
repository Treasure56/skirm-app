import { dummyClubs } from "@/skirm-app-shared/club";
import TableRow from "./TableRow";

export default function Table() {
    const clubes = dummyClubs;
    return (
        <div className="bg-light p-4 flex flex-col shadow  rounded-xl overflow-x-auto">
        <div className="flex flex-col divide-y-2 min-w-[700px]">
          <div className="grid grid-cols-5 text-sm font-semibold bg-gray-200 p-2 rounded">
            <p>Name</p>
            <p>Country</p>
            <p>State</p>
            <p>League</p>
            <p>Date</p>
          </div>
          {
              clubes.map(club => (
                  <TableRow key={club._id} {...club}/>
              ))
          }
         
        </div>
      </div>
    );
}