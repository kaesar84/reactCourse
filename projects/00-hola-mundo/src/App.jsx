import "./App.css";

import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
  const format = (userName) => `@${userName}`;
  return (
    <>
      <section className="App">
        <TwitterFollowCard
          isFollowing={true}
          formatUserName={format}
          userName="goku">
        Son Goku
        {/* prom childre */}
        </TwitterFollowCard>
        
        <TwitterFollowCard
          isFollowing ={false}
          formatUserName={format}
          userName="vegeta">
        Vegeta
        </TwitterFollowCard>

        <TwitterFollowCard
          isFollowing
          formatUserName={format}
          userName="goten">
        Son Goten
        </TwitterFollowCard>
      
      </section>
    </>
  );
}
