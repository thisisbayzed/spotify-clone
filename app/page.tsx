import Sidebar from "@/components/Sidebar";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
