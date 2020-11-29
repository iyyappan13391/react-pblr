import React, { useState, useEffect } from 'react';
import { ToastProvider,useToasts } from 'react-toast-notifications';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form as Formm, Field, ErrorMessage } from 'formik';
import { Form, Jumbotron, Col } from 'react-bootstrap';
import * as Yup from 'yup';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Action_getDataStartfn } from '../../container/homepage/actions';
import {Action_PostRentalDataStartfn} from '../../container/postrentalpage/actions';




const CarouselFn = (props) => {
    //console.log('carousel props',props);
    const RemoveImage = (index) => {
        var array = [...props.imagess]; // make a separate copy of the array
        console.log('index1x', index)
        if (index !== -1) {
            props.imagess.splice(index, 1);//props.imagess.slice(index,1);
            props.setpreviewimage(props.imagess);
        }


    }
    const onChangeEvent = () => {
        console.log('onChange Event Triggered');
    }
    const onClickItem = () => {
        alert()
    }
    return (
        <div class="carousel-wrapper mart20" >
            <Carousel infiniteLoop useKeyboardArrows
                onChange={onChangeEvent}
            >

                {/* Display all selected images. */}
                {props.imagess && [...props.imagess].map((file, index) => (
                    <div>
                        <img src={URL.createObjectURL(file)} />
                        {/* <div className="removeClass" onClick={console.log('oh yes')}>Remove</div> */}
                        <button className="removeClass" onClick={() => RemoveImage(index)}>Remove {index}</button>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}


const ToastDemo = ({ content }) => {
    const { addToast } = useToasts()
    return (
      <button onClick={() => addToast("The Post data has been saved successfully ", {
        appearance: 'success',
        autoDismiss: true,
      })}>
        Add Toast
      </button>
    )
  }


const PostRental = () => {


    
    const [selectvillage, setvillageSelectArea] = useState([]);
    const history = useHistory();
    
    const value = useSelector(state => state);
    const dispatchTALUKVILLAGE = useDispatch(value);

    const PostRentalDataValue = useSelector(state => state);
    const dispatchPostRental = useDispatch(PostRentalDataValue);

   

    useEffect(() => {
        dispatchTALUKVILLAGE(Action_getDataStartfn());
    }, []);


   

    const talukData = value.TalukVillageReducers != undefined ? value.TalukVillageReducers.tdata : [];
    const villageData = value.TalukVillageReducers != undefined ? value.TalukVillageReducers.vdata : [];
    if ((Array.isArray(talukData) && talukData.length) > 0 || talukData != undefined) {
        var resultT = talukData.map(a => a.Taluk_Name);
    }
    else { var resultT = []; }

    const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
    const [previewimage, setpreviewimage] = useState([]);


    const FILE_SIZE = 150000;
    const SUPPORTED_FORMATS = [
        "image/jpg",
        "image/jpeg",
        "image/gif",
        "image/png"
    ];

    return (
        <ToastProvider>
        <Formik
            initialValues={{
                fullname: '',
                email: '',
                //  password:'',
                contactno: '',
                taluk: '',
                village: '',
                renttype: 'RentType',
                BHK: '1BHK',
                rentAmt: '',
                advanceAmt: '',
                leaseAmt: '',
                fileupload: undefined,
                propaddress: '',
                description: '',
                facilities: ''
            }}
            validationSchema={Yup.object().shape({
                fullname: Yup.string().min(5, 'Min 5 charactor').required('Required'),
                email: Yup.string().email('Invalid email address').required('Required'),
                //    password:Yup.string().min(8,'Min 8 charactor').required('Required'),
                contactno: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Required'),
                taluk: Yup.string().oneOf(resultT, "Invalid Taluk").required('Required'),
                village: Yup.string().oneOf(selectvillage, "Invalid village").required('Required'),
                renttype: Yup.string().required('Required'),
                BHK: Yup.string().required('Required'),
                rentAmt: Yup.number().notRequired()
                    .when('renttype', {
                        is: (val) => val === 'RentType',
                        then: Yup.number().required('This field is required now'),
                        otherwise: Yup.number().notRequired()
                    }),
                advanceAmt: Yup.number().notRequired()
                    .when('renttype', {
                        is: (val) => val === 'RentType',
                        then: Yup.number().required('This field is required now'),
                        otherwise: Yup.number().notRequired()
                    }),
                leaseAmt: Yup.number().notRequired()
                    .when('renttype', {
                        is: (val) => val !== 'RentType',
                        then: Yup.number().required('This field is required now'),
                        otherwise: Yup.number().notRequired()
                    }),
                fileupload: Yup
                    .mixed().nullable().required("A file is required")
                    .test(
                        "fileFormat",
                        "Unsupported Format",
                        value => value && ["image/jpg", "image/jpeg", "image/gif", "image/png"].includes(value.type)
                    ).test(
                        "fileSize",
                        "File too large",
                        value => value && value.size <= 1500000
                    ),
                propaddress: Yup.string().min(10, 'Min 10 charactor').max(250, 'Min 250 charactor').required('Required'),
                description: Yup.string().min(5, 'Min 5 charactor').max(250, 'Min 250 charactor').required('Required'),
                facilities: Yup.string().required('Required')
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                    values.fileupload = previewimage.map(x => x.name);
                    console.log('%%%', values)
                    alert(JSON.stringify(values), "values");




                    let datapost = {
                        "Owner_Name": values.fullname,
                        "Owner_mail_id": values.email,
                        "Owner_contact_number": values.contactno,
                        "Taluk": values.taluk,
                        "Village": values.village,
                        "Rent_Type": values.renttype,
                        "House_Type": values.BHK,
                        "Rent_amt": values.rentAmt,
                        "Advance_amt": values.advanceAmt,
                        "Lease_amt": values.leaseAmt,
                        "Multiple_images": values.fileupload,
                        "Description": values.description,
                        "Property_address": values.propaddress,
                        "Property_GEO": "30.0.0.0.4",
                        "Facilities": values.facilities
                    }
                    var formData = new FormData();
                    for (const key of Object.keys(previewimage)) {
                        formData.append(`fileupload`, previewimage[key]);
                    }
                    formData.append(`datapost`, JSON.stringify(datapost));
                    const config = {
                        headers: {
                            'content-type': 'multipart/form-data'
                        }
                    };
                    


                    
                    dispatchPostRental(Action_PostRentalDataStartfn(formData));
                    console.log('dispatch-post-rental-response',PostRentalDataValue);


                    /*axios.post('http://localhost:3001/post/create', formData, config).then(response => {
                        console.log("create post", response.data);
                        return response.data;
                    }).catch(err => { console.log("create post", err); throw err });*/


                    setSubmitting(false);
                    resetForm();
                    setpreviewimage([]);
                    // addToast("Post Has Been Successfull Stored...", {
                    //     appearance: 'info',
                    //     autoDismiss: true,
                    // });
                    history.push("/list");
                    window.location.reload(false)
                }, 500);
            }}>
            {({ values, errors, touched, handleChange, handleBlur, setFieldValue }) => (

                <section className="sectionMain text-left hide-footer" style={{ "margin-top": "0px" }}>
                    <div className="container">
                        <div className="main-content-height padding-0">
                            <Jumbotron fluid>
                                <div className="col-lg-8 offset-2">
                                    <h3 class="text-center mb20">Post Your Rental House</h3>
                                    <Formm>
                                        <Form.Group controlId="formBasicName">
                                            <Form.Label>Full Name</Form.Label>
                                            <Field className="form-control" type="text" name="fullname" placeholder="Enter Name" />
                                            <ErrorMessage name="fullname" component="span" className="error" />
                                        </Form.Group>


                                        <Form.Group controlId="formBasicEmail" className="mart20">
                                            <Form.Label>Email address</Form.Label>
                                            <Field className="form-control" type="email" name="email" placeholder="Enter email" />
                                            <ErrorMessage name="email" component="span" className="error" />
                                        </Form.Group>
                                       
                                        {/* <ToastDemo/>     */}
                                                                            {/* <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Field  className="form-control" name="password" type="password" placeholder="Password" />
                                    <ErrorMessage name="password" component="span" className="error" />
                                    </Form.Group> */}

                                        <Form.Group controlId="formBasicContactno">
                                            <Form.Label>Contact Number</Form.Label>
                                            <Field className="form-control" name="contactno" type="number" placeholder="India +91- " />
                                            <ErrorMessage name="contactno" component="span" className="error" />
                                        </Form.Group>

                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Select Taluk</ Form.Label>
                                            <Field className="form-control" name="taluk" as="select" onChange={handleChange}>
                                                <option key="" value="">--Select--</option>
                                                {((Array.isArray(talukData) && talukData.length) > 0 && (talukData !== undefined)) &&
                                                    talukData.map(x => <option key={x.code} value={x.Taluk_Name}>{x.Taluk_Name}
                                                    </option>)}
                                            </Field>
                                            <ErrorMessage name="taluk" component="span" className="error" />
                                        </Form.Group>

                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>Select Village</Form.Label>
                                            <Field name="village" as="select" className="form-control" onChange={(e) => {
                                                handleChange(e);
                                                var resultV = [];
                                                if (((Array.isArray(villageData) && villageData.length) > 0 && (villageData !== undefined)) &&
                                                    (villageData.filter((item) => item.taluk === values.taluk))[0] !== undefined) {
                                                    resultV = villageData.filter((item) => item.taluk === values.taluk)[0].taluk_area;

                                                } else {
                                                    resultV = [];
                                                }
                                                setvillageSelectArea(resultV);
                                            }}>
                                                <option key="" value="">--Select--</option>
                                                {((Array.isArray(villageData) && villageData.length) > 0 && (villageData !== undefined)) &&
                                                    (villageData.filter((item) => item.taluk === values.taluk))[0] !== undefined &&
                                                    (villageData.filter((item) => item.taluk === values.taluk))[0].taluk_area.map((x, i) => <option key={i} value={x}>{x}
                                                    </option>)}
                                            </Field>
                                            <ErrorMessage name="village" component="span" className="error" />
                                        </Form.Group>


                                        <Form.Group className="mb20" >
                                            <Form.Label as="legend" column sm={12}>
                                                House For
                                        </Form.Label>
                                            <Col >
                                                <Form.Label className="marr20 cursorPointer">
                                                    <Field
                                                        type="radio"
                                                        label="Rental House"
                                                        name="renttype"
                                                        value="RentType"
                                                        id="RentType"
                                                        defaultchecked={values.renttype === "RentType"}
                                                        onClick={(event) => { event.preventDefault(); values.leaseAmt = '' }}
                                                    />
                                            Rental</Form.Label>

                                                <Form.Label className="marr20 cursorPointer">
                                                    <Field
                                                        type="radio"
                                                        label="Lease Type House"
                                                        name="renttype"
                                                        value="LeaseType"
                                                        id="LeaseType"
                                                        defaultchecked={values.renttype === "LeaseType"}
                                                        onClick={(event) => { event.preventDefault(); values.rentAmt = ''; values.advanceAmt = ''; }}
                                                    />
                                            Lease</Form.Label>
                                            </Col>
                                            <ErrorMessage name="renttype" component="span" className="error" />
                                        </Form.Group>

                                        {values.renttype === "RentType" && <Form.Group controlId="formBasicName">
                                            <Form.Label>Rent Amount (Monthly)</Form.Label>
                                            <Field className="form-control" type="text" name="rentAmt" placeholder="Enter Rent Amount" />
                                            <ErrorMessage name="rentAmt" component="span" className="error" />
                                        </Form.Group>}
                                        {values.renttype === "RentType" && <Form.Group controlId="formBasicName">
                                            <Form.Label>Advance Amount (For Rent house)</Form.Label>
                                            <Field className="form-control" type="text" name="advanceAmt" placeholder="Enter Advance Amount" />
                                            <ErrorMessage name="advanceAmt" component="span" className="error" />
                                        </Form.Group>}
                                        {values.renttype === "LeaseType" && <Form.Group controlId="formBasicName">
                                            <Form.Label>Lease Amount</Form.Label>
                                            <Field className="form-control" type="text" name="leaseAmt" placeholder="Enter Lease Amount" />
                                            <ErrorMessage name="leaseAmt" component="span" className="error" />
                                        </Form.Group>}

                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Label>BHK Type( Number of kitchen,bedroom,Hall )</Form.Label>
                                            <Field className="form-control" name="BHK" as="select">
                                                <option>1BHK</option>
                                                <option>2BHK</option>
                                                <option>3BHK</option>
                                            </Field>
                                            <ErrorMessage name="BHK" component="span" className="error" />
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.File multiple={true} as="file" id="exampleFormControlFile1" name="fileupload" label="Photos Upload"
                                                onChange={(event) => {
                                                    event.preventDefault();
                                                    console.log('format1', event.target.files);
                                                    //let file = event.target.files[0];
                                                    //setpreviewimage(oldArray => [...oldArray, event.target.files[0]]);



                                                    //console.log('format2',["image/jpg","image/jpeg","image/gif","image/png"].indexOf(event.target.files[0].type));
                                                    // let reader = new FileReader();
                                                    //let file = event.target.files[0];
                                                    if (event.target.files[0] != undefined) {
                                                        setFieldValue("fileupload", event.target.files[0]);
                                                        let valuee = ["image/jpg", "image/jpeg", "image/gif", "image/png"].indexOf(event.target.files[0].type);
                                                        if (valuee != -1) {
                                                            setpreviewimage(oldArray => [...oldArray, event.target.files[0]])
                                                            console.log("previewimage", previewimage);
                                                        }
                                                    }

                                                }}
                                                onBlur={handleBlur} />
                                            <ErrorMessage name="fileupload" component="span" className="error" />
                                            <CarouselFn imagess={previewimage} setpreviewimage={setpreviewimage} />
                                        </Form.Group>

                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Property Address</Form.Label>
                                            <Field className="form-control" name="propaddress" as="textarea" rows={3} />
                                            <ErrorMessage name="propaddress" component="span" className="error" />
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Facilities (Ex:Parking available, Cauvery connection added) </Form.Label>
                                            <Field className="form-control" name="facilities" as="textarea" rows={3} />
                                            <ErrorMessage name="facilities" component="span" className="error" />
                                        </Form.Group>

                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Description (Property Measurement)</Form.Label>
                                            <Field className="form-control" name="description" as="textarea" rows={3} />
                                            <ErrorMessage name="description" component="span" className="error" />
                                        </Form.Group>



                                        <button variant="primary" type="submit">Submit</button>
                                    </Formm>
                                </div>
                            </Jumbotron>
                        </div>
                    </div>
                </section>)}
        </Formik>


        </ToastProvider>
        )



}

export default PostRental;