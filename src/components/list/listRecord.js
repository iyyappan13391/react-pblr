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

    const detailspage = () => {
        histroy.push('/details');
    }

    useEffect(() => {

       dispatch(Action_getPostedRentalStartfn());
       // axios.get('http://localhost:3001/post/getlist').then(response => {
        //     console.log("get post", response.data);
        //     setdataFApi(response.data);
        //     return response.data;
        // }).catch(err => { console.log("get post", err); throw err });
    }, []);
{console.log('dataFApi',value.GetPostRental.dataResponse)}
    
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
                                <b>{dataM.House_Type || <Skeleton count={2} /> }  </b>
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
            )) }

        </>

    )

}

export default ListRecord;