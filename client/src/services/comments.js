import api from "./api-config";

export const getComments = async (userId, issueId) => {
  try {
    const resp = await api.get(`/users/${userId}/issues/${issueId}/comments`);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const getComment = async (userId, issueId, commentId) => {
  try {
    const resp = await api.get(
      `/users/${userId}/issues/${issueId}/comments/${commentId}`
    );
    return resp.data;
  } catch (error) {
    throw error;
  }
};
