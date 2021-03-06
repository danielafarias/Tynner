import axios from "axios";

const baseUrl = "https://bluetodo20211015130137.azurewebsites.net/api";

export const register = async (
  userName: string,
  email: string,
  passwordHash: string
) => {
  return await axios.post(baseUrl + "/Auth/Register", {
    userName,
    email,
    passwordHash,
  });
};

export const login = async (email: string, passwordHash: string) => {
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
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  return response.data;
};

export const postTask = async (
  taskName: string,
  task: string,
  deadLine: string,
  priority: number
) => {
  return await axios({
    method: "post",
    url: baseUrl + "/Todo",
    data: {
      taskName,
      task,
      deadLine,
      priority,
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};

export const updateTask = async (idTask: any, status: boolean) => {
  return await axios({
    method: "put",
    url: baseUrl + "/Todo",
    data: {
      idTask,
      status,
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};

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
