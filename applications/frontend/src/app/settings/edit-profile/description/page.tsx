
import { Description } from "@/components/organisms/dashboard/teacher-edits";
import NavLinksSubTeachers from "@/components/organisms/dashboard/teacher-edits/nav-side-link";

const TeachersAbout: React.FC = async () => {
  return (
    <>
      <div className="container xl:max-w-[1200px] bg-[#F8F9FA] rounded-xl mt-5 px-10 py-5">
        <div className="flex flex-row">
          <NavLinksSubTeachers />
        </div>
        <div className="flex flex-col">
          <Description />
        </div>
      </div>
    </>
  );
};

export default TeachersAbout;