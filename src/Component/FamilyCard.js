import React from "react";

const FamilyCard = ({ personData, onClose }) => {
  return (
    <div className="family-card">
      <h2>Person Information</h2>
      <div>
        <strong>Name:</strong> {personData.name}
      </div>
      {personData.attributes.partner && (
        <div>
          <strong>Married to:</strong> {personData.attributes.partner}
        </div>
      )}
      {/* Add more information as needed */}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default FamilyCard;
