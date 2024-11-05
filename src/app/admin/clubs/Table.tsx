import { Pagination } from "@/components/Pagination";
import TableRow from "./TableRow";
import { fetchClubs } from "@/action/fetch/fetchClubs";

export default async function Table({query}:{query:string}) {
  const clubs = await fetchClubs(query);
  if(!clubs || clubs == "error") return<div className="info">Error fetching clubs</div>
    return (
     <>
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
              clubs.existingRecords.map((v, i) => (
                  <TableRow key={i} {...v}/>
              ))
          }
         
        </div>
      </div>
      <Pagination  pagination={clubs}/>
     </>
    );
}