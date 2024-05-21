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

const BecomeTeacher = () => {
  const [currentPage, setCurrentPage] = useState(0); // Changed initial page to 0
  const [activeSection, setActiveSection] = useState("about");
  const [aboutFormCompleted, setAboutFormCompleted] = useState(false);

  // const pages = [
  //   // Define components for each page
  //   <AboutForm
  //     buttonTitle="next"
  //     description="Start creating your public tutor profile. Your progress will be automatically saved as you complete each section. You can return at any time to finish your registration"
  //     title="About"
  //     id="about"
  //     currentPage={currentPage}
  //     setCurrentPage={setCurrentPage}
  //   />,
  //   <BecomeTeacherForm
  //     fileLabel="Please Input Your Degree To verify"
  //     buttonTitle="next"
  //     description="Do you have teaching certificates? If so, describe them to enhance your profile credibility and get more students."
  //     title="Education"
  //     checkboxtext="Don't have a Degree?"
  //     id="education"
  //   />,
  //   <DescriptionForm
  //     buttonTitle="next"
  //     description="This info will go on your public profile. Write it in the language you’ll be teaching"
  //     title="Profile Description"
  //     checkboxtext={""}
  //     id="description"
  //   />,
  //   <TimeAvailableForm
  //     buttonTitle="next"
  //     title="Time available"
  //     description="This is table that you can see all time in a week and you can select what time you available "
  //     setTimeAvailable="Set your Available"
  //     setTimeDescription="Availability shows your potential working hours. Students can book lessons at these times."
  //     id="available"
  //   />,
  //   <BecomeTeacherForm
  //     buttonTitle="Submit"
  //     description="Fill your price per Month. It will be shown in the profile’s list"
  //     title="Pricing per month"
  //     checkboxtext="Agree with Termcondition"
  //     id="price"
  //   />,
  // ];
  const pages = [0, 1, 2, 3, 4];

  const nextPage = (id: string) => {
    if (currentPage === pages.length - 1) {
      // If it's the last page, navigate to the next page using Link
      // Adjust the 'to' attribute to the path of your next pag
    } else {
      setCurrentPage((prevPage) => Math.min(prevPage + 1, pages.length - 1));
      setActiveSection(id);
      window.location.hash = id;
    }
  };

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
    <div className="min-h-screen w-[100%]">
      <div className="h-screen">
        <TeacherNavbar className="py-2">
          {pages.map((_, index) => (
            // eslint-disable-next-line react/jsx-key
            <TeacherNavbarComponent className="w-[300px] flex justify-between">
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

              {index === 0 ? (
                <>
                  <Typography
                    className="hidden px-[5px] md:px-[2px] sm:hidden md:font-normal md:block"
                    tags="h4"
                    variant="bold">
                    About
                  </Typography>
                </>
              ) : index === 1 ? (
                <Typography
                  className="hidden px-[5px] md:px-[2px] sm:hidden md:font-normal md:block"
                  tags="h4"
                  variant="bold">
                  Education
                </Typography>
              ) : index === 2 ? (
                <Typography
                  className="hidden px-[5px] sm:hidden md:px-[2px] md:font-normal md:block"
                  tags="h4"
                  variant="bold">
                  Description
                </Typography>
              ) : index === 3 ? (
                <Typography
                  className="hidden px-[5px] sm:hidden md:px-[2px] md:font-normal md:block"
                  tags="h4"
                  variant="bold">
                  Time Available
                </Typography>
              ) : (
                <Typography
                  className="hidden px-[5px] sm:hidden md:px-[2px] md:font-normal md: md:block"
                  tags="h4"
                  variant="bold">
                  Pricing
                </Typography>
              )}
            </TeacherNavbarComponent>
          ))}
        </TeacherNavbar>
        <div className="w-full flex justify-center pt-10">
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
              />
            </>
          )}
        </div>

        {/* Pagination controls */}
        <div className=" flex items-end justify-center mt-4">
          <button
            className="bg-[#7B2CBF] text-[white] w-[100px] h-[30px] rounded-sm "
            // onClick={() => nextPage(pages[currentPage].props.id)}
            onClick={() => bookpage(pages[currentPage])}
            disabled={currentPage === pages.length - 1}
            type="submit">
            next
          </button>
        </div>
      </div>
    </div>
  );
};

export { BecomeTeacher };
