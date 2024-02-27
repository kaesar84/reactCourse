// eslint-disable-next-line react/prop-types
export function TwitterFollowCard({ userName, name, isFollowing, formatUserName }) {
  const imageSrc = `https://unavatar.io/twitter/${userName}`;
  
  console.log(isFollowing)
  
  return (
    

      <article className="tw-followCard">
        <header className="tw-followCard-header">
          <img
            className="tw-followCard-avatar"
            src={imageSrc}
            alt="Avatar de Goku"
          />

          <div className="tw-followCard-content">
            <strong>{name}</strong>
            <span className="tw-followCard-infoUsername">{formatUserName(userName)}</span>
          </div>
        </header>
        <aside className="tw-followCard-aside">
          <button className="tw-followCard-aside-btn">Seguir</button>
        </aside>
      </article>
    
  );
}