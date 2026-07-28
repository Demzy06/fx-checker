function Button({ text, icon, onClick, styles }) {
  return (
    <button className={styles}>
      {icon && (
        <span>
          <img src={icon} alt="icon" />
        </span>
      )}
      {text}
    </button>
  );
}

export default Button;
