const AboutusCard = (props) => {
    console.log(props);
    const { login, avatar_url, html_url, name, email, bio } = props.cardData;
  return (
    <div className="about-card">
      <div className="profile-background-picture">
        <img
          src="https://e0.pxfuel.com/wallpapers/931/933/desktop-wallpaper-c-developer-developer-html-developer-and-web-developer-dark-developer-thumbnail.jpg"
          alt=""
        />
      </div>
      <div className="profile-picture">
        <img
          src={avatar_url}
          alt=""
        />
      </div>

      <p className="aboutus-username">@{login}</p>

      <div className="profile-details">
        <p className="aboutus-name">{name}</p>
        <p className="aboutus-email cursor-pointer">{email} nilesh4149yaduvanshi@gmail.com</p>
        <a href={html_url}><p className="aboutus-git">Git-Profile</p></a>
        <div className="flex gap-3 items-center justify-center ml-[-40px] "> 
            <p className="aboutus-bio-text">BIO:</p>
        <p className="aboutus-bio">{bio}</p>
        </div>
      </div>
    </div>
  );
};
export default AboutusCard;
