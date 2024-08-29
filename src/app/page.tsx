"use client";

import Button from "./components/Button/Button";
import ButtonEdit from "./components/Button/ButtonEdit";
import Modal from "./components/Modal/Modal";
import { useRef } from "react";

export default function Home() {
  const modalRef = useRef<{ openModal: () => void }>(null);

  const handleClick = () => {
    console.log("Click");
  };
  const handleModalClose = () => {
    console.log("Modal closed");
  };
  const handleOpenModal = () => {
    if (modalRef.current) {
      modalRef.current.openModal();
    }
  };
  return (
    <main>
      <Button onClick={handleClick} size="small">
        Small Button
      </Button>
      <Button onClick={handleClick} size="medium">
        Medium Button
      </Button>
      <Button onClick={handleClick} size="large">
        Large Button
      </Button>
      
      <ButtonEdit onClick={handleClick} />

      <Button onClick={handleOpenModal} size="small">
        Open
      </Button>

      <Modal ref={modalRef} onClose={handleModalClose}>
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">This is a reusable modal with custom content.</p>
        <button className="btn">Another button inside modal</button>
      </Modal>
    </main>
  );
}
