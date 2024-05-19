"use client";
import { Typography } from "@/components/atoms";
import { Button, Link } from "@nextui-org/react";
import React, { useState, useRef, useEffect } from "react";

const VerifyLogin = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null)
  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      setPopupOpen(false)
    }
  };
  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = "hidden"
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "";
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopupOpen]);

  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-5 bg-[#E9E9E9] rounded-full hover:bg-white cursor-pointer"
        onClick={togglePopup}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
        />
      </svg>
      {isPopupOpen && (
        <div className="fixed inset-0 bg-[#000000] bg-opacity-50 flex items-center justify-center z-50">
          <div ref={popupRef} className="relative w-full max-w-md p-5 bg-white rounded-lg border shadow-lg flex flex-col justify-between    ">
            <Button className="absolute top-0 right-0 m-2" onClick={togglePopup} radius="md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#F01C1C"
                  d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6l-5.6 5.6Z"
                />
              </svg>
            </Button>
            <div className="flex justify-center">
              <svg
                width="125"
                height="125"
                viewBox="0 0 125 125"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M49.9688 20.5208C50.4376 17.6979 52.8855 15.625 55.7501 15.625H69.2553C72.1199 15.625 74.5678 17.6979 75.0365 20.5208L76.1459 27.1927C76.474 29.1406 77.7761 30.7656 79.5053 31.724C79.8907 31.9323 80.2709 32.1563 80.6511 32.3854C82.3438 33.4063 84.4011 33.724 86.2501 33.0313L92.5886 30.6563C93.8875 30.1677 95.3177 30.1561 96.6244 30.6235C97.9311 31.0909 99.0295 32.0068 99.724 33.2083L106.474 44.9115C107.167 46.113 107.411 47.5215 107.163 48.8863C106.915 50.251 106.191 51.4836 105.12 52.3646L99.8959 56.6719C98.3698 57.9271 97.6146 59.8646 97.6563 61.8385C97.6636 62.2812 97.6636 62.724 97.6563 63.1667C97.6146 65.1354 98.3698 67.0729 99.8959 68.3281L105.125 72.6354C107.333 74.4583 107.906 77.6094 106.479 80.0833L99.7188 91.7865C99.0253 92.9877 97.9281 93.904 96.6225 94.3722C95.3169 94.8405 93.8875 94.8304 92.5886 94.3438L86.2501 91.9688C84.4011 91.276 82.3438 91.5938 80.6459 92.6146C80.2684 92.8443 79.8863 93.0666 79.5001 93.2813C77.7761 94.2344 76.474 95.8594 76.1459 97.8073L75.0365 104.479C74.5678 107.307 72.1199 109.375 69.2553 109.375H55.7449C52.8803 109.375 50.4376 107.302 49.9636 104.479L48.8542 97.8073C48.5313 95.8594 47.2292 94.2344 45.5001 93.276C45.1139 93.063 44.7318 92.8425 44.3542 92.6146C42.6615 91.5938 40.6042 91.276 38.7501 91.9688L32.4115 94.3438C31.1132 94.8309 29.6843 94.8417 28.3787 94.3744C27.0732 93.9071 25.9756 92.992 25.2813 91.7917L18.5261 80.0885C17.8331 78.887 17.5889 77.4785 17.8368 76.1137C18.0848 74.749 18.8089 73.5164 19.8803 72.6354L25.1094 68.3281C26.6303 67.0781 27.3855 65.1354 27.349 63.1667C27.3409 62.724 27.3409 62.2812 27.349 61.8385C27.3855 59.8594 26.6303 57.9271 25.1094 56.6719L19.8803 52.3646C18.8102 51.4838 18.0869 50.2523 17.839 48.8887C17.5911 47.5251 17.8345 46.1177 18.5261 44.9167L25.2813 33.2135C25.975 32.0111 27.0731 31.094 28.3798 30.6257C29.6866 30.1574 31.1172 30.1682 32.4167 30.6563L38.7501 33.0313C40.6042 33.724 42.6615 33.4063 44.3542 32.3854C44.7292 32.1563 45.1147 31.9375 45.5001 31.7188C47.2292 30.7656 48.5313 29.1406 48.8542 27.1927L49.9688 20.5208Z"
                  stroke="#FF0000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M78.125 62.5C78.125 66.644 76.4788 70.6183 73.5485 73.5485C70.6183 76.4788 66.644 78.125 62.5 78.125C58.356 78.125 54.3817 76.4788 51.4515 73.5485C48.5212 70.6183 46.875 66.644 46.875 62.5C46.875 58.356 48.5212 54.3817 51.4515 51.4515C54.3817 48.5212 58.356 46.875 62.5 46.875C66.644 46.875 70.6183 48.5212 73.5485 51.4515C76.4788 54.3817 78.125 58.356 78.125 62.5Z"
                  stroke="#FF0302"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <Typography
              variant="bold"
              className="text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg"
            >
              Let us know If you are Sign up or Log in. Spend  your time to
              authentication with us.
            </Typography>
            <div className="w-full flex justify-between mt-20 md:px-5 lg:px-5 xl:px-5">
              <Link href={"login"}>
                <Button className="w-[130px] h-[40px] border border-[#7B2CBF] rounded-md">
                  Login
                </Button>
              </Link>
              <Link href={"signup"}>
                <Button className="w-[130px] h-[40px] border border-[#7B2CBF] rounded-md">
                  SignUp
                </Button>
              </Link>
            </div>
          </div>
        </div>

      )
      }
    </div >
  );
};

export { VerifyLogin };
