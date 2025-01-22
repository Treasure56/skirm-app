

const HOST = "http://46.202.195.86:8001/api";
export const apis = {
  auth: {
    login: `${HOST}/admin/auth/login`,
    register: `${HOST}/admin/auth/register`,
    forgotPassword: `${HOST}/admin/auth/forgot-password`,
    resetPassword: `${HOST}/admin/auth/reset-password`,
  },
  admin:{
    users: `${HOST}/admin/account/users`,
    getSigleUser: (id:string) => `${HOST}/admin/account/users/${id}`,
    createClube: `${HOST}/admin/account/clubs`,
    imageUpload: `${HOST}/admin/account/upload-image`,
    getAllClubes: `${HOST}/admin/account/clubs`,
    getAllMatches: `${HOST}/admin/account/match`,
    getAllLeagues: `${HOST}/admin/account/leagues`,
    createMatch: `${HOST}/admin/account/match`,
    CreateLeague: `${HOST}/admin/account/leagues`,
  }

  

 
  
};
