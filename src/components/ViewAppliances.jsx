import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

function ViewAppliances(props) {
  return (
    <div
      className="w-full max-w-xs mx-auto p-3 bg-white text-gray-800 shadow-md rounded-lg"
      key={props.id}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-center">Appliance Details</h2>
        <div className="flex space-x-4 items-center">
          <button className="flex items-center space-x-1 text-blue-600">
            <FaEdit className="text-xl" />
          </button>
          <button
            className="flex items-center space-x-1 text-red-600"
            onClick={() => props.onDelete(props.id)}
          >
            <FaTrashAlt className="text-xl" />
          </button>
        </div>
      </div>

      <div className="p-3 bg-gray-100 rounded-lg shadow border border-gray-300">
        <h3 className="text-xl font-semibold mb-2">
          {props.name || "Appliance Name"}
        </h3>

        <div className="mb-2">
          <span className="block text-sm text-gray-500">Model:</span>
          <p className="text-base font-medium">
            {props.model || "Not available"}
          </p>
        </div>

        <div className="mb-2">
          <span className="block text-sm text-gray-500">Make:</span>
          <p className="text-base font-medium">
            {props.make || "Not available"}
          </p>
        </div>

        <div className="mb-2">
          <span className="block text-sm text-gray-500">Purchase Date:</span>
          <p className="text-base font-medium">
            {props.purchaseDate || "Not available"}
          </p>
        </div>

        <div className="mb-2">
          <span className="block text-sm text-gray-500">Warranty Period:</span>
          <p className="text-base font-medium">
            {props.warrantyPeriod || "Not available"}
          </p>
        </div>

        <div className="mb-2">
          <span className="block text-sm text-gray-500">Customer Care:</span>
          <p className="text-base font-medium">
            {props.customerCareNumber || "Not available"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ViewAppliances;
