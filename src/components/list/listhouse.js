import React,{useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import FilterList from './filterList';

import RawData from '../../data/rawdata.json';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Skeleton from 'react-loading-skeleton';
import axios from 'axios';

import ListRecord from './listRecord';
import {Action_getPostedRentalStartfn} from '../../container/listpage/actions';




const Listhouse = () => {


    const  value = useSelector(state => state);
    const  dispatch = useDispatch(value);
    
    useEffect(() => {
        dispatch(Action_getPostedRentalStartfn({}));
     }, []);
   

    // const [dataFApi, setdataFApi] = useState([]);
    
    console.log('value=======================Parent',value);
   
   return (


        <section className="text-left hide-footer" style={{ "margin-top": "10px" }}>

            <div className="container">

                <div className="row justify-content-md-center" >

                

                    <div className="col-lg-3 whitebg" style={{ "font-weight": "bold" }}>

                    

                        <FilterList />



                    </div>
                    <div className="col-lg-9 whitebg">
                    <div className="FixedTotalRentText">Total Number of houses ({ value.GetPostRental.dataResponse && value.GetPostRental.dataResponse.length || 0})</div>
                        <div className="main-content-height"> 
                                 <ListRecord  />
                           
                        </div>
                    </div>
                </div>


            </div>


        </section>

    )

}

export default Listhouse;