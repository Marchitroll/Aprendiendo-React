import TwitterFollowCard from "./TwitterFollowCard";
import './App.css';

export default function App() {
    const usuarios = [
        {userName: 'Marchitroll', name: 'Marchitroll', isFollowing: true},
        {userName: 'ArcanaNug', name: 'ArcanaNug', isFollowing: false},
        {userName: 'LeiaAdoreia', name: 'Leia', isFollowing: true},
        {userName: 'ElRichMC', name: 'El señor de la bedrock', isFollowing: true},
    ]
  return (
    <>
    {usuarios.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
        >{name}</TwitterFollowCard>
    ))}
    </>
  );
}