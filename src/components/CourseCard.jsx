import Button from "./Button";
import Authors from "./Authors";
import { PropTypes } from "prop-types";

import "./CourseCard.css"

function CourseCard({courses}) {

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
CourseCard.propTypes = {
  courses: PropTypes.array.isRequired,
}

export default CourseCard;