import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Form} from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function LoginModal(props) {
    const [newregister,setnewRegisterstate] = useState(false); 

    const newUserFun = () =>{
        //alert();
        setnewRegisterstate(true);
    } 
    const formikExistuser = useFormik({
        initialValues:{email:'',password:''},
        validationSchema: Yup.object({
                email:Yup.string().email('Invalid email address').required('Required'),
                password: Yup.string().min(8,'Must be minimum 8 charactors').required('Required')
        }) ,
        onSubmit: (values,{setSubmitting,resetForm})=>{
            setTimeout(()=>{
             alert('Existing user data'+JSON.stringify(values, null, 2));
             setSubmitting(false);
             console.log('props',props);
             props.onHide();
             resetForm();
             setnewRegisterstate(false);

            },400)
          }
   });

const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;


phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
   const formikNewuser = useFormik({
    initialValues:{email:'',password:'',phoneno:''},
    validationSchema: Yup.object({
            email:Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().min(8,'Must be minimum 8 charactors').required('Required'),
            phoneno: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Required')
    }) ,
    onSubmit: (values,{setSubmitting,resetForm })=>{
        setTimeout(()=>{
         alert('new user data'+JSON.stringify(values, null, 2));
         setSubmitting(false);
         props.onHide();
         resetForm();
         setnewRegisterstate(false);

        },400)
      }
});
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       
        
               { !newregister && <Form onSubmit={formikExistuser.handleSubmit} >
                   <Form.Group controlId="formBasicEmail">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control type="email" 
                                name="email"
                                onChange={formikExistuser.handleChange}
                                onBlur={formikExistuser.handleBlur}
                                value={formikExistuser.values.email}
                                placeholder="Enter email"
                            />
                        {formikExistuser.errors.email ? <div style={{"color":"red"}}>{formikExistuser.errors.email}</div> : null}
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="password" 
                         name="password"
                         onChange={formikExistuser.handleChange}
                         onBlur={formikExistuser.handleBlur}
                         value={formikExistuser.values.password}
                         placeholder="Password"
                   />
                   {formikExistuser.errors.password ? <div style={{"color":"red"}}> {formikExistuser.errors.password} </div> : null}
                   </Form.Group>
                    <div class="row">
                        <div className="col-lg-6"><Button   type="submit" disabled={formikExistuser.isSubmitting}>Submit</Button ></div>
                        <div className="col-lg-6 text-right" onClick={newUserFun}><a href="#" >New Users Registrations</a></div>
                    </div>
               </Form>
               }
               {newregister && <Form onSubmit={formikNewuser.handleSubmit} >
                   <Form.Group controlId="formBasicEmail">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control type="email" 
                                name="email"
                                onChange={formikNewuser.handleChange}
                                onBlur={formikNewuser.handleBlur}
                                value={formikNewuser.values.email}
                                placeholder="Enter email"
                            />
                        {formikNewuser.errors.email ? <div style={{"color":"red"}}>{formikNewuser.errors.email}</div> : null}
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="password" 
                         name="password"
                         onChange={formikNewuser.handleChange}
                         onBlur={formikNewuser.handleBlur}
                         value={formikNewuser.values.password}
                         placeholder="Password"
                   />
                   {formikNewuser.errors.password ? <div style={{"color":"red"}}> {formikNewuser.errors.password} </div> : null}
                   </Form.Group>
                   <Form.Group controlId="formBasicEmail">
                        <Form.Control type="phoneno" 
                         name="phoneno"
                         onChange={formikNewuser.handleChange}
                         onBlur={formikNewuser.handleBlur}
                         value={formikNewuser.values.phoneno}
                         placeholder="contact number"
                   />
                   {formikNewuser.errors.phoneno ? <div style={{"color":"red"}}> {formikNewuser.errors.phoneno} </div> : null}
                   </Form.Group>
                    <div class="row">
                        <div className="col-lg-6"><Button   type="submit" disabled={formikNewuser.isSubmitting}>Submit</Button ></div>
                        <div className="col-lg-6 text-right" onClick={newUserFun}><a href="#" >New Users Registrations</a></div>
                    </div>
               </Form>}
        
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LoginModal;