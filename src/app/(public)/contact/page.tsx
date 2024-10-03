// import { Navbar } from "@/components/navbar";
import ContactImage from "./ContactImage";
import Form from "./Form";

export default function Page() {
  return (
    <div className="bg-neutral-background py-10 app-container">
      <div className="flex gap-12 p-4 md:p-10 bg-light flex-col">
        <div className="grid gap-4 md:gap-10 md:grid-cols-2 items-center">
          <ContactImage />
          <div className="md:w-full">
            <h1 className="text-3xl font-bold">Contact Us</h1>
            <p className="text-neutral-400 mb-6">
              Get in touch with us for any queries or to discuss your project.
            </p>

            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
