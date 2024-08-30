"use client";

import Button from "./components/Button/Button";
import ActionButtons from "./components/FutterBar/ActionButtons";
import { useRef } from "react";

import SettingsPanel from "./components/ProductSettingsPanel/SettingsPanel";

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
    <main className="relative min-h-screen">
      {/* <div className="absolute top-4 right-4 flex flex-row gap-2 z-50">
        <Button onClick={handleClick} size="small">
          Save
        </Button>
        <Button onClick={handleClick} size="small">
          Duplicate
        </Button>
        <Button onClick={handleClick} size="small">
          Clear
        </Button>
      </div> */}
      {/* <ProductSettingsPanel /> */}
      <SettingsPanel />

      <ActionButtons />
    </main>
  );
}
