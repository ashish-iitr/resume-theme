import React, { PropTypes } from 'react';

const TextAreaInput = ({name, onChange, placeholder, value, row, width}) => {
    return (
    <div className="form-group row">
      <div className={width}>
          <textarea className="form-control" rows={row} name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}></textarea>
          <span className="help-block">Write summary above</span>
      </div>
    </div>
  );
};

TextAreaInput.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    row: PropTypes.string,
    width: PropTypes.string
};

export default TextAreaInput;
