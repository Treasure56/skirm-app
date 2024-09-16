/* eslint-disable @next/next/no-img-element */

import { UsersTableProps } from "@/types";


export default function UsersTableRow({name, phone, email, image}: UsersTableProps) {
    return (
        <div className="grid grid-cols-2 text-sm py-2 items-center text-neutral-400">
        <div className="flex gap-1">
         <img className=" size-11 object-cover rounded-full" src={image} alt="" />
        <div className="flex flex-col">
        <p>{name}</p>
        <p>{email}</p>
        </div>
        </div>
         <p>{phone}</p>
        </div>
    );
}


