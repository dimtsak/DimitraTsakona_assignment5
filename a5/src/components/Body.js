import React from "react";


export default function Body(props){
   
    return (
        <main>
            <div className="container">
            <div className="row">
                <div className="col hotel_img">
                <img alt="Hotel Lancaster" src={props.img}/>
                </div>
                <div className="col-3 hotel_description"><h5>{props.name}</h5>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span> &nbsp; Hotel<br/>
                    <p>{props.city}, 0.2 miles to Champs Elysées</p><br/>
                    <span className="rateNo">{props.rating}</span> <strong>{props.ratingText}</strong> <small>(1736 reviews)</small>
                    <br/><p>Excellent location (9.2/10)</p>
                </div>
                <div className="col-3 comparePrice">
                    <div className="divI">Hotel Website $706</div>
                    <div className="divI">Agoda $575</div>
                    <div className="divI">Travelocity $708</div>
                    <div className="divI"><select><option>More deals from $575</option></select></div>
                </div>
                <div className="col hotel_views">
                    <div className="divJ">
                        <p>Hotel Website ${props.price}</p>
                        <br/>
                        <p>3 nights for ${props.price*3}</p>
                    </div>
                    <div className="divJ">
                        <input type="button" className="btn-lg" value="View Deal   >"/>
                    </div>
                </div>
            </div>
            
            
            </div>
        </main>
      );    
}

