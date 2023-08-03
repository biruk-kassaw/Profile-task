import React from 'react';
interface WelcomeProps {
  name: string;
}

const WelcomeHeader: React.FC<WelcomeProps> = ({ name }) => {
  return <h1 className="display-5 text-center mb-5">Welcome, {name}!</h1>;
};

export default WelcomeHeader;
