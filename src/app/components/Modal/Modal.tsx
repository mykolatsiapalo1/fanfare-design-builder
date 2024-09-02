import { forwardRef, useImperativeHandle, useRef, ReactNode } from "react";
import { ModalProps } from "../../types/index";



const Modal = forwardRef<{ openModal: () => void }, ModalProps>(
  ({ onClose, children }, ref) => {
    const modalRef = useRef<HTMLDialogElement>(null);

    const openModal = () => {
      modalRef.current?.showModal();
    };

    const closeModal = () => {
      modalRef.current?.close();
      onClose();
    };

    useImperativeHandle(ref, () => ({
      openModal,
    }));

    return (
      <dialog ref={modalRef} className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          {children}
          <div className="modal-action">
            <button className="btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      </dialog>
    );
  }
);

Modal.displayName = "Modal";

export default Modal;
