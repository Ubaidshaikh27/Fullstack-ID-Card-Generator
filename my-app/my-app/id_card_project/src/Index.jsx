import { useEffect, useState } from 'react'
import './App.css'
import downloadjs from 'downloadjs';

import html2canvas from 'html2canvas'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';



function IdCard() {

  const [fname, setFname] = useState('Jhon')
  const [lname, setLname] = useState('Doe')
  const [position, setPosition] = useState('Software Engeenier')
  const [dept, setDept] = useState('HR')
  const [email, setEmail] = useState('abc@gmail.com')
  const [year, setYear] = useState('2020')
  const [image, setImage] = useState('https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png')
  const [number, setNumber] = useState(0);

  const apiUrl = 'http://localhost:3000/api/user'


 
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/table'); // Replace with your target route
  
    }


  function handleFnameChange(e) {
    setFname(e.target.value)
  }

  function handleLnameChange(e) {
    setLname(e.target.value)
  }

  function handlePositionChange(e) {
    setPosition(e.target.value)
  }

  function handleDeptChange(e) {
    setDept(e.target.value)
  }

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  function handleYearChange(e) {
    setYear(e.target.value)
  }


  function loadImage (e) {
    setImage(URL.createObjectURL(e.target.files[0]))
    
  }

// Print a specific div
function onPrint() {
    window.print();
}

// Generate an image of a div and Save as image
const handleDownloadImage = async () => {
  const canvas = await html2canvas(document.getElementsByClassName('id-card')[0]);
  const dataURL = canvas.toDataURL('image/png');
  downloadjs(dataURL, 'download.png', 'image/png');
};





  // Function to handle increment
  const incrementNumber = () => {
    setNumber((prevNumber) => prevNumber + 1);

  };

  // Format the number to always show 4 digits with leading zeros
  const idNumber = number.toString().padStart(4, '0');
  

  



  return (

    // -------------------Sending data to the Backend on Submit-------------------
    <div >
    <form action='POST' enctype="multipart/form-data" onSubmit={(async (e)=>{
        e.preventDefault()
    try {

      const response = await axios.post(apiUrl,{
        fname, lname, position, dept, email, year, idNumber, image
        
      })
      console.log(response);
      
      

    } catch (error) {
        console.log(error);      
      
    }
    
    })}>



        <div className="form-row">
            <div className="col-md-4 mb-3">
              <label >First name</label>
              <input type="text" onChange={handleFnameChange} className="form-control" id="fname" placeholder="First name"  required/>

            </div>

            <div className="col-md-4 mb-3">
              <label >Last name</label>
              <input type="text" onChange={handleLnameChange} className="form-control" id="lname" placeholder="Last name" required/>

              </div>

              
            <div className="md-4 mb-3 master">
                <label >Position </label>
                <input type="text" onChange={handlePositionChange} className="form-control" id="position" placeholder="Software Engeenier"  required/>

            </div>

            <div className="md-4 mb-3 master">
                <label >Department</label>
                <input type="text" onChange={handleDeptChange} className="form-control" id="dept" placeholder="Development"  required/>

            </div>

            <div className="md-4 mb-3 master">
                <label >Email</label>
                <input type="email" onChange={handleEmailChange} className="form-control" id="email" placeholder="Markotto@gmail.com"  required/>

            </div>

            
            <div className="md-4 mb-3 master">
                <label >Year of joining</label>
                <input type="input" onChange={handleYearChange} className="form-control" id="year" placeholder="year"  required/>

            </div>

            <div className="md-4 mb-3 master onimage">
                <input type="file" id="file" accept="image/*" onChange={loadImage} />

            </div>

            <div className="md-4 mb-3 submitBtn">
            <button type="submit" onClick={incrementNumber} className="btn btn-primary">Submit</button>

            </div>

            </div>

    </form>





<div className="id-card">
    <div className="id-card-header">
        <h2>Zoheb & Ubaid Company</h2>
        <p>Employee ID Card</p>
    </div>
    <div className="id-card-body">
        <div className="photo">
            <img src={image} alt="Profile Photo" />
        </div>
        <div className="details">
            <h3 >{fname} {lname}</h3>
            <p ><strong>ID:</strong> {idNumber}</p>
            <p ><strong>Position:</strong> {position}</p>
            <p ><strong>Department:</strong> {dept}</p>
            <p ><strong>Email:</strong> {email}</p>
            <p ><strong>Year of joining:</strong> {year}</p>
        </div>
    </div>
    <div className="id-card-footer">
        <p>&copy; 2024 Zoheb & Ubaid Company </p>
    </div>
</div>


<button className="btn btn-primary downl" onClick={onPrint}>Print</button> <a href='#' onClick={handleDownloadImage} className='btn btn-primary downl'>Download</a>  
{/* //Generate an image of a div and Save as image */}

<button className='btn btn-success navigateButton' onClick={handleNavigate}>
            See Employee Records
</button>

</div>


  )

}

export default IdCard
