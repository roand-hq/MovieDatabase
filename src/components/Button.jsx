const Button = ({ onClick, text, color, icon }) => {
    return (
      <button onClick={onClick} className={`btn btn-${color} m-1`}>
      {icon && <i className={`bi bi-${icon} me-2`}></i>}
        {text}
      </button>
    );
  };
  
  export { Button };