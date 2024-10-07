'use client'

import { FormButton } from "@/components/form";
import AppInput, { AppInputProps } from "@/components/form/AppInput";

export default function Page() {
  
  return (
    <div className=" py-8">
      <h2 className=" heading">Reset Password</h2>
      <form
        className="flex flex-col gap-3 py-3 text-neutral-500"
      >
        {loginFields.map((item) => {
          return <AppInput key={item.name} {...item} />;
        })}
        <FormButton className="btn-primary">Reset password</FormButton>
      </form>
    </div>
  );
}

const loginFields: AppInputProps[] = [
 
  {
    name: "password",
    title: "Password",
    type: "password",
    placeholder: "Enter your Password",
  },
  {
    name: "confirm_password",
    title: "Confirm password",
    type: "password",
    placeholder: "Confirm your Password",
  },
 
];
