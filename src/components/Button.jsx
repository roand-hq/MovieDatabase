const Button = ({ onClick, text, color }) => {
    return (
      <button onClick={onClick} className={`btn btn-${color} me-1`}>
        {text}
      </button>
    );
  };
  
  export { Button };