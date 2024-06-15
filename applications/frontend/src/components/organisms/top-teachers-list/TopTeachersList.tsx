"use client"
import { ITeacher } from '@/@types/teacher.type';
import ProfileCard from '@/components/molecules/profile-card-teacher';
import React from 'react';

// Define the props interface
interface TopTeachersListProps {
  data: ITeacher[]
}

const TopTeachersList: React.FC<TopTeachersListProps> = ({ data }) => {


  return (
    <div className='w-full flex justify-center items-center flex-wrap pt-4'>

      <div className='w-[90%] h-auto flex flex-wrap justify-between sm:w-[80%] sm:gap-5 sm:justify-start md:justify-start lg:justify-between'>
        {data.map((item: ITeacher, index: number) => (

          <ProfileCard
            key={index} // Use unique key from data
            className="p-2 mt-4"
            imageUrl={item.picture}
            username={item.first_name + item.last_name}
            subjectname={item.subject}
            rateStar={0}
            price={item.price}
            students={10}
          />
        ))}
      </div>
    </div>
  );
};

export { TopTeachersList };
