import React from "react";
import "./Button6.css"; // Import the CSS file for Button6


const Button6 = ({ className }) => {

    const fileUrl = "../assets/Lee Jun Xian Keegan_Resume.pdf"
    const fileName = "Keegan_Resume.pdf"

    const handleMouseMove = (e) => {
        const button = e.target;
        const rect = button.getBoundingClientRect();
        const relX = e.clientX - rect.left;
        const relY = e.clientY - rect.top;

        const span = button.querySelector("span");
        span.style.top = `${relY}px`;
        span.style.left = `${relX}px`;
  };

  return (
    <a
      href={fileUrl}  // URL of the file to download
      download={fileName}  // The file name to save as
      className="relative overflow-hidden"
    >
        <button
        className={`relative overflow-hidden ${className} text-blue-300 uppercase border border-blue-400 rounded-xl group hover:text-gray-200`}
        onMouseMove={handleMouseMove}
        >
        Download CV
        <span className="absolute w-0 h-0 bg-blue-600 rounded-full transition-all duration-500 ease-in-out -z-10"></span>
        </button>
    </a>
  );
};

export default Button6;


