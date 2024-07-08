import style from "@/styles/components/modal.module.scss";
import useModalStore from "../store/modal-store";
import GetLocalStorage from "./locale-storage/get-local-storage";

const Modal = () => {
  const { isOpen, setIsOpen } = useModalStore();
  const clickDayStorage = GetLocalStorage("clickDay");

  if (!isOpen) return null;

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const handleOverlayClick = () => {
    handleCloseModal();
  };

  return (
    <div className={style.modal} onClick={handleOverlayClick}>
      <div className={style.modal_container} onClick={handleModalClick}>
        <button type="button" onClick={handleCloseModal}>
          Close
        </button>
        {clickDayStorage && `${clickDayStorage}`}
      </div>
    </div>
  );
};

export default Modal;
