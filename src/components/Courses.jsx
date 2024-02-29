import Button from "./Button";
import CourseCard from "./CourseCard";
import SearchBar from "./SearchBar";
import { useState, useEffect } from 'react';
import "./Courses.css" 

function Courses() {

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

    const [search, setSearch] = useState("");

    const search_parameters = Object.keys(Object.assign({}, ...courses));
  
    function searchFilter(data) {
      return data.filter((data) =>
        search_parameters.some((parameter) =>
          data[parameter].toString().toLowerCase().includes(search)
        )
      );
    }

    return (
        <div className="courses-list">
            <div className="courses-bar">
                <SearchBar passSearch={setSearch}/>
                <Button 
                    buttonText="Add new course"
                    buttonClick={() => { console.log("Click Add new course"); } }
                />
            </div>
            
            <CourseCard 
                courses={searchFilter(courses)}
            />
        </div>
    );
}

export default Courses;