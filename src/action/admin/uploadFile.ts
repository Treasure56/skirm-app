import { apis } from "@/utils";
import { ServerRequest } from "@/utils/serverRequest";

export async function uploadFile(formData: FormData): Promise<string | null> {
  try {
    const req = await ServerRequest.post(apis.admin.imageUpload, formData);
    const res = await req?.json();
    if (res.status == 201) return res.data;
    else return null;
  } catch (error) {
    return null;
  }
}
