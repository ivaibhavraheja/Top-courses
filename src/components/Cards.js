import React from "react";
import Card from './Card';
import { useState } from "react";

const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;

    const[likedCourses, setLikedCourses] = useState([]);

    //returns you a list of all the courses received from the api data
    const getCourses = () => {
        if(category === "All"){
            let allCourses = [];
            Object.values(courses).forEach(array => {
                array.forEach(course => {
                    allCourses.push(course);
                })
            })
            return allCourses;
        }
        else{
            //main sirf specific category ka data array krunga
            return courses[category];
        }
    }

    return(
        <div className="flex flex-wrap gap-4 mb-4 justify-center ">
            {
                getCourses().map( (course) => (
                    <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
                ))
            }
        </div>
    );
}

export default Cards;