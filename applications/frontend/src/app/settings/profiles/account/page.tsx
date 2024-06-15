
import { Sidenavsub } from "@/components/organisms/dashboard";
import AccountSettingsForm from "@/components/organisms/dashboard/AccountSettingsForm";

const EmployerProfile: React.FC = async () => {
  return (
    
    <>
      <div className="container xl:max-w-[1200px] bg-[#F8F9FA] rounded-xl mt-5 px-10 py-5">
    <div className="flex flex-row">
      <Sidenavsub />
      </div>
      <div className="flex flex-col">
      <AccountSettingsForm  />
      </div>
 
      </div>
    </>
  );
};

export default EmployerProfile;
