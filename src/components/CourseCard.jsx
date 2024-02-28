import Button from "./Button";
import Authors from "./Authors";
import { useState, useEffect } from 'react';

import "./CourseCard.css"

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

    function convertDuration(num) {
      const mm = num % 60;
      const hh = (num - mm) / 60;
      return (hh < 10 ? "0" : "") + hh.toString() + ":" + (mm < 10 ? "0" : "") + mm.toString() + " hours";
    }

    return (
        <div>
             {courses.map((course) => (
            <div key={course.id} className="course-card">
                <div className="course-title-description">
                     <h2>{course.title}</h2>
                     <p>{course.description}</p>
                 </div>
                 <div className="course-properties">
                      <Authors authorsId={course.authors}/>
                      <div className="course-duration">
                        <h4>Duration: </h4>
                        <p>{convertDuration(course.duration)}</p>
                      </div>
                      <div className="course-created">
                        <h4>Created: </h4>
                        <p>{course.creationDate.replaceAll('/', '.')}</p>
                      </div>
                      <Button
                          buttonText="Show course"
                          buttonClick={() => { console.log("Click Show course"); } } />
                  </div>
            </div>
            ))}
        </div>
    );

}

export default CourseCard;