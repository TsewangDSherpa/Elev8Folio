import Icon from "./Icon";

import ProfileImage from "./ProfileImage";

function Header() {
  let source =
    "https://media.licdn.com/dms/image/D4E03AQHd-_CHqpc2KA/profile-displayphoto-shrink_400_400/0/1664411899093?e=1702512000&v=beta&t=uSXzFHBg6iDvxqKmAbd9xFhgjwG9xVtywMyNNOGlTU4";
  let name = { fname: "Tsewang", lname: "Nyandak" };

  let profileInformation = {
    src: source,
    fname: name.fname,
    lname: name.lname,
  };

  const colors = [
    "#EEE5E9",
    "#AAE629",
    "#DBFCFF",
    "#DA7422",
    "#DBDAEA",
    "#FFF689",
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  const color = colors[randomIndex];

  return (
    <div className="Header" style={{ backgroundColor: color }}>
      <ProfileImage profileInfo={profileInformation} />
      <div className="Icons">
        <Icon
          href="https://www.linkedin.com/in/norsang-nyandak-077577173/"
          src={"https://cdn-icons-png.flaticon.com/512/25/25231.png"}
        />
        <Icon
          src={
            "https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-ya5g47j2.png"
          }
        />
      </div>
    </div>
  );
}

export default Header;
