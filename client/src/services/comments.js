import api from "./api-config";

export const getComments = async () => {
  try {
    const response = await api.get("/comments");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getComment = async (userId, issueId, commentId) => {
  try {
    const response = await api.get(
      `/users/${userId}/issues/${issueId}/comments/${commentId}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
