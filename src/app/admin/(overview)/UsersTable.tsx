import UsersTableRow from "./UserTableRow";
import Link from "next/link";
import { HiChevronRight } from "react-icons/hi2";
import { dummyUsers } from "@/skirm-app-shared/user";
import { fetchUsers } from "@/action";

export default async function UsersTable() {
    const users = await fetchUsers();
    if(!users || users == "error") return<div className="info">Error fetching users</div>
    
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
                users.existingRecords.map((v, i) => (
                    <UsersTableRow  key={i} {...v}/>
                ))
              }
            </div>

        </div>
    );
}