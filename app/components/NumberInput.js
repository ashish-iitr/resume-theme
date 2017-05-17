import React, { PropTypes } from 'react';

const NumberInput = ({name, onChange, placeholder, value}) => {
    return (
    <div className="form-group row">
      <div className="field col-md-2">
        <input
          type="number"
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}/>
      </div>
    </div>
  );
};

NumberInput.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string
};

export default NumberInput;
