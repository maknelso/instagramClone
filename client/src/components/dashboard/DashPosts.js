import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import DashSinglePost from './DashSinglePost';

const DashPosts = ({ handleOpen, userFollowingPosts }) => {
  const [favicon, setFavicon] = useState({});
  const [failedAuth, setFailedAuth] = useState(false);
  const [commentModal, setCommentModal] = useState(false);
  const [postId, setPostId] = useState(2);

  useEffect(() => {
    let res = {};
    axios.get('/api/like').then((response) => {
      response.data.forEach((user) => {
        res[user.post_id] = true;
      });
      setFavicon(res);
    });
  }, []);

  const handleLike = (post_id) => {
    setFavicon({ ...favicon, [post_id]: !favicon[post_id] });

    const token = sessionStorage.getItem('token');
    if (!token) {
      setFailedAuth(true);
      return;
    }

    axios
      .post(
        '/api/protect',
        {
          post_id: post_id,
          like: !favicon[post_id],
        },
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      )
      .then(function (response) {
        // console.log(response);
      })
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
