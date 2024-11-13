import React, { useState, useEffect } from "react";
import { ApplianceData } from "../api/ApplianceData";
import ViewAppliances from "../components/ViewAppliances";

function ViewAppLiancesPage() {
  const [appliance, setAppliance] = useState(null);

  console.log("Appliance Data", appliance);

  useEffect(() => {
    ApplianceData().then((data) => {
      if (data && data.length) {
        setAppliance(data);
      } else {
        setAppliance([]);
      }
    });
  }, []);

  return (
    <div className="flex justify-center items-center min-h-[90vh] bg-gray-200">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 w-full max-w-[1200px]">
        {appliance && appliance.length > 0 ? (
          appliance.map((applianceData, index) => (
            <ViewAppliances
              key={index}
              name={applianceData.type} 
              model={applianceData.model}
              make={applianceData.make}
              purchaseDate={applianceData.purchaseDate}
              warrantyPeriod={applianceData.warrantyPeriod}
              customerCareNumber={applianceData.customerCareNumber} 
            />
          ))
        ) : (
          <p>No data found</p>
        )}
      </div>
    </div>
  );
}

export default ViewAppLiancesPage;
