import React from 'react'
import "./collectionitem.css"
import { Button } from '../../ui';
import Modal from '../modal/Modal';
import SignUp from '../form/SignUp';
import { NavLink } from 'react-router-dom';


const CollectionItem = ({ addToCart, typeDelivety, isLogin, timeRent, typeRent, size, brand, title, price, booked }) => {
    const { day, hour, minute } = timeRent;
    const koef = hour !== 0 ? hour + ((minute * 100) / 60) / 100 : 1;
    const [visible, setVisible] = React.useState(false);
    const bodyRef = React.useRef(document.querySelector("body"));
    const [added, setAdded] = React.useState(false);

    const showModal = () => {
        setVisible(!visible);
        const bodyClassList = bodyRef.current.classList;
        bodyClassList.toggle("overflow-scroll", !visible);
    }

    const handleToCart = () => {
        addToCart({ typeDelivety, isLogin, timeRent, typeRent, size, brand, title, price, booked })
        setAdded((prev) => !prev);
    }

    const contentModal = () => {
        if (day === 0 && hour === 0 && minute === 0) {
            return <h2>Please select type of rent for continue ...</h2>
        } else {
            return (
                <div className='modal-content'>
                    <h2 className='h3'>Your bike <span>{title}</span></h2>
                    <div className="modal-wrapper">
                        <div className="modal-img ">
                            <img src={`${process.env.PUBLIC_URL}/img/bike.png`} alt="bike" />
                        </div>
                        <ul className="modal-text">
                            <li className='h3'>
                                Size: <span>{size}</span>
                            </li>
                            <li className='h3'>
                                Brand: <span>{brand}</span>
                            </li>
                            <li className='h3'>
                                Time: <span>
                                    {timeRent.day} dd:
                                    {timeRent.hour} hh:
                                    {timeRent.minute} mm
                                </span>
                            </li>
                            <li className='h3'>
                                Price: <span> {
                                    typeRent === "Day"
                                        ? price + " AED/Day"
                                        : (price / 24).toFixed(0) + " AED/Hour"
                                }</span>
                            </li>
                            <li className='h3'>
                                Total: <span>
                                    {
                                        typeRent === "Day"
                                            ? (price * day) + " AED"
                                            : ((price / 24).toFixed(0) * koef).toFixed(0) + " AED"
                                    }
                                </span>
                            </li>
                        </ul>
                    </div>
                    {isLogin
                        ?
                        <>
                            <Button
                                disabled={added}
                                onClick={handleToCart}
                                className="modal-content_button">{added ? "Confirm" : "Added"}
                            </Button>
                            {!added ? "" : <h2>Your bike has been added to the cart.To view it, go to your <NavLink to="/cart">account</NavLink> </h2>  }
                        </>
                        : <>
                            <h2>You need to login to continue</h2>
                            <SignUp />
                        </>
                    }
                </div>
            )
        }
    }
    return (
        <div className='collection-item'>
            <div className="collection-item_header">
                <span className="item-header_size">{size}”</span>
                <span className="item-header_brand">{brand}</span>
            </div>
            <div className="collection-item_body">
                <div className="item-body_img">
                    <img src={`${process.env.PUBLIC_URL}/img/bike.png`} alt="bike" />
                </div>
                <h2 className="item-body_title">{title}</h2>
                <p className="item-body_price">
                    {
                        typeRent === "Day"
                            ? price + " AED/Day"
                            : (price / 24).toFixed(0) + " AED/Hour"
                    }

                </p>
                <p className="item-body_price total">
                    Total:
                    {
                        typeRent === "Day"
                            ? (price * day) + " AED/Day for " + day
                            : ((price / 24).toFixed(0) * koef).toFixed(0) + " AED/Hour for " + hour + "h " + minute + "m."
                    }


                </p>
            </div>
            <div className="collection-item_footer">
                <Button
                    onClick={showModal}
                    disabled={booked}
                    className='item-footer_btn'
                >
                    Select
                </Button>
            </div>
            <Modal
                toggleMode={setVisible}
                visible={visible}
            >
                {contentModal()}
            </Modal>
        </div>
    )
}

export default CollectionItem