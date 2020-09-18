import api from "./api-config";

export const getComments = async (issueId) => {
  try {
    const resp = await api.get(`/issues/${issueId}/comments`);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const getComment = async (commentId) => {
  try {
    const resp = await api.get(`/comments/${commentId}`);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const createComment = async (issueId) => {
  try {
    const resp = await api.post(`/issues/${issueId}/comments/`);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const updateComment = async (commentId) => {
  try {
    const resp = await api.put(`/comments/${commentId}`);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const deleteComment = async (commentId) => {
  try {
    const resp = await api.delete(`/comments/${commentId}`);
    return resp.data;
  } catch (error) {
    throw error;
  }
};
