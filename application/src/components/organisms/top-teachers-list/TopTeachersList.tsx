import ProfileCard from '@/components/molecules/profile-card-teacher'
import React from 'react'

const TopTeachersList: React.FC = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className='w-full flex  justify-center items-center flex-wrap'>
      <div className='w-[80%] h-auto flex flex-wrap sm:justify-between justify-center' >
        <ProfileCard
          className=" p-2 mt-4"
          imageUrl="/Profiles/teacher1.avif"
          username="horn thorn"
          subjectname="English Teacher"
          rateStar={88}
          price={20}
          students={100}
        />
        <ProfileCard
          className="mt-4 p-2"
          imageUrl="/Profiles/maleteacher.jpg"
          username="Khiev Navin"
          subjectname="Mathematics Teacher"
          rateStar={55}
          price={30}
          students={49}
        /> <ProfileCard
          className="mt-4 p-2"
          imageUrl="/Profiles/teacher3.jpg"
          username="Sea Pohai"
          subjectname="Biology Teacher"
          rateStar={50}
          price={30}
          students={44}
        />
      </div>
    </div>
  )
}

export { TopTeachersList }