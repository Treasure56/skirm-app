import TeamFilter from "@/components/admin/TeamFilter";
import { AppInput, FormButton } from "@/components/form";
import { AlertDialog } from "@radix-ui/themes";
import { IoIosClose } from "react-icons/io";

export default function CreateSkirm({ children }: { children: React.ReactNode }) {
    return (
        <AlertDialog.Root>
            <AlertDialog.Trigger >
             {children}
            </AlertDialog.Trigger>
            <AlertDialog.Content>
            <div className="flex justify-between pb-6">
                    <h4 className="font-semibold">Add New Skirm</h4>
                    <AlertDialog.Cancel>
                    <IoIosClose className="text-xl" />
                    </AlertDialog.Cancel>

                        </div>
                    <form className="flex flex-col gap-4">
                        <TeamFilter />
                {
                    fields.map((item) => {
                        return <AppInput key={item.name} {...item} />
                    })
                }
                <FormButton className="btn-primary p-2">Submit</FormButton>
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
        placeholder: "",
        title: "Logo",
        name: "logo",
        type: "file",
    }
]