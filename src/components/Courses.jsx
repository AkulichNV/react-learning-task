import Button from "./Button";
import CourseCard from "./CourseCard";
import SearchBar from "./SearchBar";
import "./Courses.css" 

function Courses() {
    return (
        <div className="courses-list">
            <div className="courses-bar">
                <SearchBar />
                <Button 
                    buttonText="Add new course"
                    buttonClick={() => { console.log("Click Add new course"); } }
                />
            </div>
            
            <CourseCard />
        </div>
    );
}

export default Courses;