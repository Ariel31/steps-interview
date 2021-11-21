import { useState, useEffect } from "react";
import { getCommentsChunk } from "../../../services/api/comments-api";
import { CommentsConsts } from "../../../consts/comments.consts";
import InfiniteScroll from "react-infinite-scroll-component";
import Item from "../../../components/Comments/ListItem";
import "./index.css";

const CommentList = () => {
  const [comments, setComments] = useState([]);

  const getComment = async () => {
    const newChunkOfComments = await getCommentsChunk(
      comments.length,
      comments.length + CommentsConsts.COMMENTS_TO_SHOW
    );
    setComments(prev => [...prev, ...newChunkOfComments]);
  };

  useEffect(() => {
    getComment();
  }, []);

  return (
    <div className="infinite-scroll-container">
      <InfiniteScroll
        dataLength={comments.length}
        next={getComment}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        refreshFunction={getComment}
        pullDownToRefresh
        pullDownToRefreshThreshold={50}
      >
        {comments.map((comment, index) => (
          <Item content={comment} key={index} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default CommentList;
