import React from 'react'
import "./myCard.css"

const MyCard = ({ data }) => {

  const { name, price, rating, deliveryTime, category, image } = data;

  return (
    <div className="card-container">

      {/* Image */}
      <div className="card-img">
        <img src={image} alt={name} />
      </div>

      {/* Content */}
      <div className="card-body">
        <h5 className="card-title">{name}</h5>

        <p className="card-category">{category}</p>

        <div className="card-info">
          <span>⭐ {rating}</span>
          <span>{deliveryTime} mins</span>
        </div>

        <div className="card-bottom">
          <h6>₹{price}</h6>
          <button className="add-btn">Add</button>
        </div>
      </div>

    </div>
  )
}

export default MyCard