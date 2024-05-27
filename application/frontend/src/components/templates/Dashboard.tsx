import React from "react";
import Image from "next/image";
import { Button, Typography } from "../atoms";
import { SiderDashboard } from "../molecules/sider-dashboard";
import { Card } from "@nextui-org/react";
import { CardAllStudents } from "../molecules/card-all-students";
import { CardTotalStudents } from "../molecules/card-total-students";
import { CardCurrentStudents } from "../molecules/card-current-students";
const Dashboard = () => {
  return (
    <>
      <div className="flex lg:w-[95%] xl:w-[90%] mx-auto bg-white">
        {/* Sidebar Section */}
        <SiderDashboard></SiderDashboard>
        <div className="ml-10 lg:15 xl:28">
          <Typography fontSize="lg" align="left" variant="bold">
            Dashboard
          </Typography>
          <Typography align="left" fontSize="base">
            The Teacher and Student Data Dashboard: Real-time insights for
            educators, empowering data-driven decisions and optimizing learning
            outcomes.
          </Typography>

          {/* information card */}
          <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 mt-20 gap-4 md:gap-8 lg:gap-10 xl:gap-16">
            {/* All Student */}
            <CardAllStudents></CardAllStudents>
            {/* Total Students */}
            <CardTotalStudents></CardTotalStudents>
            {/* Current Student */}
            <CardCurrentStudents></CardCurrentStudents>
          </div>
        </div>
      </div>
    </>
  );
};

export { Dashboard };
