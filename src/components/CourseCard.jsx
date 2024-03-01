import Button from "./Button";

import { PropTypes } from "prop-types";

import "./CourseCard.css"
function CourseCard({courses, authors}) {

    function convertDuration(num) {
      const mm = num % 60;
      const hh = (num - mm) / 60;
      return (hh < 10 ? "0" : "") + hh.toString() + ":" + (mm < 10 ? "0" : "") + mm.toString() + " hours";
    }

    function defineAuthorsName(authorsId) {
      let arr = authorsId.map(element => {
        for (let i = 0; i < authors.length; i++) {
            if (authors[i].id === element) {
                element = authors[i].name;
            }
        }
        return element;
    });
    return arr.join(', ');
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
                      <div className="course-authors">
                          <h4>Authors: </h4>
                          <p className="authors-text">{defineAuthorsName(course.authors)}</p>
                      </div>
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
CourseCard.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
}

export default CourseCard;