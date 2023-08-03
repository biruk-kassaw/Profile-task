import React from 'react';

import Avatar from './Avatar';
import Description from './Description';
import User from '../models';

interface Props {
  user: User;
}

let Card: (props: Props) => JSX.Element = ({ user }) => {
  return (
    <div className="card p-5 mx-auto shadow" style={{ width: '500px' }}>
      {/* displaying avatar and and description */}
      <Avatar avatar={user.avatar} />
      <Description user={user} />
    </div>
  );
};
export default Card;
