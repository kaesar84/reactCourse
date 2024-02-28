import { useState } from "react";

/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export function TwitterFollowCard({ children, formatUserName, userName, initialIsFollowing }) {
  // Inicializa el estado, la prop le da el valor inicial, en este caso boolean 
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  // Equivalencia
  // ESTADO INICIAL
  // const state = useState(false);
  // const isFollowing = state[0];
  // INTERRRUPTOR
  // const setIsFollowing = state[1]

  // permuta los estados
  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  const buttonClassNAme = isFollowing
    ? "tw-followCard-aside-btn -is-following"
    : "tw-followCard-aside-btn";

  const text = isFollowing ? "Siguiendo" : "Seguir";

  const imageSrc = `https://unavatar.io/twitter/${userName}`;

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={imageSrc}
          alt="Avatar de Goku"
        />

        <div className="tw-followCard-content">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUsername">
            {formatUserName(userName)}
          </span>
        </div>
      </header>
      <aside className="tw-followCard-aside">
        <button onClick={handleClick} className={buttonClassNAme}>
        <span className="tw-followCard-text">{text}</span> 
          <span className="tw-followCard-StopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
