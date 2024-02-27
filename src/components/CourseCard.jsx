import Button from "./Button";
// import { PropTypes } from "prop-types";
import { useState, useEffect } from 'react';

import "./CourseCard.css"
import Authors from "./Authors";

function CourseCard() {
    const [courses, setCourses] = useState([]);
    
  useEffect(() => {
    var responseClone;
    fetch(`./mockedCoursesList.json`, {
        headers : { 

          'Accept': 'application/json'
         }
    })
      .then((res) => {
        responseClone = res.clone();
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setCourses(data);
    }, function (rejectionReason) { 
            console.log('Error parsing JSON from response:', rejectionReason, responseClone); 
            responseClone.text() 
            .then(function (bodyText) {
                console.log('Received the following instead of valid JSON:', bodyText);
            });
      });
  }, []);


    return (
        <div>
             {courses.map((course) => (
            <div key={course.id}>
                <div>
                     <h1>{course.title}</h1>
                     <p>{course.description}</p>
                 </div><div>
                         {/* <h4>Authors: </h4>
                         <span>{idAuthorsCourse}</span> */}
                         <Authors authorsId={course.authors}/>
                         <h4>Duration: </h4><span>{course.duration}</span>
                         
                         <h4>Created: </h4><span>{course.creationDate}</span>
                         
                         <Button
                             buttonText="Show course"
                             buttonClick={() => { console.log("Click Show course"); } } />
                     </div>
            </div>
            ))}
        </div>
    );

}
// CourseCard.propTypes = {
//     titleCourse: PropTypes.string,
//     descriptionCourse: PropTypes.string,
//     idAuthorsCourse: PropTypes.array,
//     durationCourse: PropTypes.number,
//     creationDateCourse: PropTypes.string,
//   }

export default CourseCard;