import {useNavigate} from 'react-router-dom';
import clases from './Modal.module.css';

const Modal = ({children}) => {
  const navigate = useNavigate();

  function closeHandler() {
    navigate('..');
  }

  return (
    <>
      <div className={clases.backdrop} onClick={closeHandler} />
      <dialog open className={clases.modal}>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
