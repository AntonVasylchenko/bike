import React from 'react'
import "./modal.css"
const Modal = ({ children, toggleMode, visible }) => {
    const bodyRef = React.useRef(document.querySelector("body"));

    const handleMode = () => {
        toggleMode(!visible)
        const bodyClassList = bodyRef.current.classList;
        bodyClassList.toggle("overflow-scroll", !visible);
    }


    return (
        <div className={visible ? 'modal active' : 'modal'} onClick={handleMode}>
            <div className="modal-wrap" onClick={event => event.stopPropagation()}>
                <div className='modal-close' onClick={handleMode}>X</div>
                {children}
            </div>
        </div>
    )
}

export default Modal