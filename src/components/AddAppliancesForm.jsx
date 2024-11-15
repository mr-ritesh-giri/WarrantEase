import React, { useState } from "react";
import { useWarrant } from "../context/ContextProvider";
import { useNavigate } from "react-router-dom";

function AddAppliancesForm() {
  const [form, setForm] = useState({
    type: "",
    model: "",
    make: "",
    purchaseDate: "",
    warrantyPeriod: "",
    customerCareNumber: "",
  });
  const navigate = useNavigate();

  const { handleAdd } = useWarrant();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((values) => ({ ...values, [name]: value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await handleAdd(form);
      alert("Appliance added successfully.");
      navigate("/view-appliances");
    } catch (error) {
      alert("Failed to add appliance. Please try again.");
    }
    setForm({
      type: "",
      model: "",
      make: "",
      purchaseDate: "",
      warrantyPeriod: "",
      customerCareNumber: "",
    });
  };

  return (
    <div className="w-[450px] mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-black mb-4">Add Appliance</h2>
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
            Warranty Period (in years) <span className="text-red-500">*</span>:
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
          Add Appliance
        </button>
      </form>
    </div>
  );
}

export default AddAppliancesForm;
