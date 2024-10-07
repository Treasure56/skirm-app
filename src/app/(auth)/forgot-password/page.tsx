'use client'

import { FormButton } from "@/components/form";
import AppInput, { AppInputProps } from "@/components/form/AppInput";

export default function Page() {
  
  return (
    <div className=" py-8">
      <h2 className=" heading">Forgot Password</h2>
      <form
        className="flex flex-col gap-3 py-3 text-neutral-500"
      >
        {loginFields.map((item) => {
          return <AppInput key={item.name} {...item} />;
        })}
        <FormButton className="btn-primary">Submit</FormButton>
      </form>
    </div>
  );
}

const loginFields: AppInputProps[] = [
 
    
    {
        name: "email",
        title: "Email",
        type: "email",
        placeholder: "Email Address",
      },
     
 
];
