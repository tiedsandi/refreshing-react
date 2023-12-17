import clases from './Modal.module.css';

const Modal = ({children, onClose}) => {
  return (
    <>
      <div className={clases.backdrop} onClick={onClose} />
      <dialog open className={clases.modal}>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
