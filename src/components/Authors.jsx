import { PropTypes } from "prop-types";
import { useState, useEffect } from 'react';

import "./Authors.css";

function Authors({ authorsId }) {
    const [authors, setAuthors] = useState([]);
  useEffect(() => {
    var responseClone;
    fetch('./mockedAuthorsList.json', {
        headers : { 
          'Accept': 'application/json'
         }
    })
    .then((res) => {
        responseClone = res.clone();
        return res.json();
      })
      .then((data) => {     
        let arr = authorsId.map(element => {
            for (let i = 0; i < data.length; i++) {
                if (data[i].id === element) {
                    element = data[i].name;
                }
            }
            return element;
        });
        setAuthors(arr);

    }, function (rejectionReason) { 
            console.log('Error parsing JSON from response:', rejectionReason, responseClone); 
            responseClone.text() 
            .then(function (bodyText) {
                console.log('Received the following instead of valid JSON:', bodyText);
            });
      });
  }, []);
    return (
        <div className="course-authors">
            <h4>Authors: </h4>
            <p className="authors-text">{authors.join(', ')}</p>
        </div>
    );
}
Authors.propTypes = {
    authorsId: PropTypes.array,
  }

export default Authors;