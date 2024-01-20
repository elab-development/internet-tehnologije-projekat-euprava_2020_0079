const InputField = ({ label, type, name, value, onChange, required }) => {
    return (
      <div className="form-group">
        {label && <label htmlFor={name}>{label}</label>}
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="form-control"
        />
      </div>
    );
  };

  
  export default InputField;