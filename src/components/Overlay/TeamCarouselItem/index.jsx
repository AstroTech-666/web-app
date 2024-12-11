import React from "react";

// Styles
import "./style.css";

// Store
import { useStore } from "../../../store/store";

const TeamCarouselItem = ({ member }) => {
  const updateCursorType = useStore((store) => store.updateCursorType);

  return (
    <div className="carousel">
      <img src={member.image} alt={member.name} />
      <div className="member-details">
        <p>{member.name}</p>
        <p>{member.description}</p> {/* Added description */}
      </div>
    </div>
  );
};

export default TeamCarouselItem;
