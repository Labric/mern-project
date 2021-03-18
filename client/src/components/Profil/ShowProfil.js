import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Posts/Card';
import { isEmpty } from '../utils';

const ShowProfil = () => {
    const posts = useSelector((state) => state.postReducer);
    return (
      <div className="main">
        <div className="thread-container">
        <ul>
          {!isEmpty(posts[0]) &&
            posts.map((post) => {
              return <Card post={post} key={post._id} />;
            })}
        </ul>
      </div></div>
    );
};

export default ShowProfil;