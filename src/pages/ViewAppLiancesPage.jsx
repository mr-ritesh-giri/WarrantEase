import React, { useState, useEffect, useId } from "react";
import ViewAppliances from "../components/ViewAppliances";
import { useWarrant } from "../context/ContextProvider";

function ViewAppLiancesPage() {
  const [appliance, setAppliance] = useState(null);
  const { data, handleDelete } = useWarrant();
  const id = useId();

  useEffect(() => {
    if (data) {
      setAppliance(data);
    }
  }, [data]);

  return (
    <div className="flex justify-center items-center min-h-[90vh] bg-gray-200">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 w-full max-w-[1200px]">
        {appliance && appliance.length > 0 ? (
          appliance.map((applianceData, index) => (
            <ViewAppliances
              name={applianceData.type}
              model={applianceData.model}
              make={applianceData.make}
              purchaseDate={applianceData.purchaseDate}
              warrantyPeriod={applianceData.warrantyPeriod}
              customerCareNumber={applianceData.customerCareNumber}
              onDelete={handleDelete}
              id={applianceData.id}
            />
          ))
        ) : (
          <p className="text-gray-700 text-3xl font-semibold">No data found</p>
        )}
      </div>
    </div>
  );
}

export default ViewAppLiancesPage;
