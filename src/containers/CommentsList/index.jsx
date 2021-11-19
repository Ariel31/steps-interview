import { useState, useEffect } from "react";
import { getCommentsChunk } from "../../services/api/comments-api";
import { CommentsConsts } from "../../consts/comments.consts";
import { FixedSizeList } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";

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
    <InfiniteLoader
      isItemLoaded={index => index < comments.length}
      itemCount={1000}
      loadMoreItems={getComment}
    >
      {({ onItemsRendered, ref }) => (
        <FixedSizeList
          height={300}
          width={800}
          itemCount={comments.length}
          itemSize={20}
          onItemsRendered={onItemsRendered}
          ref={ref}
        >
          {({ index, style }) => (
            <div style={style}>
              <label>{comments[index].id}</label>
            </div>
          )}
        </FixedSizeList>
      )}
    </InfiniteLoader>
  );
};

export default CommentList;
