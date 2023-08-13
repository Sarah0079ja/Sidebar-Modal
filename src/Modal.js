import { FaTimes } from "react-icons/fa";
import React,{useState} from 'react'

const Modal = () => {
    const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="fixed rounded-full shadow-md">
      <button
        onClick={toggleModal}
        className="absolute text-white hover:text-gray-800 px-3 py-1 bg-blue-400 rounded-lg justify-center"
      >
        ShowModal
      </button>

      {showModal && (
        <div>
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white rounded-lg p-8">

              <h2 className="text-2xl font-bold mb-4 text-slate-900">Modal Content</h2>
              <p className="text-slate-900">Add Modal Content here </p>
              
              <FaTimes
                  color="red"
                  size={24}
                  className="cursor-pointer  "
                  onClick={toggleModal}
                />
              {/* 
                /> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal