import { fetchMatches } from "@/action";
import TableRow from "./TableRow";
import { Pagination } from "@/components/Pagination";

export default async function Table({query}:{query:string}) {
    const matches = await fetchMatches(query);
    if(!matches || matches == "error") return<div className="info">Error fetching matches</div>
    

    return (
      <>
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
             matches.existingRecords.map((v, i) => (
                 <TableRow key={i} {...v}/>
             ))
         }
         
        </div>
      </div>
      <Pagination pagination={matches}/>
      </>
    );
}



