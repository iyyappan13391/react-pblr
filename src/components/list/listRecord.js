import React,{useEffect}from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RawData from '../../data/rawdata.json';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {BrowserRouter as Router, Switch, Route, Link, useHistory} from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import axios from 'axios';
import {Action_getPostedRentalStartfn} from '../../container/listpage/actions';


const ListRecord = (props) => {
    
    const histroy = useHistory();
    const  value = useSelector(state => state);
    const  dispatch = useDispatch(value);
    
    const detailspage = (id) => {
        console.log('+++++',id);
        histroy.push(`/details/${id}`);

    }


    return (

        <>


            { value.GetPostRental.dataResponse && value.GetPostRental.dataResponse.map((dataM,index) => (
                <div className="row record" style={{ "padding": "20px 0" }} key={index}>
                    <div className="col-lg-4">
                        {/* <img className="imagesListRent" src={dataM.fileupload[0].src} /> */}
                        <div class="carousel-wrapper"  >
                            <Carousel infiniteLoop useKeyboardArrows showThumbs={false}>
                                {dataM.Multiple_images && dataM.Multiple_images.map((file, index) => (
                                    <div className="imagesListRent Caro_slide_height">
                                        <img style={{ "width": "auto", "height": "100%" }} src={`${file}`} />
                                    </div>
                               ))}
                            </Carousel>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <ul className="details_ul">
                            <li>
                                <b>{dataM.House_Type } ({dataM.Rent_Type == "RentType" ? "Rent " : "Lease"} Available)  </b>
                                <span className="agoText">{dataM["Post_time"]}</span>
                            </li>
                            <li><span className="listHeding">Taluk:</span> {dataM["Taluk"]}, <span className="listHeding">Village:</span> {dataM["Village"]}</li>
                            <li><span className="listHeding">Parking:</span> {dataM.Parking_Type == "parkyes" ? "Yes" : "No"}</li>
                            <li><span className="listHeding">Rent:</span><b> {dataM.Rent_amt}</b>&nbsp;(monthly) &nbsp;&nbsp; | &nbsp;&nbsp; Advance<b> {dataM.Advance_amt}</b></li>
                            <li><span className="listHeding">Address:</span> {dataM.Property_address}</li>
                            <li><span className="listHeding">Availability:</span> {dataM.Availability_Type == "a30" ? "After 30 days" : 
                                               dataM.Availability_Type == "w30" ? "With in 30 days":
                                               dataM.Availability_Type == "w15" ? "With in 15 days":
                                               "Immediatly"}</li>
                            <li></li>
                        </ul>
                        <a href="#" className="moreDetails" onClick={()=>detailspage(dataM._id)}>More Details...</a>
                        <button className="ClickContact postandsearchBtn" style={{ "width": "auto" }}>Click Here to Contact</button>
                    </div>
                </div>
            )) || <Skeleton count={50} />}

            {(value.GetPostRental.dataResponse && value.GetPostRental.dataResponse.length === 0) && "No Houses found neay by..."}

        </>

    )

}

export default ListRecord;