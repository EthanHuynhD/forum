// Funcational based component
import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

// Accept property
const InputGroup = ({
  name,
  placeholder,
  value,
  error,
  icon,
  type,
  onChange
}) => {
  return (
    <div className="field control">
      <div className="input is-primary">
        <span placeholder="Placeholder input">
          <i className={icon} />
        </span>
      </div>
      <textarea
        className={classnames("input", {
          "is-danger": error
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {/*invalid error message*/}
      {error && <div className="is-danger">{error}</div>}
    </div>
  );
};

InputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

InputGroup.defaultProps = {
  type: "text"
};

export default InputGroup;
