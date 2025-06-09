const InputText = ({ name, label, placeholder, type = "text", register, error }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name, { required: `${label} es requerido` })}
        className={`form-control ${error ? "is-invalid" : ""}`}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={`${name}Feedback`}
      />
      {error && (
        <div id={`${name}Feedback`} className="invalid-feedback">
          {error.message || error}
        </div>
      )}
    </div>
  );
};

export { InputText };
