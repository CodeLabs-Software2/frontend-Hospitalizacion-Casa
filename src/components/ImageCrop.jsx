import React, { useState } from "react";
import AvatarEditor from "react-avatar-editor";
import Modal from "react-modal";
import "./ImageCrop.css";

Modal.setAppElement("#root");

function ImageCrop({ setImageProfile, setShowModal, showModal }) {
  const [image, setImage] = useState(null);
  const [editor, setEditor] = useState(null);
  const [scale, setScale] = useState(1);

  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleScaleChange = (event) => {
    setScale(parseFloat(event.target.value));
  };

  const handleSaveClick = () => {
    const canvas = editor.getImageScaledToCanvas();
    const base64Image = canvas.toDataURL("image/jpeg");

    setImageProfile(base64Image);
    setShowModal(false);
  };

  const handleCancelClick = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        contentLabel="Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="flex flex-col items-center justify-center">
          <button className="contenedor-btn-file bordeado mb-4">
            Elegir imagen
            <label htmlFor="btn-file"></label>
            <input type="file" id="btn-file" onChange={handleImageChange} />
          </button>

          {image && (
            <div className="relative flex justify-center items-center">
              <AvatarEditor
                ref={(editor) => setEditor(editor)}
                image={image}
                width={250}
                height={250}
                border={50}
                borderRadius={125}
                scale={scale}
                className="rounded-full mb-6"
              />
              <input
                type="range"
                min="1"
                max="3"
                step="0.01"
                value={scale}
                onChange={handleScaleChange}
                className="absolute top-0 left-0 w-full h-full opacity-0"
              />
            </div>
          )}
          <div className="flex justify-center">
            <button
              onClick={handleSaveClick}
              className="mr-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Guardar
            </button>
            <button
              onClick={handleCancelClick}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Cancelar
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ImageCrop;
