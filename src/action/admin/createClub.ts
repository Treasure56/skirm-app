import { formDataToObject } from "@/functions/helpers";
import { ActionResponse, ApiResponse } from "@/types/basicTypes";
import { apis, validators } from "@/utils";
import { ServerRequest } from "@/utils/serverRequest";
import { z } from "zod";
import { uploadFile } from "./uploadFile";

const schema = z.object({
  name: validators.min3,
  country: validators.min3,
  state: validators.min3,
  primaryColor: validators.min3,
  homeLeague: validators.min3,
});
type FormType = z.infer<typeof schema>;

export async function createClub(
  _: ActionResponse,
  formData: FormData
): Promise<ActionResponse> {
  const data = formDataToObject<FormType>(formData);

  const validate = schema.safeParse(data);
  if (!validate.success)
    return { fieldErrors: validate.error.flatten().fieldErrors };
  try {
    const logo = await uploadFile(formData);
    if (!logo) return { error: "Image upload failed" };

    const req = await ServerRequest.post(apis.admin.createClube, {
      ...data,
      logo
    });
    const res: ApiResponse = await req?.json();
    if(res.status == 201) return {success: "club created successfully", data: 1};
    else return {error: res.data};
  } catch (e) {
    return {error: "Something went wrong"};
  }
}
