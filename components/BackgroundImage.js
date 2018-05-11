export default ({ item, number, style }) => (
  <div
    className={"image-carousel"}
    style={{ ...style, backgroundImage: `url(${item.src})` }}
  />
);
