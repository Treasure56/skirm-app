import { formDataToObject } from "@/functions/helpers";
import { ActionResponse, ApiResponse } from "@/types/basicTypes";
import { apis, validators } from "@/utils";
import { ServerRequest } from "@/utils/serverRequest";
import { z } from "zod";

const schema = z.object({
    homeTeam: validators.min3,
    awayTeam: validators.min3,
    startDateTime: validators.min3,
    endDateTime: validators.min3,
    league: validators.min3,
    isCompleted: validators.min3,
    homeScore: validators.min3,
    awayScore: validators.min3,
    isOverTime: validators.min3,
    isDraw: validators.min3,
});
type FormType = z.infer<typeof schema>;

export async function createMatch(
  _: ActionResponse,
  formData: FormData
): Promise<ActionResponse> {
  const data = formDataToObject<FormType>(formData);

  const validate = schema.safeParse(data);
  if (!validate.success)
    return { fieldErrors: validate.error.flatten().fieldErrors };
  try {
    const req = await ServerRequest.post(apis.admin.createMatch,data)
    const res:ApiResponse = await req?.json()
   
    if(res.status == 201) return {success: "club created successfully", data: 1};
    else return {error: res.data};
  } catch (e) {
    return {error: "Something went wrong"};
  }
}
