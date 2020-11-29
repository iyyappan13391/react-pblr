import React,{useEffect}from 'react';
import RawData from '../../data/rawdata.json';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {BrowserRouter as Router, Switch, Route, Link, useHistory} from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import axios from 'axios';


const ListRecord = (props) => {
    
    const histroy = useHistory();
    const detailspage = () => {
        histroy.push('/details');
    }

    console.log('dataFApi',props)
    
    return (

        <>

{console.log('dataFApi',__dirname)}
            { props.dataFApi && props.dataFApi.map((dataM) => (
                <div className="row record" style={{ "padding": "20px 0" }}>
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
                                <b>{dataM.House_Type}</b>
                                <span className="agoText">{dataM["Post_time"]}</span>
                            </li>
                            <li>Taluk:{dataM["Taluk"]}, Village: {dataM["Village"]}</li>
                            <li>Parking {dataM.Carparking}</li>
                            <li>Rent<b> {dataM.Rent_amt}</b>&nbsp;(monthly) &nbsp;&nbsp; | &nbsp;&nbsp; Advance<b> {dataM.Advance_amt}</b></li>
                            <li>Address: {dataM.Property_address}</li>
                            <li></li>
                        </ul>
                        <a href="#" className="moreDetails" onClick={detailspage}>More Details...</a>
                        <button className="ClickContact postandsearchBtn" style={{ "width": "auto" }}>Click Here to Contact</button>
                    </div>
                </div>
            )) || <Skeleton count={5} />}

        </>

    )

}

export default ListRecord;