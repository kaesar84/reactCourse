import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

const users = [
  {
    userName: "goku",
    name: "Son Goku",
    isFollowing: true,
  },
  {
    userName: "vegeta",
    name: "Vegeta",
    isFollowing: false,
  },
  {
    userName: "goten",
    name: "Son Goten",
    isFollowing: true,
  },
];

export function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}
