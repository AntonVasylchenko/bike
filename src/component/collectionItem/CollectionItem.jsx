import React from 'react'
import "./collectionitem.css"
import { Button } from '../../ui';


const CollectionItem = ({ timeRent, typeRent, size, brand, title, price, booked }) => {
    const { day, hour, minute } = timeRent;
    const koef = hour !== 0 ? hour + ((minute * 100) / 60) / 100 : 1;
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
                    disabled={booked}
                    className='item-footer_btn'
                >
                    Select
                </Button>
            </div>
        </div>
    )
}

export default CollectionItem