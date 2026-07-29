function Button({ text, icon, onClick, styles }) {
  return (
    <button className={`${styles} flex items-center`}>
      {icon && (
        <span className="">
          <img src={icon} alt="icon" className="w-5 mr-2" />
        </span>
      )}
      {text}
    </button>
  );
}

export default Button;
