

import React from "react";
import "./Apicard.css";



function Apicard({image,brand,title,rating,description,price,stock}){

    return(
        <div className={`apicard-container`} >
            <div className="apicard-img-container">
            <img className="apicard-img" src={image}  alt={brand}/>
            </div>
            <div className="apicard-text">
                 <div className="apicard-name-rating">
                <div className="apicard-name">
                <p className="apicard-brand">{brand}</p>
                <p className="apicard-title">{title}</p>
                </div>
                   <div className="apicard-rating">
                   <p className="apicard-rating-rating">{rating}   <span class="fa fa-star"></span>   </p>
                   </div>
                    
                </div>
                <div className="apicard-description-price">
                    <div className="apicard-description">
                        <p className="apicard-description-description">{description}</p>
                    </div>
                    <div className="apicard-price">
                        <p className="apicard-price-price">Price: {price}$</p>
                        <div className="apicard-stock">
                        <p className="apicard-stock-stock">Stock: {stock}</p>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>

        
    );
}


export default Apicard;