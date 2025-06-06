import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Button } from "./Button";
const Card = ({ title, year, genre, director, rating, onDelete, onUpdate}) => {
  const maxStars = 5;

  const safeRating = typeof rating === "number" && !isNaN(rating) ? Math.round(rating) : 0;

  const fullStars = Math.min(safeRating, maxStars); // Aseguramos que no pase de 5

  return (
    <div className="card mb-3" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{director}</h6>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          {year} • {genre}
        </h6>
       

        <div className="mb-2 text-warning" style={{ fontSize: "1.2rem" }}>
          {[...Array(fullStars)].map((_, i) => (
            <i key={`full-${i}`} className="bi bi-star-fill"></i>
          ))}
          {[...Array(maxStars - fullStars)].map((_, i) => (
            <i key={`empty-${i}`} className="bi bi-star"></i>
          ))}
        </div>

        <Button text="Actualizar" onClick={onUpdate} color="primary"></Button>
        <Button text="Eliminar" onClick={onDelete} color="danger"></Button>
      </div>
    </div>
  );
};

export { Card };
