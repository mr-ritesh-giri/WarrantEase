import React from "react";

function PageLayout({ children }) {
  return (
    <div className="flex flex-col justify-center items-center h-[90vh] w-full bg-gray-200">
      {children}
    </div>
  );
}

export default PageLayout;
