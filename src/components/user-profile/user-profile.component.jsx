import React from 'react';
import WithData from '../../HOC/with-data-hoc/with-data.component';

const UserProfile = ({ data, name, email }) => (
  <div className='container'>
    <h1 className="mb-0">{name}</h1>
    <h2>{email}</h2>
    <hr/>
    <h1>Posts</h1>
    {data.map(post => (
      <div className='post' key={post.id}>
        <h1>{post.title}</h1>
        <p> {post.body} </p>
      </div>
    ))}
  </div>
);

export default WithData(UserProfile);
