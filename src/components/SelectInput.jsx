const SelectInput = ({ name, label, options, register, error }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <select
        id={name}
        {...register(name, { required: `${label} es requerido` })}
        className={`form-select ${error ? "is-invalid" : ""}`}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={`${name}Feedback`}
      >
        <option value="">Seleccione</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <div id={`${name}Feedback`} className="invalid-feedback">
          {error.message || error}
        </div>
      )}
    </div>
  );
};

export { SelectInput };
