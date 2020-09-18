import api from "./apiConfig";

export const getIssues = async (userId) => {
  try {
    const resp = await api.get(`/users/${userId}/issues/`);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const getIssue = async (userId, issueId) => {
  try {
    const resp = await api.get(`/users/${userId}/issues/${issueId}`);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const createIssue = async (userId) => {
  try {
    const resp = await api.post(`/users/${userId}/issues/`);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const updateIssue = async (userId, issueId) => {
  try {
    const resp = await api.put(`/users/${userId}/issues/${issueId}`);
    return resp.data;
  } catch (error) {
    throw error;
  }
};
