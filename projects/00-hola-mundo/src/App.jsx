import "./App.css";

import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
  const format = (userName) => `@${userName}`;
  return (
    <>
      <section className="App">
        <TwitterFollowCard
          isFollowing
          formatUserName={format}
          userName="goku"
          name="Son Goku"
        />
        <TwitterFollowCard
          isFollowing={false}
          formatUserName={format}
          userName="vegeta"
          name="Vegeta"
        />

        <TwitterFollowCard
          isFollowing
          formatUserName={format}
          userName="goten"
          name="Son Goten"
        />
      </section>
    </>
  );
}
