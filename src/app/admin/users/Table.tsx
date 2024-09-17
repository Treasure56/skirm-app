import { dummyUsers } from "@/skirm-app-shared/user";
import TableRow from "./TableRow";

export default function Table() {
  return (
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
            dummyUsers.map(dummyUser => (
                <TableRow key={dummyUser._id} {...dummyUser}/>
            ))
        }
      </div>
    </div>
  );
}
