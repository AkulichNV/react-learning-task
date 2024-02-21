import { PropTypes } from "prop-types";

import "./Button.css";

function Button({ buttonText, buttonClick }) {
    return (
        <button onClick={buttonClick} >
            { buttonText }
        </button>
        
    );
}
Button.propTypes = {
    buttonText: PropTypes.string.isRequired,
    buttonClick: PropTypes.func.isRequired
  }

  export default Button;