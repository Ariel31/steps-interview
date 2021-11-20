import axios from "axios";

const commentsEndPoints = {
  getAllComments: "https://jsonplaceholder.typicode.com/comments",
  addComment: "https://test.steps.me/test/testAssignComment"
};

export const getCommentsChunk = async (start, end) => {
  try {
    const result = await axios.get(commentsEndPoints.getAllComments, {
      params: { _start: start, _end: end }
    });
    return result.data;
  } catch (ex) {
    console.error("failed to get comments", ex);
  }
};

export const addComment = async comment => {
  try {
    return await axios.post(commentsEndPoints.addComment, comment);
  } catch (ex) {
    console.error("Failed To Add Comment");
  }
};
