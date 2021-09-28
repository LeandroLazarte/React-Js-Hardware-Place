const ButtonClick = (handleClick, handleClick1) => {
  return (
    <p className="count">
      <button className="button" onClick={handleClick1}>
        -
      </button>
      <button className="button" onClick={handleClick}>
        +
      </button>
    </p>
  );
};

export default ButtonClick;
