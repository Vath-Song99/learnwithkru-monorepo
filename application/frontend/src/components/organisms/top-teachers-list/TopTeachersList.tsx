"use client"
import ProfileCard from '@/components/molecules/profile-card-teacher';
import React, { useEffect, useState } from 'react';

// Define the props interface
interface TopTeachersListProps {
  search: string;
  imageUrl?: string;
  username?: string;
  subjectname?: string;
  rateStar?: number; // Change type from string to number
  price?: number;
  students?: number,
}

const TopTeachersList: React.FC<TopTeachersListProps> = ({ search }) => {

  const [limitedTeachers, setLimitedTeachers] = useState<any[]>([""]);

  const data = [
    {
      key: "001",
      imageUrl: "/Profiles/EnglishTeacher.jpg",
      username: "Chang sichi",
      subjectname: "Computer",
      rateStar: 5,
      price: 10,
      students: 35,
    },
    {
      key: "002",
      imageUrl: "/Profiles/APoy.jpg",
      username: "Reak",
      subjectname: "Physic",
      rateStar: 4.5,
      price: 10,
      students: 35,
    },
    {
      key: "003 ",
      imageUrl: "/Profiles/APoy.jpg",
      username: "Reak",
      subjectname: "Physic",
      rateStar: 4.5,
      price: 10,
      students: 35,
    },
    {
      key: "004 ",
      imageUrl: "/Profiles/APoy.jpg",
      username: "dsfhoa",
      subjectname: "Physic",
      rateStar: 4.5,
      price: 10,
      students: 35,
    },
    {
      key: "005 ",
      imageUrl: "/Profiles/APoy.jpg",
      username: "lwwminhap",
      subjectname: "Physic",
      rateStar: 4.5,
      price: 10,
      students: 35,
    },

    // Add more data items here
  ];

  // Filter data based on search string
  const filteredTeachers = data.filter(info => {
    const searchStr = search.trim().toLowerCase();
    return searchStr === "" || info.username.toLowerCase().includes(searchStr);
  });
  useEffect(() => {
    setLimitedTeachers(filteredTeachers.slice(0, 3));
  }, [search]);


  return (
    <div className='w-full flex justify-center items-center flex-wrap'>

      <div className='w-[90%] h-auto flex flex-wrap justify-between sm:w-[80%] sm:gap-5 sm:justify-start md:justify-start lg:justify-between'>
        {limitedTeachers.map((item, index) => (

          <ProfileCard
            key={item.key} // Use unique key from data
            className="p-2 mt-4"
            imageUrl={item.imageUrl}
            username={item.username}
            subjectname={item.subjectname}
            rateStar={item.rateStar}
            price={item.price}
            students={item.students}
          />
        ))}
      </div>
    </div>
  );
};

export { TopTeachersList };
