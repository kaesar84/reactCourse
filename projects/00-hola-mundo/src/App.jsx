import "./App.css";

import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
  const format = (userName) => `@${userName}`;
  return (
    <>
      <section className="App">
        <TwitterFollowCard formatUserName={format} userName="goku" initialIsFollowing={true}>
          Son Goku
          {/* prom childre */}
        </TwitterFollowCard>

        <TwitterFollowCard formatUserName={format} userName="vegeta">
          Vegeta
        </TwitterFollowCard>

        <TwitterFollowCard formatUserName={format} userName="goten">
          Son Goten
        </TwitterFollowCard>
      </section>
    </>
  );
}

// 1:38
