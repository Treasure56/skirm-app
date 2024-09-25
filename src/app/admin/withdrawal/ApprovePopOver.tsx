import { Dialog } from "@radix-ui/themes";
import { IoIosClose } from "react-icons/io";

export default function ApprovePopOver({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>{children}</Dialog.Trigger>
      <Dialog.Content
        className="w-[400px] max-w-full p-6 bg-white rounded-lg shadow-xl relative "
        style={{ width: "400px", height: "200px" }}
      >
        <Dialog.Close className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
          <IoIosClose className="text-2xl cursor-pointer" />
        </Dialog.Close>

        <h3 className="text-lg font-semibold mb-4 text-center text-gray-800">
          Confirm Transfer
        </h3>

        <Dialog.Description>
          <p className="text-sm text-gray-600 mb-6 text-center px-4">
            Are you sure you have made this transfer? Please confirm to proceed.
          </p>
        </Dialog.Description>

        <div className="grid grid-cols-2 gap-4">
          <button className="bg-secondary text-white font-medium rounded-md py-2 px-6 hover:bg-secondary-dark focus:ring-2 focus:ring-secondary focus:ring-opacity-50 transition">
            Yes
          </button>
          <Dialog.Close>
            <button className="bg-gray-200 text-gray-800 font-medium rounded-md py-2 px-6 hover:bg-gray-300 focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 transition">
              No
            </button>
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
}
