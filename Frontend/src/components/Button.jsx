import { useState } from "react";

import Form from "./Form";

const Button = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleSubmit = (formData) => {
    console.log("Form submitted with data:", formData);
    closeModal();
  };

  const handleCancel = () => {
    closeModal();
  };

  return <>
    <div className="container mx-auto my-8 text-center "> 
      <h1 className="p-4 text-3xl">No Ordering Services Here</h1>
      <p className="text-gray-700">Services will be listed here</p></div>
    <div className="container mx-auto my-8 flex items-center justify-center">
      
     
      {/* Button to Open Modal */}
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded focus:outline-none "
        onClick={openModal}
      >
        + Add Ordering Service
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          {/* Modal Content */}
          <div className="bg-white p-8 w-full md:w-1/2 rounded">
            {/* Close Modal Button */}
            <button
              className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 focus:outline-none"
              onClick={closeModal}
            >
              X
            </button>

            {/* Rendering the Form component */}
            <Form onSubmit={handleSubmit} onCancel={handleCancel} />
          </div>
        </div>
      )}
    </div>
  </>
    
};

export default Button;
