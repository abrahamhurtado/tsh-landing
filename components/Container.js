export default props => {
  const { id, style } = props;
  const otherProps = {};

  if (id) {
    otherProps[id] = id;
  }

  return (
    <div className="container" id={`${id || ""}`} style={style}>
      {props.render()}
    </div>
  );
};
