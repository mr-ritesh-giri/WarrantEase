import React, { useState, useEffect } from "react";
import ViewAppliances from "../components/ViewAppliances";
import { useWarrant } from "../context/ContextProvider";

function ViewAppLiancesPage() {
  const [appliance, setAppliance] = useState([]);
  const { data, handleDelete, handleEdit } = useWarrant();

  useEffect(() => {
    if (data) {
      setAppliance(data);
    }
  }, [data]);

  return (
    <div className="flex justify-center items-center min-h-[90vh] bg-gray-200">
      <div className="flex flex-wrap m-auto gap-6 p-6 w-full max-w-[1200px]">
        {appliance && appliance.length > 0 ? (
          appliance.map((applianceData, index) => (
            <ViewAppliances
              key={applianceData.id}
              id={applianceData.id}
              name={applianceData.type}
              model={applianceData.model}
              make={applianceData.make}
              purchaseDate={applianceData.purchaseDate}
              warrantyPeriod={applianceData.warrantyPeriod}
              customerCareNumber={applianceData.customerCareNumber}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))
        ) : (
          <p className="flex m-auto text-gray-700 text-3xl font-semibold">No data found</p>
        )}
      </div>
    </div>
  );
}

export default ViewAppLiancesPage;
