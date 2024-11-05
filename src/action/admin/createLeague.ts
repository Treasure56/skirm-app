import { formDataToObject } from "@/functions/helpers";
import { ActionResponse, ApiResponse } from "@/types/basicTypes";
import { apis, validators } from "@/utils";
import { ServerRequest } from "@/utils/serverRequest";
import { z } from "zod";

const schema = z.object({
    title: validators.min3,
    startDate: validators.min3,
    endDate: validators.min3,
});
type FormType = z.infer<typeof schema>;

export async function CreateLeague(
    _: ActionResponse,
    formData: FormData
  ): Promise<ActionResponse> {
    const data = formDataToObject<FormType>(formData);
  
    const validate = schema.safeParse(data);
    if (!validate.success)
      return { fieldErrors: validate.error.flatten().fieldErrors };
    try {
      const req = await ServerRequest.post(apis.admin.CreateLeague,data)
      const res:ApiResponse = await req?.json()
     
      if(res.status == 201) return {success: "League created successfully", data: 1};
      else return {error: res.data};
    } catch (e) {
      return {error: "Something went wrong"};
    }
  }
