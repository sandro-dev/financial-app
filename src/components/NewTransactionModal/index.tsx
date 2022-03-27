import { useState } from "react";
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';

import { Container } from "./styles"


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');


export const NewTransactionModal: React.FC = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    
    <Container>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>
          <img src={closeImg} alt="fechar" />
        </button>
        <form>
          <input type="text" placeholder="Nome" />
          <input type="number" placeholder="Preço"/>
          <div>
            <button>Entrada</button>
            <button>Saída</button>
          </div>
          <input type="text" placeholder="Categoria" />

        </form>
      </Modal>
    </Container>
  )
}