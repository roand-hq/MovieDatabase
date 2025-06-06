import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
const Welcome = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const navigate = useNavigate();

  if (!showWelcome) return null;

  const handleAccept = () => {
    setShowWelcome(false);
    navigate("/home");
  };

  return (
    <>
      <div className="card" style={{ width: "30rem" }}>
        <div className="card-body">
          <h5 className="card-title">Bienvenido a la Movie Database</h5>
          <p className="card-text">
            En este sitio web podrás encontrar mi opinión y reseñas sobre distintas películas
            que he visto a lo largo de los años.
          </p>
          <Button onClick={handleAccept} text="Aceptar" color="success" />
        </div>
      </div>
    </>
  );
};

export { Welcome };
