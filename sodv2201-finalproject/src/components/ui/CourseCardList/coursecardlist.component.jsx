import React, {useState} from 'react';
import CourseCard from '../CourseCard/CourseCard';
import SearchBar from '../SearchBar/searchbar.component';
import './CourseCardList.css'

const CourseCardList = ({courses, title="Available Courses", showFilters =true}) => {

         const exampleCourses = [
        {
            id: 1,
            name: "Web Development Fundamentals",
            start_date: "2024-01-15",
            end_date: "2024-03-15",
            fees: "$499",
            description: "Learn HTML, CSS, and JavaScript basics"
        },
        {
            id: 2,
            name: "React Masterclass",
            start_date: "2024-02-01",
            end_date: "2024-04-01",
            fees: "$599",
            description: "Advanced React patterns and best practices"
        },
        {
            id: 3,
            name: "Database Design",
            start_date: "2024-01-20",
            end_date: "2024-03-20",
            fees: "$449",
            description: "SQL and database architecture fundamentals"
            //to be moved into backend later
        }
    ];

     const [searchQuery, setSearchQuery] = useState('');
     const [selectedFilter, setSelectedFilter] = useState('all');

  const handleSearch = (query, filter) => {
    setSearchQuery(query);
    setSelectedFilter(filter);
  };
         const displayCourses = (courses || exampleCourses).filter((course) => {
    const matchesQuery = course.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      selectedFilter === "all" ||
      course.level === selectedFilter ||
      course.category === selectedFilter;
    return matchesQuery && matchesFilter;
  });

    return(
        <div className="course-list-container">
            <h1 className="course-list-title">{title}</h1>
            
           {showFilters && <SearchBar onSearch={handleSearch} />}
            
            <div className="courses-grid">
                {displayCourses.map(course => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
};

export default CourseCardList;
