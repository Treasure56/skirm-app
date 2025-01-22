"use client";

import { forgotPassword } from "@/action";
import { FormButton, FormMessage } from "@/components/form";
import AppInput, { AppInputProps } from "@/components/form/AppInput";
import { paths } from "@/utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

export default function Page() {

  const [res, action] = useFormState(forgotPassword, {});

  const {replace} = useRouter()
  
  const [level, setLevel] = useState(0);
  
  useEffect(() =>{
    if(res.data && res.data == 1) setLevel(1);
    if(res.data && res.data == 2) setTimeout(() => replace(paths.adminLogin), 2000);

  },[res])

  return (
    <div className=" py-8">
      <h2 className=" heading">Forgot Password</h2>
      <form action={action} className="flex flex-col gap-3 py-3 text-neutral-500">
        <FormMessage res={res} />
        <AppInput
          readonly={level != 0}
          name="email"
          title="Email"
          placeholder="Email"
          error={res?.fieldErrors?.email}
        />
        {level == 1 && (
          <AppInput name="resetCode" title="OTP" placeholder=" Enter your code"
           error={res?.fieldErrors?.resetCode} />
        )}
        {level == 1 &&
          loginFields.map((item) => <AppInput key={item.name} {...item} error={res?.fieldErrors?.[item.name]} />)}

        <FormButton className="btn-primary">Submit</FormButton>
      </form>
    </div>
  );
}

const loginFields: AppInputProps[] = [
  {
    name: "newPassword",
    title: "New Password",
    type: "password",
    placeholder: " Enter your Password",
  },
  {
    name: "confirmPassword",
    title: "Confirm Password",
    type: "password",
    placeholder: " Enter your Password",
  },
];
