import React, { useState, useEffect } from 'react';


const Formdata = (props) => {


  console.log('propsprops', props.setForm)



  const [stateF, setStateF] = React.useState({
    _id: "",
    Name: "",
    City: "",
    Age: "",
    isEdit: false
  })


  //componentwillrecive props
  useEffect(() => {
    if (props.setForm._id != null) {
      setStateF({
        ...stateF,
        _id: props.setForm._id,
        Name: props.setForm.Name,
        City: props.setForm.City,
        Age: props.setForm.Age,
        isEdit: true
      })

    }


  }, [props.setForm])


  const handleChange = (e) => {
    const { name, value } = e.target;
    setStateF({
      ...stateF,
      [name]: value
    })
  }

  const thisformsubmit = (e, v) => {


    if (!stateF.isEdit) {
      //e.preventDefault();
      setStateF({//create
        ...stateF,
        Name: props.setForm.Name,
        City: props.setForm.City,
        Age: props.setForm.Age,
        isEdit: props.setForm.isEdit
      });
      props.myData(stateF);
    }
    else {//Edit
      //e.preventDefault();
      setStateF({
        ...stateF,
        _id: props.setForm._id,
        Name: props.setForm.Name,
        City: props.setForm.City,
        Age: props.setForm.Age,
        isEdit: props.setForm.isEdit
      });
      props.myData(stateF);
    }



  }

  return (
    <div>
      <form onSubmit={thisformsubmit} autocomplete="off">
        <div className="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input type="text" className="form-control" placeholder="Name"
            onChange={handleChange}
            name="Name"
            value={stateF.Name}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">City</label>
          <input type="text" className="form-control" placeholder="City"
            onChange={handleChange}
            name="City"
            value={stateF.City} />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Age</label>
          <input type="text" className="form-control" placeholder="Age"
            onChange={handleChange}
            name="Age"
            value={stateF.Age} />
        </div>
        <button type="submit" className="btn btn-primary" >{stateF.isEdit ? 'Update' : 'Create'}</button>
      </form>
    </div>
  )


}

export default Formdata;