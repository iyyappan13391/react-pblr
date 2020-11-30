import React,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import {Action_getPostedRentalStartfn} from '../../container/listpage/actions';


const FilterList = () => {

    const [volumeMin,setvolumeMin] = useState(3500);
    const [volumeMax,setvolumeMax] = useState(7000);

    const  value = useSelector(state => state);
    const  dispatch = useDispatch(value);

    const handleOnChange = (value) => {
        setvolumeMin(value);
       
      }
    const handleOnChange1 = (value) => {
       setvolumeMax(value);
    }


return(
            <div>
                <div className="FilterTxt">Filters</div>
                <Formik 
                   initialValues={{Rtype:['RentType'],Htype:['1BHK'],RentRangeHtypeMin:"",RentRangeHtypeMax:"",Availtype:["Im"],Parkingtype:["parkyes"],Furnishingtype:["Semi"]}}
                //    validationSchema={Yup.object({
                //    renttype:Yup.string().required('Required')
                     
                //    })}
                   onSubmit={(values,{setSubmitting}) => {
                    console.log("volumeMin",volumeMin);
                    console.log("volumeMax",volumeMax);
                    
                    values.volumeMin = volumeMin;
                    values.volumeMax = volumeMax;

                           setTimeout(()=>{
                                  alert(JSON.stringify(values));
                                  setSubmitting(false);
                                  dispatch(Action_getPostedRentalStartfn(values));

                           },500)

                   }}> 
                   {({ values,handleChange }) => (
                            
                            <Form>
                                    <div className="Fpanel">
                                        <div className="head">Rent Type</div>
                                        <label><Field type="checkbox" name="Rtype" className="mr-2" value="RentType" defaultChecked={values.Rtype === 'Rent'}/>Rent</label>
                                        <label><Field type="checkbox" name="Rtype" className="mr-2" value="LeaseType" defaultChecked={values.Rtype === 'Lease'}/>Lease</label>
                                        <ErrorMessage name="Rtype" component="span" className="error" />
                                    </div>
                                    <div className="Fpanel">
                                        <div className="head">House Type</div>
                                        <label><Field type="checkbox" name="Htype" className="mr-2" value="1BHK" defaultChecked={values.Htype === '1BHK'}/>1BHK</label>
                                        <label><Field type="checkbox" name="Htype" className="mr-2" value="2BHK" defaultChecked={values.Htype === '2BHK'}/>2BHK</label>
                                        <label><Field type="checkbox" name="Htype" className="mr-2" value="3BHK" defaultChecked={values.Htype === '3BHK'}/>3BHK</label>
                                        <ErrorMessage name="Htype" component="span" className="error" />
                                    </div>
                                    <div className="Fpanel">
                                        <div className="head">Rent Range(monthly)</div>
                                        <div style={{"margin-bottom":"15px"}}>
                                            <label>Min</label>
                                            <div className='slider'>
                                                <Slider
                                                    name="RentRangeHtypeMin"
                                                    value={volumeMin}
                                                    min={2000}
                                                    max={10000}
                                                    orientation="horizontal"
                                                    step={500}
                                                    onChange={handleOnChange}
                                                />{<div className='value'>{volumeMin}</div>}
                                            </div>
                                        </div>
                                        <div style={{"margin-bottom":"15px"}}>
                                            <label>Max</label>
                                            <div className='slider'>
                                                    <Slider
                                                        name="RentRangeHtypeMax"
                                                        value={volumeMax}
                                                        min={2000}
                                                        max={10000}
                                                        orientation="horizontal"
                                                        step={500}
                                                        onChange={handleOnChange1}
                                                    />{<div className='value'>{volumeMax}</div>}
                                            </div>
                                        </div>    
                                        
                                    </div>
                                    <div className="Fpanel">
                                        <div className="head">Availability</div>
                                        <label><Field type="checkbox" name="Availtype" className="mr-2" value="Im" defaultChecked={values.Availtype === 'Im'}/>Immediatly</label>
                                        <label><Field type="checkbox" name="Availtype" className="mr-2" value="w15" defaultChecked={values.Availtype === 'w15'}/>Withiin 15 days</label>
                                        <label><Field type="checkbox" name="Availtype" className="mr-2" value="w30" defaultChecked={values.Availtype === 'w30'}/>Within 30 days</label>
                                        <label><Field type="checkbox" name="Availtype" className="mr-2" value="a30" defaultChecked={values.Availtype === 'a30'}/>After 30 days</label>
                                        <ErrorMessage name="Availtype" component="span" className="error" />
                                    </div>
                                    <div className="Fpanel">
                                        <div className="head">Parking</div>
                                        <label><Field type="checkbox" name="Parkingtype" className="mr-2" value="parkyes" defaultChecked={values.Parkingtype === 'parkyes'}/>Yes</label>
                                        <label><Field type="checkbox" name="Parkingtype" className="mr-2" value="parkno" defaultChecked={values.Parkingtype === 'parkno'}/>No</label>
                                        <ErrorMessage name="Parkingtype" component="span" className="error" />
                                    </div>
                                    <div className="Fpanel">
                                        <div className="head">Furnishing</div>
                                        <label><Field type="checkbox" name="Furnishingtype" className="mr-2" value="
                                        " defaultChecked={values.Furnishingtype === 'Full'}/>Full</label>
                                        <label><Field type="checkbox" name="Furnishingtype" className="mr-2" value="Semi" defaultChecked={values.Furnishingtype === 'Semi'}/>Semi</label>
                                        <label><Field type="checkbox" name="Furnishingtype" className="mr-2" value="Notype" defaultChecked={values.Furnishingtype === 'Notype'}/>No</label>
                                        <ErrorMessage name="Furnishingtype" component="span" className="error" />
                                    </div>

                                    <div className="Fpanel text-right">
                                        <button className="pblrThemeBtn marr10" type="reset" onClick={()=>dispatch(Action_getPostedRentalStartfn())}>Remove Filter</button>
                                        <button className="pblrThemeBtn" type="submit">Submit Filter</button>
                                    </div>
                                
                        </Form>
  
                       )}


                        </Formik>
                            
                        </div>

)


}


export default FilterList;