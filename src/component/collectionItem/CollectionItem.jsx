import React from 'react'
import "./collectionitem.css"
import { Button } from '../../ui';

const CollectionItem = ({ size, brand, title, price, booked }) => {
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
                <p className="item-body_price">{price} AED/day</p>
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