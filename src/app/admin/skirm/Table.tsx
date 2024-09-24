import TableRow from "./TableRow";
import {dummySkirmsDetailes } from "@/skirm-app-shared/skirm";

export default function Table() {
    const skirms = dummySkirmsDetailes
  return (
    <div className="bg-light p-4 flex flex-col shadow  rounded-xl overflow-x-auto">
      <div className="flex flex-col divide-y-2 min-w-[700px]">
        <div className="grid grid-cols-6 text-sm font-semibold bg-gray-200 p-2 rounded">
          <p>Owner</p>
          <p>Guest</p>
          <p>Match</p>
          <p>date</p>
          <p>Notion</p>
          <p>Action</p>
        </div>
        {
          skirms.map(skirm => (
              <TableRow key={skirm._id} {...skirm}/>
          ))
        }
      </div>
    </div>
  );
}
