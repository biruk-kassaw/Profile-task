import * as React from 'react';
import './style.css';
import User from './Models/User';
import Card from './Components/Card';
import WelcomeHeader from './Components/WelcomeHeader';

export default function App() {
  // user objecct
  let user: User = {
    name: 'Ronald Araujo',
    avatar:
      'https://i.seadn.io/gae/Lq8u3CqXYVPML-0MVp1L6ATqcZ2Rl0HH5s5S96VDzMIMF1RIN9ja-ZEfyflIZMzGy-2bDPpjj-EhAEzAGL7414EgKyyOyBhTSZ5J?auto=format&dpr=1&w=1000',
    imagePath:
      'https://pbs.twimg.com/media/Fdl1VfXXwAIIetD?format=jpg&name=4096x4096',
    description:
      'Ronald Federico Araújo da Silva is a Uruguayan professional footballer who plays as a centre-back or right-back for La Liga club Barcelona and the Uruguay national team',
    email: 'aroujo@barca.com',
    link: 'araujo.com',
  };

  return (
    <div>
      <WelcomeHeader name={user.name} />
      <Card user={user} />
    </div>
  );
}
