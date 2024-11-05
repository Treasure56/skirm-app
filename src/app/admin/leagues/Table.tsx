import { fetchLeague } from "@/action";
import TableRow from "./TableRow";

export default async function Table({query}:{query:string}) {
    const league =  await fetchLeague(query);
    if(!league || league == "error") return<div className="info">Error fetching leagues</div>
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
              league.existingRecords.map((v, i) => (
                  <TableRow key={i} {...v}/>
              ))
          }
         
        </div>
      </div>
    );
}
