import React from "react";

export default function Header(props) {

    return (
        <header>
            <div className="container">
                <div className="jumbotron">
                    <div className="row">
                        <form>
                            <input className="form-control-lg" type="search" id="search" placeholder="&#128269; Champs Elysées, Paris" autoComplete="#"/>
                            <button className="btn btn-lg" id="searchButton">Search</button>
                        </form>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label id="labl1" htmlFor="start">Check-in</label>
                            <input className="form-control-lg r2" type="date" id="start" name="trip-start" value="2018-11-16" min="2018-01-01" max="2022-12-31"/>
                        </div>
                        <div className="col">
                            <label id="labl2" htmlFor="end">Check-out</label>
                            <input className="form-control-lg r2" type="date" id="end" name="trip-end" value="2018-11-19" min="2018-01-01" max="2022-12-31"/>
                        </div>
                        <div className="col">
                            <label htmlFor="rooms">&nbsp;</label>
                            <input className="form-control-lg r2" type="button" id="rooms" name="family-rooms" value="family-rooms"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 r3">
                            <label htmlFor="price">Price</label>
                            <input className="form-control-lg r2" type="range" id="price-range" onInput="id_range.value=this.value" name="price-range" min={props.min} max={props.max} value={props.max}/>
                            <input type="text" min={props.min} max={props.max} value={props.max} onKeyUp="price-range.value=this.value" id="id_range"/>
                        </div>
                        <div className="col-4 r3">
                            <div className="col r23">
                                <label htmlFor="propertyType">Property type &nbsp;</label>
                                <select name="propertyType" id="propertyType" className="form-control-lg">
                                    <option>All</option>
                                </select>
                            </div>
                            <div className="col r23">
                                <label htmlFor="guestRating">Guest rating &nbsp;&nbsp;</label>
                                <select name="guestRating" id="guestRating" className="form-control-lg">
                                    <option>All</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-4 r3">
                            <div className="col r23">
                                <label htmlFor="hotelLocation">Hotel location &nbsp;</label>
                                <select name="hotelLocation" id="hotelLocation" className="form-control-lg">
                                    <option>Champs Ely...</option>
                                    <option>{props.city1}</option>
                                    <option>{props.city2}</option>
                                    <option>{props.city3}</option>
                                    <option>{props.city4}</option>
                                </select>
                            </div>
                            <div className="col r23">
                                <label htmlFor="filters">More filters &nbsp;</label>
                                <select name="filters" id="filters" className="form-control-lg">
                                    <option>Select</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}