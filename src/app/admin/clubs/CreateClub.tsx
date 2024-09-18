import CountryStateSelect from "@/components/admin/Country-StateSelect";
import { AppInput, FormButton } from "@/components/form";
import { AlertDialog } from "@radix-ui/themes";
import { IoIosClose } from "react-icons/io";

export default function CreateClub({ children }: { children: React.ReactNode }) {
    return (
        <AlertDialog.Root>
            <AlertDialog.Trigger >
             {children}
            </AlertDialog.Trigger>
            <AlertDialog.Content>
            <div className="flex justify-between pb-6">
                    <h4 className="font-semibold">Add New Club</h4>
                    <AlertDialog.Cancel>
                    <IoIosClose className="text-xl" />
                    </AlertDialog.Cancel>

                        </div>
                    <form className="flex flex-col gap-4">
                    <CountryStateSelect />
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
        title: "Name",
        name: "name",
        type: "text",
        placeholder: "Enter Name"
    },
    {
        title: "Primary Color",
        name: "primaryColor",
        type: "text",
        placeholder: "Enter color"
    },
    {
        title: "Logo",
        name: "logo",
        type: "file",
        placeholder: ''
    }
]