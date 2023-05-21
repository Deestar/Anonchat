export const Header = ({ name, img }) => {
  return (
    <header>
      <img src={img} />
      <h2>{name}</h2>
      <i className="fa-solid fa-ban"></i>
    </header>
  );
};
