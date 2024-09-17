/* eslint-disable @next/next/no-img-element */

import { User } from "@/skirm-app-shared/user";
import { Avatar } from "@radix-ui/themes";


export default function UsersTableRow({userName, phone, email, image}: User) {
    return (
        <div className="grid grid-cols-2 text-sm py-2 items-center text-neutral-400">
        <div className="flex gap-1">
        <Avatar variant="solid" color="gray" fallback={userName[0].toUpperCase() ?? "?"} size="3" radius="full"className="object-cover"  src={image}/>
        <div className="flex flex-col">
        <p>{userName}</p>
        <p>{email}</p>
        </div>
        </div>
         <p>{phone}</p>
        </div>
    );
}


