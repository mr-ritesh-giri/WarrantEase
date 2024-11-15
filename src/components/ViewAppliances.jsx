import React, { useState } from "react";
import { FaEdit, FaTrashAlt, FaTimes } from "react-icons/fa";
import { useWarrant } from "../context/ContextProvider";

function ViewAppliances(props) {
  const [isApplianceEditable, setIsApplianceEditable] = useState(false);
  const { handleEdit } = useWarrant();

  const [form, setForm] = useState({
    id: props.id || "",
    type: props.type || "",
    model: props.model || "",
    make: props.make || "",
    purchaseDate: props.purchaseDate || "",
    warrantyPeriod: props.warrantyPeriod || "",
    customerCareNumber: props.customerCareNumber || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    handleEdit(form.id, form);
    setIsApplianceEditable(false);
  };

  return (
    <>
      {isApplianceEditable ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="w-full max-w-lg p-6 bg-white shadow-md rounded-lg overflow-auto mx-4 sm:mx-auto">
            <div className="flex justify-between mb-4">
              <h2 className="text-2xl font-semibold text-black text-center">
                Edit Appliance
              </h2>
              <div
                onClick={() => setIsApplianceEditable((prev) => prev != prev)}
              >
                <FaTimes className="text-red-600 text-3xl" />
              </div>
            </div>
            <form onSubmit={submitHandler}>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-black"
                  htmlFor="type"
                >
                  Appliance Type <span className="text-red-500">*</span>:
                </label>
                <input
                  id="type"
                  name="type"
                  type="text"
                  value={form.type}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg text-black"
                  placeholder="e.g., Air Conditioner"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-black"
                  htmlFor="model"
                >
                  Model <span className="text-red-500">*</span>:
                </label>
                <input
                  id="model"
                  name="model"
                  type="text"
                  value={form.model}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg text-black"
                  placeholder="e.g., ABC123"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-black"
                  htmlFor="make"
                >
                  Make <span className="text-red-500">*</span>:
                </label>
                <input
                  id="make"
                  name="make"
                  type="text"
                  value={form.make}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg text-black"
                  placeholder="e.g., Bluestar"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-black"
                  htmlFor="purchaseDate"
                >
                  Purchase Date <span className="text-red-500">*</span>:
                </label>
                <input
                  id="purchaseDate"
                  name="purchaseDate"
                  type="date"
                  value={form.purchaseDate}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg text-black"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-black"
                  htmlFor="warrantyPeriod"
                >
                  Warranty Period (in years){" "}
                  <span className="text-red-500">*</span>:
                </label>
                <input
                  id="warrantyPeriod"
                  name="warrantyPeriod"
                  type="number"
                  value={form.warrantyPeriod}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg text-black"
                  placeholder="e.g., 2"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium text-black"
                  htmlFor="customerCareNumber"
                >
                  Customer Care Number <span className="text-red-500">*</span>:
                </label>
                <input
                  id="customerCareNumber"
                  name="customerCareNumber"
                  type="text"
                  value={form.customerCareNumber}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg text-black"
                  placeholder="e.g., 1234567890"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-xs mx-auto p-3 bg-white text-gray-800 shadow-md rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-center">
              Appliance Details
            </h2>
            <div className="flex space-x-4 items-center">
              <button
                className="flex items-center space-x-1 text-blue-600"
                onClick={() => setIsApplianceEditable(true)}
              >
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
              <span className="block text-sm text-gray-500">
                Purchase Date:
              </span>
              <p className="text-base font-medium">
                {props.purchaseDate || "Not available"}
              </p>
            </div>
            <div className="mb-2">
              <span className="block text-sm text-gray-500">
                Warranty Period:
              </span>
              <p className="text-base font-medium">
                {props.warrantyPeriod || "Not available"}
              </p>
            </div>
            <div className="mb-2">
              <span className="block text-sm text-gray-500">
                Customer Care:
              </span>
              <p className="text-base font-medium">
                {props.customerCareNumber || "Not available"}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ViewAppliances;
