
import React from "react";
import { Sidenavsub } from "@/components/organisms/dashboard";
import PasswordUser from "@/components/organisms/dashboard/PasswordUser";

const EmployerProfile: React.FC = async () => {


  return (
    
    <>
      <div className="container xl:max-w-[1200px] bg-[#F8F9FA] rounded-xl mt-5 px-10 py-5">
    <div className="flex flex-row">
      <Sidenavsub />
      </div>
 <div className="flex flex-col">
  <PasswordUser />
 </div>
    
      </div>
    </>
  );
};

export default EmployerProfile;
