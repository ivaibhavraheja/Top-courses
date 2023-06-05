import React from "react";
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler(){
        //logic
        //pehle se liked list me hai to remove kerdo
        if(likedCourses.includes(course.id)){
            //pehle se like hua pada tha
            setLikedCourses( (prev) => prev.filter((cid)=> (cid !== course.id) )  );
            toast.warning("Like removed");
        }
        else{
            //if list is empty
            if(likedCourses.length === 0){
                setLikedCourses(course.id);
            }
            //list contains some liked courses
            else{
                setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Liked Successfully");
        }
    }

    return(
        <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden text-white">
            <div className="relative">
                <img src={course.image.url} alt=""></img>
                <div className="bg-white absolute w-[40px] h-[40px] rounded-full right-2 bottom-[-12px] grid place-items-center">
                    <button onClick={clickHandler}>
                        {
                           likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem"/>) : (<FcLikePlaceholder fontSize="1.75rem"/>)
                        }
                    </button>
                </div>
            </div>
           
            <div>
                <p>{course.title}</p>
                <p>
                    {/* show only first 100 letters */}
                    {
                        course.description.length > 100 ? 
                        (course.description.substr(0,100) + "...") : 
                        (course.description)
                    }
                </p>
            </div>
        </div>
    );
}


export default Card;