"use client";
import { CardTeachers } from "@/components/molecules";
import React, { useContext } from "react";
import { Mycontext } from "@/context/CardContext";

const Fav = () => {
    const { Data } = useContext(Mycontext);

    const favCard = Data.filter((item) => item.isFavorite);

    return (
        <div className="w-full flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-6 underline">Your Favorites</h1>
            <div className="w-[80%] flex justify-center lg:justify-between flex-wrap gap-4">
                {favCard.map((item, index) => (
                    <CardTeachers
                        key={index}
                        imageUrl={item.imageUrl}
                        nameSubject={item.nameSubject}
                        rateStars={item.rateStars}
                        students={item.students}
                        reviews={item.reviews}
                        teacherName={item.teacherName}
                        description={item.description}
                        pricing={item.pricing}
                    />
                ))}
            </div>
        </div>
    );
};

export { Fav };
