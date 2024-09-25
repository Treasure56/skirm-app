import { AppInput } from "@/components/form"; // Ensure AppInput can handle the props correctly
import { Dialog } from "@radix-ui/themes";
import { IoIosClose } from "react-icons/io";

export default function DeclinePopOver({ children }: { children: React.ReactNode }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        {children}
      </Dialog.Trigger>
      <Dialog.Content
        className="w-2/3 max-w-full p-6 bg-white rounded-lg shadow-xl relative flex flex-col items-center"
        style={{ width: "400px" }} 
      >
        <Dialog.Close className="absolute top-3 right-3 text-gray-500 hover:text-gray-700">
          <IoIosClose className="text-2xl cursor-pointer" />
        </Dialog.Close>
        
        <h3 className="text-lg font-semibold mb-4 text-center text-gray-800">
          Enter Declination Message
        </h3>
        
        <form className="w-full mb-4">
          <AppInput 
            type="text" 
            name="message" 
            textarea 
            placeholder="Enter declination message" 
          />
        </form>
        
        <button className="bg-primary text-white font-medium rounded-md w-full py-2 hover:bg-primary-dark focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition">
          Decline
        </button>
      </Dialog.Content>
    </Dialog.Root>
  );
}
