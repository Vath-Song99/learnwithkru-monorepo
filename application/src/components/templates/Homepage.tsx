"use client";

import {
  HomepageSlider,
  HomeBenner,
  TopTeachersList,
  Footer,
} from "@/components/organisms";
import { SearchInput, ShowEasyText, KruVision } from "@/components/molecules";

const Homepage: React.FC = () => {
  return (
    <div className="max-w-full">
      {/* Homepage Benner */}

      <HomepageSlider />

      {/* Home-Benner */}

      <HomeBenner />

      {/* Search Input */}

      <SearchInput />

      <div className="grid gap-8 md:gap-12">
        {/*  all subject */}

        <TopTeachersList />

        {/* benner card */}
        <KruVision />
        <ShowEasyText />
      </div>
      <div className="w-full  flex justify-center items-start bg-black">
        <Footer />
      </div>
    </div>
  );
};

export { Homepage };
