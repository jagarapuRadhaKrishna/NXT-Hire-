import React from "react";

const MainLayout = async ({ children }) => {
  return (
    <div className="container mx-auto pt-8 mb-20">
      {children}
    </div>
  );
};

export default MainLayout;
