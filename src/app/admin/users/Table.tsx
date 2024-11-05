import { Pagination } from "@/components/Pagination";
import TableRow from "./TableRow";
import { fetchUsers } from "@/action";

export default async function Table({query}:{query:string}) {
  const users = await fetchUsers(query);
  if(!users || users == "error") return<div className="info">Error fetching users</div>
  // console.log(users);
  return (
   <>
    <div className="bg-light p-4 flex flex-col shadow  rounded-xl overflow-x-auto">
      <div className="flex flex-col divide-y-2 min-w-[700px]">
        <div className="grid grid-cols-7 text-sm font-semibold bg-gray-200 p-2 rounded">
          <p>Full name</p>
          <p>UserName</p>
          <p>Email</p>
          <p>Phone</p>
          <p>Status</p>
          <p>Member Since</p>
          <p>Action</p>
        </div>
        {
            users.existingRecords.map((v, i) => (
                <TableRow key={i} {...v}/>
            ))
        }
      </div>
    </div>
      <Pagination pagination={users} />
   </>
  );
}
