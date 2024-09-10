import React, { useState } from "react";
import "./PetCategories.css"; // Make sure this is the correct path

const AddPet = ({ onAddPet }) => {
  const [showForm, setShowForm] = useState(false);
  const [newPetData, setNewPetData] = useState({
    name: "",
    type: "",
    status: "Available",
    photo: "",
  });

  const handleFieldChange = (e) => {
    setNewPetData({ ...newPetData, [e.target.name]: e.target.value });
  };

  const submitNewPet = () => {
    if (newPetData.name && newPetData.type && newPetData.photo) {
      onAddPet({ ...newPetData, id: Date.now() });
      setNewPetData({ name: "", type: "", status: "Available", photo: "" });
      setShowForm(false);
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div className="add-pet-container">
      <button className="add-pet-button" onClick={() => setShowForm(!showForm)}>
        {showForm ? "Cancel" : "Add a pet for adoption"}
      </button>
      {showForm && (
        <div className="add-pet-form">
          <input
            type="text"
            name="name"
            placeholder="Pet name"
            value={newPetData.name}
            onChange={handleFieldChange}
          />
          <input
            type="text"
            name="type"
            placeholder="Pet type"
            value={newPetData.type}
            onChange={handleFieldChange}
          />
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            value={newPetData.photo}
            onChange={handleFieldChange}
          />
          <button className="submit-pet-button" onClick={submitNewPet}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddPet;
