import { AppInput, FormButton } from "@/components/form";

export default function Form() {
    return (
        <form  className="flex flex-col gap-4 ">
          <AppInput name="fullName" title="Full name" placeholder="Jon Doe" />
    
          <AppInput name="email" title="Email" placeholder="example@example" />
          <AppInput
            name="message"
            title="Message"
            placeholder="Your message"
            textarea
          />
          <FormButton className="btn-primary !p-2">
            Submit 
          </FormButton>
        </form>
      );
}