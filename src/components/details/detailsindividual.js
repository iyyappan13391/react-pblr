import React from 'react';

import RawData from '../../data/rawdata.json';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Skeleton from 'react-loading-skeleton';

const Detailsindividual = () => {
        let dataM = RawData[0];
    

    return (
        <section className="text-left hide-footer" style={{"margin-top":"10px"}}>

        <div className="container">
        
            <div className="row justify-content-md-center" >
        
                
                       <div className="col-lg-10 whitebg">
                                <div className="main-content-height">
                                { 
                                <div className="row record" style={{"padding": "20px 0"}}>
                                        <div className="col-lg-12">
                                        {/* <img className="imagesListRent" src={dataM.fileupload[0].src} /> */}
                                        <div class="carousel-wrapper"  >
                                                <Carousel showArrows={true}   >
                                                {dataM.fileupload && dataM.fileupload.map((file,index)=>(
                                                <div className="" >
                                                        <img   src={file.src} />
                                                </div> 
                                                ))}
                                                </Carousel>
                                        </div>
                                        </div>
                                        <div className="col-lg-12">
                                        <ul className="details_ul">
                                                <li>
                                                <b>{dataM.BHK}</b>
                                                <span className="agoText">{dataM["posted time"]}</span>
                                                </li>
                                                <li>{dataM["Furnished Type"]}</li>
                                                <li>Apartment House</li>
                                                <li>Parking {dataM.Carparking}</li>
                                                <li>Rent<b> {dataM.cost[0]}</b>&nbsp;(monthly) &nbsp;&nbsp; | &nbsp;&nbsp; Advance<b> {dataM.cost[1]}</b></li>
                                                <li></li>
                                        </ul>
                                        <a href="#" className="moreDetails">More Details...</a>
                                        <button className="ClickContact postandsearchBtn" style={{"width": "auto"}}>Click Here to Contact</button>
                                        </div>
                                </div>
                                 }
                                
                                </div>
                        </div>
                        
                </div>

        </div>
        
        </section>

)

}

export default Detailsindividual;