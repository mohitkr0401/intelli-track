import React, { Suspense } from "react";
import DashboardPage from "./page";
import BarLoader from './../../../node_modules/react-spinners/esm/BarLoader';

const DashboardLayout = () => {
  return (
    <div className="px-5">
      <div className="text-6xl font-bold gradient-title mb-4">
        <h1>Dashboard</h1>
      </div>
      {/* Dashboard Page */}
      <Suspense fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea"/>}> 

      </Suspense>
      <DashboardPage />
    </div>
  );
};

export default DashboardLayout;
