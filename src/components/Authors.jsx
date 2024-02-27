import { PropTypes } from "prop-types";
import { useState, useEffect } from 'react';

import "./Authors.css";

function Authors(props) {
    const authorsId = props.authorsId;
    const [authors, setAuthors] = useState([]);
  useEffect(() => {
    fetch('https://github.com/AkulichNV/react-learning-task/blob/dev/src/assets/data/mockedAuthorsList.json')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setAuthors(data);
      });
  }, []);
    function authorsData() {
        const arr = authorsId.forEach((item, i) => { if (item === authors.id) authorsId[i] = authors.name; });
        return arr.join(", ");
    }
    return (
        <div>
            <h4>Authors</h4>
            <span>{authorsData}</span>
        </div>
    );
}
Authors.propTypes = {
    authorsId: PropTypes.array,
  }

export default Authors;