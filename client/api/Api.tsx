import axios from "axios";


const baseUrl = "https://tynnerapp.azurewebsites.net";


export const register = async (
  userName: any,
  email: any,
  passwordHash: any,
  name: any,
  phoneNumber: any
) => {
  return await axios.post(baseUrl + "/api/Auth/Register", {
    userName,
    email,
    passwordHash,
  });
};

export const login = async (email: any, passwordHash: any) => {
  return await axios.post(baseUrl + "/api/Auth/Token", {
    email,
    passwordHash,
  });
};



// export const forgotPassword = async (username) => {
//   const response = await axios({
//     method: "get",
//     url: baseUrl + "/forgot-password/" + username,
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   return response.data;
// };

export const postTask = async (tarefa: string, tag: string, prioridade: string, data_tarefa: string) => {
  return await axios({
    method: "post",
    url: baseUrl + "/api/Tasks",
    data: {
      tarefa,
      tag,
      prioridade,
      data_tarefa
    },
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
      'Access-Control-Allow-Origin': '*',
    },
  });
};

// export const reaction = async (feedId, like, love) => {
//   return await axios({
//     method: "post",
//     url: baseUrl + "/reaction",
//     data: {
//       feedId,
//       like,
//       love,
//     },
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer " + localStorage.getItem("token"),
//     },
//   });
// };

// export const feed = async () => {
//   const response = await axios({
//     method: "get",
//     url: baseUrl + "/feeds",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer " + localStorage.getItem("token"),
//     },
//   });

//   return response.data;
// };
