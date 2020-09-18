import api from "./api-config";

export const loginUser = async (loginData) => {
  try {
    const resp = await api.post("/auth/login", { authentication: loginData });
    localStorage.setItem("apartFixAuthToken", resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    console.log(resp);
    return resp.data.user;
  } catch (error) {
    throw error;
  }
};

export const registerUser = async (registerData) => {
  try {
    const resp = await api.post("/users/", { user: registerData });
    localStorage.setItem("apartFixAuthToken", resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    console.log(resp.data.user);
    return resp.data.user;
  } catch (error) {
    throw error;
  }
};

export const userEdit = async (userEditData, id) => {
  try {
    const token = localStorage.getItem("apartFixAuthToken");

    const resp = await api.put(`/users/${id}`, {
      user: userEditData,
    });
    //localStorage.setItem("apartFixAuthToken", resp.data.token);
    // console.log(resp.data);
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const verifyUser = async () => {
  try {
    const token = localStorage.getItem("apartFixAuthToken");
    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const resp = await api.get("/auth/verify");
      return resp.data;
    }
    return null;
  } catch (error) {
    throw error;
  }
};

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
};
