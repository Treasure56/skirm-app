import UsersTableRow from "./UserTableRow";
import Link from "next/link";
import { HiChevronRight } from "react-icons/hi2";
import { dummyUsers } from "@/skirm-app-shared/user";

export default function UsersTable() {
    
    return (
        <div className="bg-light p-4 flex flex-col shadow  rounded-xl">
            <div className="flex justify-between">
            <h1 className="text-md font-bold ">Users</h1>
            <Link className="flex items-center text-sm text-primary-dark font-semibold" href="/admin/user">View all<HiChevronRight/></Link>
            </div>
            <div className="flex flex-col py-6 divide-y-2 ">
               <div className="grid grid-cols-2 text-sm font-semibold bg-gray-200 p-2 rounded">
               <p>UserName</p>
                <p>Phone</p>
               </div>
              {
                dummyUsers.map(dummyUser => (
                    <UsersTableRow  key={dummyUser._id} {...dummyUser}/>
                ))
              }
            </div>

        </div>
    );
}