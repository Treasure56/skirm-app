// import { SkirmDetailed } from "@/skirm-app-shared";
import { AlertDialog } from "@radix-ui/themes";
import { IoIosClose } from "react-icons/io";

export default function Modal({children}: {children: React.ReactNode} ) {
    return (
        <AlertDialog.Root>
            <AlertDialog.Trigger>
                {children}
            </AlertDialog.Trigger>
            <AlertDialog.Content className="flex flex-col">
               <AlertDialog.Cancel className="self-end">
               <IoIosClose className="text-xl" />
               </AlertDialog.Cancel>
               <p>hello pop up?</p>
            </AlertDialog.Content>
        </AlertDialog.Root>
    );
}