import React from "react";

import Course from "../../components/Course";

const mockData = [
    {title: 'React course', image: '', lessonsQuantity: '33', skills: ['reract', 'redux'], rate: '5', id:'442' },
    {title: 'React course', image: '', lessonsQuantity: '33', skills: ['reract', 'redux'], rate: '5',  id:'444'  },
    {title: 'React course', image: '', lessonsQuantity: '33', skills: ['reract', 'redux'], rate: '5',  id:'446'  },
    {title: 'React course', image: '', lessonsQuantity: '33', skills: ['reract', 'redux'], rate: '5', id:'445'  },
]

const Courses = () => {
    return( <div> 
        Courses
        { mockData.map((course) => (
            <Course key={course.id} title={course.title} image={course.image} lessonsQuantity={course.lessonsQuantity} skills={course.skills} rate={course.rate} />
        )) 
        }
        </div>
    )
}

export default Courses