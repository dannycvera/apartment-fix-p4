import api from "./apiConfig";

export const getAllIssues = async () => {
  try {
    const resp = await api.get(`/issues`);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const getIssues = async (userId) => {
  try {
    const resp = await api.get(`/users/${userId}/issues`);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const getIssue = async (issueId) => {
  try {
    const resp = await api.get(`/issues/${issueId}`);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const createIssue = async (userId) => {
  try {
    const resp = await api.post(`/users/${userId}/issues`);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const updateIssue = async (issueId) => {
  try {
    const resp = await api.put(`/issues/${issueId}`);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const deleteIssue = async (issueId) => {
  try {
    const resp = await api.delete(`/issues/${issueId}`);
    return resp.data;
  } catch (error) {
    throw error;
  }
};
