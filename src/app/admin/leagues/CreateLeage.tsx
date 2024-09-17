import { AppInput, FormButton } from "@/components/form";
import { AlertDialog } from "@radix-ui/themes";
import { IoIosClose } from "react-icons/io";

export default function CreateLeague({ children }: { children: React.ReactNode }) {
    return (
        <AlertDialog.Root>
            <AlertDialog.Trigger >
             {children}
            </AlertDialog.Trigger>
            <AlertDialog.Content>
            <div className="flex justify-between pb-6">
                    <h4 className="font-semibold">Add New League</h4>
                    <AlertDialog.Cancel>
                    <IoIosClose className="text-xl" />
                    </AlertDialog.Cancel>

                        </div>
                    <form className="flex flex-col gap-4">
                {
                    fields.map((item) => {
                        return <AppInput key={item.name} {...item} />
                    })
                }
                <FormButton className="btn-primary p-2">Register</FormButton>
                </form>
            </AlertDialog.Content>

        </AlertDialog.Root>
    );
}

const fields = [
    {
        title: "Title",
        name: "title",
        type: "text",
        placeholder: "Name"
    },
    {
        title: "Start Date",
        name: "startDate",
        type: "date",
        placeholder: "Enter Start Date"
    },
    {
        title: "End Date",
        name: "endDate",
        type: "date",
        placeholder: "Enter End Date"
    },
    {
        title: "Date",
        name: "date",
        type: "date",
        placeholder: "Enter Date"
    }
]