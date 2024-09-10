// PetCard.jsx
import React, { useState } from "react";
import "./PetCategories.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const PetCard = ({ pet, onStatusChange }) => {
  const [showButtons, setShowButtons] = useState(false);
  const navigate = useNavigate();
  const Chatwidget=() =>{
    navigate('/chat');
   }


  return (
    <div
      className="pet-card"
      onMouseEnter={() => setShowButtons(true)}
      onMouseLeave={() => setShowButtons(false)}
    >
      <div className="pet-card-image-container">
        <img src={pet.photo} alt={pet.name} className="pet-image" />
        {showButtons && (
          <div className="button-container">
            <button
              onClick={() => onStatusChange(pet.id, "Available")}
              className={pet.status === "Available" ? "active" : ""}
            >
              Available
            </button>
            <button
              onClick={() => onStatusChange(pet.id, "Adopted")}
              className={pet.status === "Adopted" ? "active" : ""}
            >
              Adopted
            </button>
          </div>
        )}
      </div>
      <div className="pet-card-content">
        <h3 className="pet-name">{pet.name}</h3>
        <div className={`status-indicator ${pet.status.toLowerCase()}`}>
          {pet.status}
        </div>
      </div>
      <FontAwesomeIcon icon={faCommentDots} className="chat-icon" id="root" onClick={Chatwidget} />
    </div>
    
  );
};

export default PetCard;
