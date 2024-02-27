// eslint-disable-next-line react/prop-types
export function TwitterFollowCard({
  children,
  formatUserName,
  userName,
  isFollowing,
}) {
  const imageSrc = `https://unavatar.io/twitter/${userName}`;
  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassNAme = isFollowing
    ? "tw-followCard-aside-btn -is-following"
    : "tw-followCard-aside-btn";

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
        <button className={buttonClassNAme}>{text}</button>
      </aside>
    </article>
  );
}
