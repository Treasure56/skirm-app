'use client'

import { FormButton } from "@/components/form";
import AppInput, { AppInputProps } from "@/components/form/AppInput";
import { paths } from "@/utils";
import Link from "next/link";

export default function Page() {
  
  return (
    <div className=" py-8">
      <h2 className=" heading">Enter Code</h2>
      <p className="text-sm text-neutral-500">Enter the code sent to your email</p>
      <form
        className="flex flex-col gap-3 py-3 text-neutral-500"
      >
        {loginFields.map((item) => {
          return <AppInput key={item.name} {...item} />;
        })}
        <FormButton className="btn-primary">Submit</FormButton>
        <Link href={paths.resendOtp}>Resend otp</Link>
      </form>
    </div>
  );
}

const loginFields: AppInputProps[] = [
 
    
    {
        name: "code",
        title: "Code",
        type: "number",
        placeholder: "Enter your code",
      },
     
 
];
