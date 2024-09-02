"use client";

import { useRef } from "react";
import Button from "./components/Button/Button";
import ActionButtons from "./components/FutterBar/ActionButtons";
import SettingsPanel from "./components/ProductSettingsPanel/SettingsPanel";
import SizeSelectorModal from "./components/Upload/Upload";
import { SizeSelectorModalRef } from "./types/index";
import SidebarMini from "./components/Sidebar/SidebarMini";

export default function Home() {
  const modalRef = useRef<SizeSelectorModalRef>(null);

  const handleClick = () => {
    console.log("Click");
  };

  const handleModalClose = () => {
    console.log("Modal closed");
  };

  const handleOpenModal = () => {
    modalRef.current?.openModal();
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
        <Button onClick={handleOpenModal} size="small">
          Open Size Selector
        </Button>
      </div> */}

      {/* <SidebarMini /> */}

      <SettingsPanel />
      <ActionButtons />

      <SizeSelectorModal ref={modalRef} onClose={handleModalClose} />
    </main>
  );
}
