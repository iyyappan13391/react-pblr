import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import RawData from '../../data/rawdata.json';
import { Carousel } from 'react-responsive-carousel';
import { useDispatch, useSelector } from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Skeleton from 'react-loading-skeleton';
import { Action_getPostedRentalStartfn } from '../../container/listpage/actions';

const Detailsindividual = () => {
        let dataM = RawData[0];
        let { id } = useParams();

        const value = useSelector(state => state);
        const dispatch = useDispatch(value);

        console.log('iddddddddddddddd', id)

        useEffect(() => {
                dispatch(Action_getPostedRentalStartfn({ _id: id }));
        }, [id]);


        return (
                <section className="text-left hide-footer" style={{ "margin-top": "10px" }}>

                        <div className="container">

                                <div className="row justify-content-md-center" >


                                        <div className="col-lg-10 whitebg">
                                                <div className="main-content-height">
                                                        { value.GetPostRental.dataResponse && value.GetPostRental.dataResponse[0] &&
                                                                <div className="row record" style={{ "padding": "20px 0" }}>
                                                                        <div className="col-lg-12">
                                                                                {/* <img className="imagesListRent" src={dataM.fileupload[0].src} /> */}
                                                                                <div class="carousel-wrapper"  >
                                                                                        <Carousel showArrows={true}   >
                                                                                                {value.GetPostRental.dataResponse[0] && value.GetPostRental.dataResponse[0].Multiple_images.map((file, index) => (
                                                                                                        <div className="" >
                                                                                                                <img src={file} />
                                                                                                        </div>
                                                                                                ))}
                                                                                        </Carousel>
                                                                                </div>
                                                                        </div>
                                                                        <div className="col-lg-12">
                                                                                <ul className="details_ul">
                                                                                        <li>
                                                                                                <b>{value.GetPostRental.dataResponse[0].House_Type} ({value.GetPostRental.dataResponse[0].Rent_Type == "RentType" ? "Rent " : "Lease"} Available)  </b>
                                                                                                <span className="agoText">{value.GetPostRental.dataResponse[0]["Post_time"]}</span>
                                                                                        </li>
                                                                                        <li><span className="listHeding">Taluk:</span> {value.GetPostRental.dataResponse[0]["Taluk"]}, <span className="listHeding">Village:</span> {value.GetPostRental.dataResponse[0]["Village"]}</li>
                                                                                        <li><span className="listHeding">Parking:</span> {value.GetPostRental.dataResponse[0].Parking_Type == "parkyes" ? "Yes" : "No"}</li>
                                                                                        <li><span className="listHeding">Rent:</span><b> {value.GetPostRental.dataResponse[0].Rent_amt}</b>&nbsp;(monthly) &nbsp;&nbsp; | &nbsp;&nbsp; Advance<b> {value.GetPostRental.dataResponse[0].Advance_amt}</b></li>
                                                                                        <li><span className="listHeding">Address:</span> {value.GetPostRental.dataResponse[0].Property_address}</li>
                                                                                        <li><span className="listHeding">Availability:</span> {value.GetPostRental.dataResponse[0].Availability_Type == "a30" ? "After 30 days" :
                                                                                                value.GetPostRental.dataResponse[0].Availability_Type == "w30" ? "With in 30 days" :
                                                                                                value.GetPostRental.dataResponse[0].Availability_Type == "w15" ? "With in 15 days" :
                                                                                                                "Immediatly"}</li>
                                                                                        <li></li>
                                                                                </ul>
                                                                                <a href="#" className="moreDetails">More Details...</a>
                                                                                <button className="ClickContact postandsearchBtn" style={{ "width": "auto" }}>Click Here to Contact</button>
                                                                        </div>
                                                                </div>
                                                        }

                                                        <div className="row">
                                                        <div id="map"></div>
                                                        </div>

                                                </div>
                                        </div>

                                </div>

                        </div>

                </section>

        )

}

export default Detailsindividual;