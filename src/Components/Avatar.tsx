import React from 'react';

interface Props {
  avatar: string;
}

let Avatar: (props: Props) => JSX.Element = ({ avatar }) => {
  console.log(avatar);
  return (
    <div className="Avatar">
      <img src={avatar} alt="user profile" style={{ width: '400px' }} />
    </div>
  );
};
export default Avatar;
