function Icon(props) {
  return (
    <div className="Icon">
      {" "}
      <a href={props.href} target="_blank">
        <img src={props.src}></img>
      </a>
    </div>
  );
}

export default Icon;
