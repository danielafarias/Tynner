import axios from "axios";


const baseUrl = "https://bluetodo20211015130137.azurewebsites.net/api";


export const register = async (
  userName: any,
  email: any,
  passwordHash: any,
  name: any,
  phoneNumber: any
) => {
  return await axios.post(baseUrl + "/Auth/Register", {
    userName,
    email,
    passwordHash,
  });
};

export const login = async (email: any, passwordHash: any) => {
  return await axios.post(baseUrl + "/Auth/Token", {
    email,
    passwordHash,
  });
};

export const deleteTask = async (id: string) => {
  const response = await axios({
    method: "delete",
    url: baseUrl + "/Todo/" + id,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token")
    },
  });
  return response.data;
};

export const postTask = async (taskName: string, task: string, taskDate: string, priority: number, ) => {
  return await axios({
    method: "post",
    url: baseUrl + "/Todo",
    data: {
      taskName,
      task,
      taskDate,
      priority
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token")
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

export const getTasks = async () => {
  const response = await axios({
    method: "get",
    url: baseUrl + "/Todo",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });

  return response.data;
};
