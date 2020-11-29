import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import FilterList from './filterList';

import RawData from '../../data/rawdata.json';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Skeleton from 'react-loading-skeleton';
import axios from 'axios';

import ListRecord from './listRecord';




const Listhouse = () => {

   

    const [dataFApi, setdataFApi] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/post/getlist').then(response => {
            console.log("get post", response.data);
            setdataFApi(response.data);
            return response.data;
        }).catch(err => { console.log("get post", err); throw err });
    }, [])
  

    console.log('dataFApi',dataFApi);



    console.log('<p>{RawData}</p>', RawData)


    


   

    return (


        <section className="text-left hide-footer" style={{ "margin-top": "10px" }}>

            <div className="container">

                <div className="row justify-content-md-center" >

                    <div className="col-lg-3 whitebg" style={{ "font-weight": "bold" }}>

                        <FilterList />



                    </div>
                    <div className="col-lg-9 whitebg">
                        <div className="main-content-height">
                                
                                 <ListRecord dataFApi={dataFApi} />
                           
                        </div>
                    </div>
                </div>


            </div>


        </section>

    )

}

export default Listhouse;