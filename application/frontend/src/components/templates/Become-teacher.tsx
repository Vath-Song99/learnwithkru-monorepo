/* eslint-disable react/jsx-key */
"use client";
import React, { useState } from "react";
import { TeacherNavbarComponent } from "../molecules";
import {
  BecomeTeacherForm,
  TeacherNavbar,
  DescriptionForm,
  TimeAvailableForm,
  AboutForm,
} from "../organisms";
import { Typography } from "../atoms";
import Link from "next/link";
import { PricingForm } from "../organisms/become-teacher-form/Pricing";

const BecomeTeacher = () => {
  const [currentPage, setCurrentPage] = useState(0); // Changed initial page to 0
  const [activeSection, setActiveSection] = useState("about");
  const [dataTutor, setdataTutor] = useState<any>(null);

  const pages = [0, 1, 2, 3, 4];


  const handleBack = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      bookpage(pages[currentPage - 2]);
    }
  };


  console.log("form data tutor", dataTutor)
  const bookpage = (num: number) => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, pages.length - 1));
  };

  const handleBackButtonClick = (index: number) => {
    switch (index) {
      case 0:
        setCurrentPage(0);
        setActiveSection("about");
        break;
      case 1:
        setCurrentPage(1);
        setActiveSection("about");
        break;
      case 2:
        setCurrentPage(2);
        setActiveSection("about");
        break;
      // Add other cases as needed
      default:
        // Handle other cases
        break;
    }
    //  else if (id === "education") {
    //   setCurrentPage(1);
    //   setActiveSection("education");
    // }
    //  else if (currentPage === pages.length - 1) {
    //   setCurrentPage((prevPage) => Math.max(prevPage - 2, 0));
    //   setActiveSection("price");
    // } else if (currentPage === pages.length - 2) {
    //   setCurrentPage((prevPage) => Math.max(prevPage - 2, 0));
    //   setActiveSection("available");
    // } else {
    //   setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    //   setActiveSection(id);
    // }
  };
  return (
    <div className="min-h-screen">
      <div className="h-screen">
        <TeacherNavbar className="flex justify-start items-center bg-gray-300">
          {pages.map((_, index) => (
            // eslint-disable-next-line react/jsx-key
            <TeacherNavbarComponent className="w-[70px] sm:w-[100px] md:w-[150px] lg:w-[200px] flex justify-start items-start     ">
              <div
                className={`w-[35px] h-[36px] ${currentPage >= index + 1 ? "bg-green-500 " : "bg-black"
                  } rounded-md text-white flex justify-center items-center`}>
                <div
                  className={`${currentPage >= index + 1 ? "hideen" : "font-bold"
                    }`}>
                  {currentPage >= index + 1 && (
                    <Link
                      href={""}
                      onClick={() => handleBackButtonClick(index)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 stroke-white p-">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                    </Link>
                  )}
                </div>

                <span
                  className={currentPage >= index + 1 ? "hidden" : "font-bold"}>
                  {index + 1}
                </span>
              </div>

              <Typography
                className={`hidden px-[5px] ${index === 0 ? "md:px-[2px]" : ""} hidden  text-nowrap md:text-[10px] lg:text-sm md:block`}
                tags="h4"
                variant="bold"
              >
                {index === 0 && "About"}
                {index === 1 && "Education"}
                {index === 2 && "Description"}
                {index === 3 && "Time Available"}
                {index === 4 && "Pricing"}
              </Typography>
            </TeacherNavbarComponent>
          ))}
        </TeacherNavbar>
        <div className=" flex justify-center pt-10">
          {pages[currentPage] == 0 && (
            <>
              <AboutForm
                buttonTitle="next"
                description="Start creating your public tutor profile. Your progress will be automatically saved as you complete each section. You can return at any time to finish your registration"
                title="About"
                id="about"
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pageIndex={pages}
                setdataTutor={setdataTutor}
              />
            </>
          )}
          {pages[currentPage] == 1 && (
            <>
              <BecomeTeacherForm
                fileLabel="Please Input Your Degree To verify"
                buttonTitle="next"
                description="Do you have teaching certificates? If so, describe them to enhance your profile credibility and get more students."
                title="Education"
                checkboxtext="Don't have a Degree?"
                id="education"
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pageIndex={pages}
                setdataTutor={setdataTutor}
              />
            </>
          )}
          {pages[currentPage] == 2 && (
            <>
              <DescriptionForm
                buttonTitle="next"
                description="This info will go on your public profile. Write it in the language you’ll be teaching"
                title="Profile Description"
                checkboxtext={""}
                id="description"
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pageIndex={pages}
                setdataTutor={setdataTutor}
              />
            </>
          )}
          {pages[currentPage] == 3 && (
            <>
              <TimeAvailableForm
                buttonTitle="next"
                title="Time available"
                description="This is table that you can see all time in a week and you can select what time you available "
                setTimeAvailable="Set your Available"
                setTimeDescription="Availability shows your potential working hours. Students can book lessons at these times."
                id="available"
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                pageIndex={pages}
                setdataTutor={setdataTutor}
              />
            </>
          )}
          {pages[currentPage] == 4 && (
            <>
              <PricingForm
                buttonTitle="Submit"
                description="Fill your price per Month. It will be shown in the profile’s list"
                title="Pricing per month"
                setCurrentPage={setCurrentPage}
              />
            </>
          )

          }
        </div>

        {/* Pagination controls */}
        <div className=" flex items-end justify-center mt-4">
        <button
        className="bg-[#7B2CBF] text-white w-[100px] h-[30px] rounded-sm"
        onClick={handleBack}
      >
        back
      </button>
          <button
            className="bg-[#7B2CBF] text-[white] w-[100px] h-[30px] rounded-sm "
            onClick={() => bookpage(pages[currentPage])}
            type="submit">
            next
          </button>
        </div>
      </div>
    </div>
  );
};

export { BecomeTeacher };
