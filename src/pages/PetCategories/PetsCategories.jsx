import React, { useState } from "react";
import PetCard from "./PetCard"; // Adjust the path to where your PetCard component is located
import AddPet from "./AddPet"; // Adjust the path to where your AddPet component is located
import "./PetCategories.css"; // Adjust the path to your PetCategories.css file

function PetsCategories(props) {
  const [pets, setPets] = useState([
    {
      id: 1,
      name: "Whiskers",
      type: "Cat",
      status: "Available",
      photo:
        "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 2,
      name: "Barky",
      type: "Tortoise",
      status: "Adopted",
      photo:
        "https://d1jyxxz9imt9yb.cloudfront.net/animal/606/meta_image/regular/Dreamstime_xxl_94660011---Spur-thighed-tortoise_reduced.jpg",
    },
    // Add more pets here...
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleStatusChange = (petId, newStatus) => {
    const updatedPets = pets.map((pet) =>
      pet.id === petId ? { ...pet, status: newStatus } : pet
    );
    setPets(updatedPets);
  };

  const handleAddPet = (newPet) => {
    setPets([...pets, newPet]);
  };

  const filteredPets = pets.filter((pet) =>
    pet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pets-categories">
      <div className="search-and-filter">
        <input
          type="text"
          placeholder="Search Pets..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="pet-list">
        {filteredPets.map((pet) => (
          <PetCard key={pet.id} pet={pet} onStatusChange={handleStatusChange} />
        ))}
      </div>
      <AddPet onAddPet={handleAddPet} />
    </div>
  );
}

export default PetsCategories;
