import { useState, useEffect } from "react";
import { getCommentsChunk } from "../../services/api/comments-api";
import { CommentsConsts } from "../../consts/comments.consts";
import InfiniteScroll from "react-infinite-scroll-component";
import Item from "../../components/ListItem";

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
    <div style={{ padding: "5%", height: "100%" }}>
      <InfiniteScroll
        style={{ height: "100%", width: "100%" }}
        className="infinite-scroll-container"
        dataLength={comments.length} //This is important field to render the next data
        next={getComment}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        refreshFunction={getComment}
        pullDownToRefresh
        pullDownToRefreshThreshold={50}
        pullDownToRefreshContent={
          <h3 style={{ textAlign: "center" }}>&#8595; Pull down to refresh</h3>
        }
        releaseToRefreshContent={
          <h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
        }
      >
        {comments.map((comment, index) => (
          <Item content={comment} key={index} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default CommentList;
