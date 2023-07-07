import React from 'react'
import "./requestRent.css"
const RequestRent = ({ users }) => {
  const renderTotal = () => {
    if (users.users[0]) {
      return users.users[0].items.reduce(
        (accumulator, item) => accumulator + item.price,
        0
      );
    }
  }
  const renderHTML = () => {
    if (users.users[0]) {
      const items = users.users[0].items;

      return items.map((el, index) => {
        return (
          <div key={`${el.title}_${index}`} className="rent-item">
            <div className="rent-item_img">
              <img src={`${process.env.PUBLIC_URL}/img/bike.png`} alt="bike" />
            </div>
            <h2 className="rent-item_title h3">{el.title}</h2>
            <p className='rent-item_rent h3'>
              Type Rent:
              <span> {el.typeRent}</span>
            </p>
            <p className='rent-item_time h3'>
              Time:
              <span> {el.timeRent.day}Day</span>
              <span>  {el.timeRent.hour}Hour </span>
              <span> {el.timeRent.minute}Minute </span></p>
            <p className='rent-item_price h3'>{el.price} AED</p>
          </div>
        )
      })
    }
  }

  return (
    <section className='request-rent'>
      <div className="page-width">
        <div className="request-rent_container">
          <h1 className='request-rent_title h1'>Request to rent bicycles</h1>
          <div className="request-rent_wrapper">
            {renderHTML()}
          </div>
          <p className='request-rent_total h1'>Total: <span>{renderTotal()} AED</span></p>
        </div>
      </div>
    </section>
  )
}

export default RequestRent