import React, { useState, useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import Button from 'react-bootstrap/Button';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import {BrowserRouter as Router, Switch, Route, Link, useHistory} from 'react-router-dom';
import * as Yup from 'yup';
import {Action_getDataStartfn,Action_getVillageDatafn} from '../../container/homepage/actions';



const Searchomesection = (props) => {
    
    const [selectvillage,setvillageSelectArea] = useState([]);
    
    const history = useHistory();
    const searhhomeFn = () => {
       history.push("/list");
    }
    
    const  value = useSelector(state => state);
    const  dispatch = useDispatch(value); 

    useEffect(() => {
        dispatch(Action_getDataStartfn());
    },[]);

   

    console.log('after useEffect state value in DOM',value);

    const talukData= value.TalukVillageReducers != undefined ? value.TalukVillageReducers.tdata : [];
    const villageData= value.TalukVillageReducers != undefined ? value.TalukVillageReducers.vdata : [];
    
    console.log('%%%talukData data',talukData);
    console.log(( (Array.isArray(villageData) && villageData.length) > 0 && (villageData !== undefined) ),'%%%Village data',villageData);
    console.log(selectvillage,'selectvillage')


    if((Array.isArray(talukData) && talukData.length) > 0 || talukData != undefined){
       var resultT = talukData.map(a => a.Taluk_Name);
    }
    else{var resultT = [];} 

    
    return (

        <Formik initialValues = {{renttype:'RentType',taluk:'',village:'',BHK:'1BHK'}}
            validationSchema={Yup.object({
                renttype:Yup.string().required('Required'),
               taluk:Yup.string().oneOf(resultT,"Invalid Taluk").required('Required'),
                village:Yup.string().oneOf(selectvillage,"Invalid village").required('Required'),
                BHK:Yup.string().required('Required'),
            })}
            onSubmit={( values, { setSubmitting })=>{
                setTimeout(()=>{
                    alert('values'+JSON.stringify(values));
                    setSubmitting(false);
                    history.push("/list");

                 },500);

             }}>
              {({ values,handleChange,setFieldValue}) => (
                <section className="sectionMain" style={{"position":"unset"}}>

                    <div className="row">

                    <div className="col-lg-12">

                        <Form>
                                <div className="row" style={{"margin-top":" 20px"}}>

                                    <div className="col-lg-8 offset-lg-2 blackLayer">
                                    <h1 className="HeaderPblr" >
                                        Rent House in Perambalur</h1>
                                    <div className="mb20" >
                                        <div className="clearfix" >
                                        <ul className="footer_copyright" style={{"float":"none"}}>
                                            <li>
                                                <label className="cursorPointer">
                                                    <Field type="radio"  className="mr-2" name="renttype" value="RentType" 
                                                    defaultChecked={values.renttype=== "RentType"}/>
                                                    <span className="font-weight-bold mr-1">RENT</span>(House For Rent)
                                                </label>
                                            </li>
                                            <li>
                                                <label className="cursorPointer">
                                                <Field type="radio" className="mr-2" name="renttype" value="LeaseType" 
                                                 defaultChecked={values.renttype=== "LeaseType"}/>
                                                   <span className="font-weight-bold mr-1">LEASE</span>(House for Lease)
                                                </label>
                                            </li>
                                            </ul>
                                            <ErrorMessage name="renttype" component="span" className="error" />
                                            </div>
                                            <div className="clearfix">
                                            <ul className="footer_copyright" style={{"float": "none;"}}>
                                                <li>
                                                    
                                             <label className="mr-2 font-weight-bold">Select Taluk</label>
                                               <Field name="taluk" as="select" className="my-select" onChange={handleChange}>
                                                  <option key="" value="">--Select--</option>
                                                  {  ((Array.isArray(talukData) && talukData.length) > 0 && (talukData !== undefined) ) && 
                                                  talukData.map(x=><option key={x.code} value={x.Taluk_Name}>{x.Taluk_Name}
                                                  </option>)}
                                                </Field>
                                                <ErrorMessage name="taluk" component="span" className="error" />
                                                </li>
                                                <li>
                                                <label className="mr-2 font-weight-bold">Select village</label>

                                                 
                                                <Field name="village" as="select" className="my-select" onChange={(e)=>{
                                                handleChange(e);
                                                var resultV = [];
                                                if(( (Array.isArray(villageData) && villageData.length) > 0 && (villageData !== undefined) ) && 
                                                    (villageData.filter((item)=>item.taluk===values.taluk))[0] !== undefined)
                                                    {  
                                                       resultV = villageData.filter((item)=>item.taluk===values.taluk)[0].taluk_area;
                                                       
                                                    }else{
                                                        resultV = [];
                                                     }
                                                setvillageSelectArea(resultV);
                                                }}>
                                                    <option key="" value="">--Select--</option>
                                                      { ( (Array.isArray(villageData) && villageData.length) > 0 && (villageData !== undefined) ) && 
                                                     (villageData.filter((item)=>item.taluk===values.taluk))[0] !== undefined &&
                                                     (villageData.filter((item)=>item.taluk===values.taluk))[0].taluk_area.map((x,i)=><option key={i} value={x}>{x}
                                                    </option>)}
                                                </Field> 
                                                <ErrorMessage name="village" component="span" className="error" />
                                                </li>
                                            </ul>
                                            </div>
                                            <div className="clearfix">
                                            <ul className="footer_copyright">
                                                <li>
                                                <label className="cursorPointer">
                                                    <Field type="radio" name="BHK" className="mr-2" value="1BHK"
                                                    defaultChecked={values.BHK === '1BHK'}/>
                                                    <span className="font-weight-bold mr-1">1BHK</span>(1 bedroom/1 Hall/1 Kitchen)</label>
                                                </li>
                                                <li>
                                                    <label className="cursorPointer">
                                                    <Field type="radio" name="BHK" className="mr-2" value="2BHK"
                                                    defaultChecked={values.BHK === '2BHK'}/>
                                                        <span className="font-weight-bold mr-1">2BHK</span>(2 bedroom/1 Hall/1 Kitchen)</label>
                                                    </li>
                                                    <li>
                                                    <label className="cursorPointer">
                                                    <Field type="radio" name="BHK" className="mr-2" value="3BHK"
                                                    defaultChecked={values.BHK === '3BHK'}/>
                                                        <span className="font-weight-bold mr-1">3BHK</span>(3 bedroom/1 Hall/1 Kitchen)</label>
                                                    </li>
                                                    </ul>
                                                    <ErrorMessage name="BHK" component="span" className="error"/>
                                                </div>
                                                <div className="clearfix">
                                                    <button className="postandsearchBtn" type="submit" >
                                                    Search Your Rental House
                                                    </button>
                                                </div>
                                                </div>
                                                <hr style={{"border-color": "#ffffff5c;"}}/>
                                                <div className="clearfix">
                                                <button className="postandsearchBtn jj" onClick={()=> history.push('/postrental')}>Post Your Rental Home</button>
                                                </div>
                                                <hr/>
                                                <svg
                                                className="mr-2"
                                                width="1em"
                                                height="1em"
                                                viewBox="0 0 16 16"
                                                className="bi bi-card-list"
                                                fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"/>
                                                <circle cx="3.5" cy="5.5" r=".5"/>
                                                <circle cx="3.5" cy="8" r=".5"/>
                                                <circle cx="3.5" cy="10.5" r=".5"/>
                                                </svg>
                                                <a href="#" className="RLTxt" style={{"color": "#ffffff"}}>Rental / Lease Agreements Format</a>

                                            </div>

                                            </div>
                                    </Form>

                                </div>

                            </div>

                            </section>)}

                            </Formik>

)

}

export default Searchomesection;