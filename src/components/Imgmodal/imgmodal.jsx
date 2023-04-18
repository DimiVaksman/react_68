import Modal from 'react-modal';

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

export const ImgModal = ({isOpen, OnClose, image}) => {
   return (
    <Modal
    isOpen={isOpen}
    style={customStyles}
    onRequestClose={OnClose}

    contentLabel="Example Modal">
        <div>

        <img src={image} alt="sadads" width='320' />
<button onClick={OnClose}>close</button>
        </div>
  </Modal>
   )
}