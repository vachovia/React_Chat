import "./../../assets/scss/Chat/Modal.scss";

const Modal = (props) => {
  
  const findByKey = (key) => {
    return props.children.map((child) => {
      if (child.key === key) {
        return child;
      }
      return false;
    });
  };

  const closeModal = (e) => {
    e.stopPropagation();
    if (e.target.classList.contains("modal-close")) {
      props.click();
    }
  };

  return (
    <div className="modal-mask modal-close" onClick={closeModal}>
      <div className="modal-wrapper">
        <div className="modal-container">
          <div className="modal-header">{findByKey("header")}</div>
          <div className="modal-body">{findByKey("body")}</div>
          <div className="modal-footer">
            <button className="modal-close" onClick={closeModal}>
              Close
            </button>
            {findByKey("footer")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
