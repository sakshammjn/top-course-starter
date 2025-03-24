import React, { useState } from "react";
import Card from "./Card";

const Cards = ({ courses, category }) => {
  const [likedCourses, setLikedCourses] = useState([]);

  function getCourses() {
    if (!courses || Object.keys(courses).length === 0) {
      return [];
    }

    if (category === "All") {
      return Object.values(courses).flat(); 
    } else {
      return courses[category] || [];
    }
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => (
        <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
      ))}
    </div>
  );
};

export default Cards;
