import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import DashSinglePost from './DashSinglePost';
import { APILike } from '../../api/like';
import { APIProtectPost } from '../../api/user';

const DashPosts = ({ handleOpen, userFollowingPosts }) => {
  const [favicon, setFavicon] = useState({});
  const [commentModal, setCommentModal] = useState(false);
  const [postId, setPostId] = useState(2);

  useEffect(() => {
    let res = {};
    APILike().then((response) => {
      response.data.forEach((user) => {
        res[user.post_id] = true;
      });
      setFavicon(res);
    });
  }, []);

  const handleLike = (post_id) => {
    const body = {
      post_id: post_id,
      like: !favicon[post_id],
    };

    setFavicon({ ...favicon, [post_id]: !favicon[post_id] });

    APIProtectPost(body)
      .then(function (response) {})
      .catch(function (error) {
        console.log(error);
        setFavicon({ ...favicon, [post_id]: favicon[post_id] });
      });
  };

  const handleGetPostId = (post_id) => {
    setPostId(post_id);
    setCommentModal(true);
  };

  return userFollowingPosts.map((post) => {
    return (
      <DashSinglePost
        key={uuidv4()}
        post={post}
        handleOpen={handleOpen}
        favicon={favicon}
        handleLike={handleLike}
        handleGetPostId={handleGetPostId}
        commentModal={commentModal}
        setCommentModal={setCommentModal}
        postId={postId}
        userFollowingPosts={userFollowingPosts}
      />
    );
  });
};

export default DashPosts;
