import React from "react";


export default function Section(props){
    return(
        <div className="container">
            <div className="row">
                <div className="col-4 map">
                    <iframe id="map" src={props.mapurl}>View Map</iframe>
                </div>
                <div className="col-4 gap">
                    
                </div>
                <div className="col-4 sort">
                    <select name="sort" id="sort">
                       
                        <option>Our recommendations</option>
                        <option>Car Park</option>
                        <option>Sauna</option>
                        <option>Pool</option>
                        <option>Wifi</option>
                        <option>Balcony</option>
                    </select>
                    <div id="i">&#9432;</div>
                </div>
            </div>
        </div>
    );
}