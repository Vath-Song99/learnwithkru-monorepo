"use client";
import { Button, Typography } from "@/components/atoms";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { CardTeachersTypes } from "@/@types";

const CardTeachers: React.FC<CardTeachersTypes> = (props) => {
  const {
    imageUrl,
    nameSubject,
    teacherName,
    rateStars,
    reviews,
    students,
    description,
    pricing } = props

  const [isFavorite, setIsFavorite] = useState(false)

  const handleOnToggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="w-full  lg:w-[49%] flex justify-evenly sm:justify-around border-[1.5px] px-1 md:px-0  shadow-sm pt-2 pb-1 md:py-3 hover:border-3 hover:border-[#455445] ">

      <div className="flex flex-col items-center gap-1 justify-center md:justify-start w-[100px]  sm:w-[130px] md:w-[140px] lg:w-[120px]">
        <Link
          href={"teacher-profile"}
          className="flex flex-col items-center gap-1 justify-center md:justify-start w-[100px]  sm:w-[130px] md:w-[140px] lg:w-[120px]"
        >
          <Image
            src={`/${imageUrl}`}
            width={500}
            height={500}
            alt={`${teacherName}`}
            className="w-full h-[100px] sm:h-[110px] md:h-[140px] lg:h-[120px] object-cover"
          ></Image>

          <button className="md:hidden py-1 px-2 text-[8px] bg-[#007C00] text-white hover:bg-white hover:border hover:text-[#455445] hover:border-[#007C00]">
            Send Message
          </button>
        </Link>
      </div>

      <div className="w-[65%] grid  gap-[2px]">
        {/* Name */}
        <div className="flex justify-between gap-14 items-center lg:gap-0">
          <Typography className="font-medium text-md sm:text-xl tracking-normal">
            {teacherName}
          </Typography>
          <button onClick={handleOnToggleFavorite} className="cursor-pointer">
            {!isFavorite ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4 fill-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4 fill-red-500 stroke-red-500">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            )}
          </button>

          <button className="hidden md:block py-1 px-2 text-xs bg-[#007C00] text-white hover:bg-white hover:border hover:text-[#455445] hover:border-[#007C00]">
            Send Message
          </button>
        </div>

        {/* Stars */}

        <div className="w-full md:w-[75%] flex  items-center ">
          <Typography className="text-xs ">{rateStars}</Typography>

          <svg
            className="w-20 md:w-24"
            viewBox="0 0 130 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.32441 19.9231L8.56441 14.6101L4.44141 11.0381L9.87241 10.5681L11.9994 5.55713L14.1264 10.5671L19.5564 11.0371L15.4344 14.6091L16.6744 19.9221L11.9994 17.1021L7.32441 19.9231Z"
              fill="#B9B900"
            />
            <path
              d="M31.3244 19.9231L32.5644 14.6101L28.4414 11.0381L33.8724 10.5681L35.9994 5.55713L38.1264 10.5671L43.5564 11.0371L39.4344 14.6091L40.6744 19.9221L35.9994 17.1021L31.3244 19.9231Z"
              fill="#B9B900"
            />
            <path
              d="M55.3244 19.9231L56.5644 14.6101L52.4414 11.0381L57.8724 10.5681L59.9994 5.55713L62.1264 10.5671L67.5564 11.0371L63.4344 14.6091L64.6744 19.9221L59.9994 17.1021L55.3244 19.9231Z"
              fill="#B9B900"
            />
            <path
              d="M79.3244 19.9231L80.5644 14.6101L76.4414 11.0381L81.8724 10.5681L83.9994 5.55713L86.1264 10.5671L91.5564 11.0371L87.4344 14.6091L88.6744 19.9221L83.9994 17.1021L79.3244 19.9231Z"
              fill="#B9B900"
            />
            <path
              d="M103.324 19.9231L104.564 14.6101L100.441 11.0381L105.872 10.5681L107.999 5.55713L110.126 10.5671L115.556 11.0371L111.434 14.6091L112.674 19.9221L107.999 17.1021L103.324 19.9231Z"
              fill="black"
            />
          </svg>

          <Typography className="text-xs flex items-center" align="left">
            &#40;{reviews} reviews&#41;
          </Typography>
        </div>

        {/* active Students */}

        <div className="">
          <div className="flex items-center">
            <svg
              width="14"
              height="14"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.5 7C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C8.16304 2 8.79893 2.26339 9.26777 2.73223C9.73661 3.20107 10 3.83696 10 4.5C10 5.16304 9.73661 5.79893 9.26777 6.26777C8.79893 6.73661 8.16304 7 7.5 7ZM7.5 3C6.67 3 6 3.67 6 4.5C6 5.33 6.67 6 7.5 6C8.33 6 9 5.33 9 4.5C9 3.67 8.33 3 7.5 3Z"
                fill="#455445"
              />
              <path
                d="M13.5 11C13.22 11 13 10.78 13 10.5C13 10.22 13.22 10 13.5 10C13.78 10 14 9.78 14 9.5C14 8.83696 13.7366 8.20107 13.2678 7.73223C12.7989 7.26339 12.163 7 11.5 7H10.5C10.22 7 10 6.78 10 6.5C10 6.22 10.22 6 10.5 6C11.33 6 12 5.33 12 4.5C12 3.67 11.33 3 10.5 3C10.22 3 10 2.78 10 2.5C10 2.22 10.22 2 10.5 2C11.163 2 11.7989 2.26339 12.2678 2.73223C12.7366 3.20107 13 3.83696 13 4.5C13 5.12 12.78 5.68 12.4 6.12C13.89 6.52 15 7.88 15 9.5C15 10.33 14.33 11 13.5 11ZM1.5 11C0.67 11 0 10.33 0 9.5C0 7.88 1.1 6.52 2.6 6.12C2.23 5.68 2 5.12 2 4.5C2 3.83696 2.26339 3.20107 2.73223 2.73223C3.20107 2.26339 3.83696 2 4.5 2C4.78 2 5 2.22 5 2.5C5 2.78 4.78 3 4.5 3C3.67 3 3 3.67 3 4.5C3 5.33 3.67 6 4.5 6C4.78 6 5 6.22 5 6.5C5 6.78 4.78 7 4.5 7H3.5C2.83696 7 2.20107 7.26339 1.73223 7.73223C1.26339 8.20107 1 8.83696 1 9.5C1 9.78 1.22 10 1.5 10C1.78 10 2 10.22 2 10.5C2 10.78 1.78 11 1.5 11ZM10.5 14H4.5C3.67 14 3 13.33 3 12.5V11.5C3 9.57 4.57 8 6.5 8H8.5C10.43 8 12 9.57 12 11.5V12.5C12 13.33 11.33 14 10.5 14ZM6.5 9C5.83696 9 5.20107 9.26339 4.73223 9.73223C4.26339 10.2011 4 10.837 4 11.5V12.5C4 12.78 4.22 13 4.5 13H10.5C10.78 13 11 12.78 11 12.5V11.5C11 10.837 10.7366 10.2011 10.2678 9.73223C9.79893 9.26339 9.16304 9 8.5 9H6.5Z"
                fill="#455445"
              />
            </svg>

            <Typography className="text-xs ml-1" align="left">
              {students} active students
            </Typography>
          </div>
          <div className="flex items-center">
            <svg
              width="14"
              height="14"
              viewBox="0 0 15 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_2259_2319)">
                <path
                  d="M1 0.3125V1.25H11.3125V8.75H4.75V9.6875H13.1875V8.75H12.25V0.3125H1ZM2.87594 1.71875C2.3791 1.72048 1.9031 1.91855 1.55169 2.26978C1.20028 2.62101 1.00198 3.09692 1 3.59375C1 4.62453 1.84562 5.46875 2.87594 5.46875C3.37252 5.46677 3.84819 5.26857 4.19925 4.91734C4.5503 4.5661 4.74827 4.09034 4.75 3.59375C4.75 2.56391 3.90531 1.71875 2.87594 1.71875ZM5.6875 2.1875V3.125H8.03125V2.1875H5.6875ZM8.96875 2.1875V3.125H10.375V2.1875H8.96875ZM2.87594 2.65625C3.39812 2.65625 3.8125 3.07016 3.8125 3.59375C3.8125 4.11875 3.39859 4.53125 2.87594 4.53125C2.35094 4.53125 1.9375 4.11875 1.9375 3.59375C1.9375 3.07016 2.35141 2.65625 2.87594 2.65625ZM5.6875 4.0625V5H10.375V4.0625H5.6875ZM1 5.9375V9.6875H1.9375V6.875H3.34375V9.6875H4.28125V7.18344L5.24875 7.69531C5.52297 7.84062 5.8525 7.84016 6.12625 7.69531L7.78094 6.82109L7.34359 5.99141L5.68844 6.86656L4.23719 6.10063C4.03465 5.99362 3.80907 5.93763 3.58 5.9375H1Z"
                  fill="#455445"
                />
              </g>
              <defs>
                <clipPath id="clip0_2259_2319">
                  <rect
                    width="14.1875"
                    height="9.375"
                    fill="white"
                    transform="translate(0 0.3125)"
                  />
                </clipPath>
              </defs>
            </svg>

            <Typography className="text-xs ml-1" align="left">
              {nameSubject}
            </Typography>
          </div>
        </div>

        {/* Description */}

        <article className="text-xs text-[#455445] truncate md:text-clip">
          {description}
          <span>
            <Link
              href={""}
              className="hidden md:block text-xs text-gray-900 font-medium underline  ">
              Read more
            </Link>
          </span>
        </article>

        <Link
          href={""}
          className="md:hidden text-xs text-gray-900 font-medium underline  ">
          Read more
        </Link>

        {/* pricing */}

        <Typography
          className="tracking-wide hover:underline"
          fontSize="sm"
          align="left"
          variant="semibold">
          {pricing} KHR/month
        </Typography>

        {/* Button best teacher */}

        {/* <button className="bg-[#455445] opacity-85 hover:text-white hover:bg-[#455445] w-24 py-[3px] shadow-inherit text-xs">
          Best Teacher
        </button> */}
      </div>
    </div>
  );
};

export { CardTeachers };
