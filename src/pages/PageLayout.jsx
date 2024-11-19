import React from "react";

function PageLayout({ children, className }) {
  return (
    <div
      className={`flex flex-col justify-center items-center min-h-[90vh] w-full bg-gray-200 ${className}`}
    >
      {children}
    </div>
  );
}

export default PageLayout;
