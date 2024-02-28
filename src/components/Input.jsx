import { PropTypes } from "prop-types";
import "./Input.css";

function Input({labelText, placeholderText, onChange}) {
    return (
        <label>
            {labelText} 
            <input 
                placeholder={placeholderText} 
                onChange={onChange}
            />
        </label>
    );
}
Input.propTypes = {
    labelText: PropTypes.string.isRequired,
    placeholderText: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }

export default Input;