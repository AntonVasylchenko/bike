import React from 'react'
import "./cardProduct.css"


export const CardProduct = ({ name, description,getSerch }) => {
    const descriptionRef = React.useRef();
    const [open, setOpen] = React.useState(true);
    const openDescription = () => {
        setOpen(prev => !prev);
        const maxHeight = descriptionRef.current.scrollHeight + "px";
        const minHeight = 0 + "px";
        descriptionRef.current.style.maxHeight = open ? maxHeight : minHeight;
    }
    const handelChange = () => {
        getSerch(name)
    }
    return (
        <div className='product-item'>
            <div className="product-item_media">
                <img src={`${process.env.PUBLIC_URL}/img/bike.png`} alt="bike" />
            </div>
            <div className="product-item_info">
                <h2 className='product-title h3'>{name}</h2>
                <div className='product-info'>
                    <span className='product-info_question' onClick={openDescription}>?</span>
                    <span className='product-info_plus' onClick={handelChange} >+</span>
                </div>
            </div>
            <div ref={descriptionRef} className='product-description'>
                <p>{description}</p>
            </div>
        </div>
    )
}

