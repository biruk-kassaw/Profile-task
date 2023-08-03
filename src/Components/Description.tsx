import React from 'react';
import User from '../Models/User';

interface Props {
  user: User;
}

let Description: (user: Props) => JSX.Element = ({ user }) => {
  return (
    <div className="my-3">
      {user.name && (
        <div className="lead">
          <span className="">{user.name}</span>
        </div>
      )}
      {user.email && (
        <div className="">
          <a className="lead">{user.email}</a>
        </div>
      )}
      {user.description && <p className="">{user.description}</p>}
      {user.link && <a href={user.link}>My website</a>}
    </div>
  );
};
export default Description;
