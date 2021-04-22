import React, { useState, useEffect } from "react";
import "./Form.css";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [image, setImage] = useState(true);

  const showImage = () => {
    if (window.innerWidth <= 960) {
      setImage(false);
    } else {
      setImage(true);
    }
  };

  window.addEventListener("resize", showImage);
  useEffect(() => {
    showImage();
  }, []);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <span className="close-btn">×</span>
        {image ? (
          <div className="form-content-left">
            <img className="form-img" src="img/img-2.svg" alt="spaceship" />
          </div>
        ) : null}
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
