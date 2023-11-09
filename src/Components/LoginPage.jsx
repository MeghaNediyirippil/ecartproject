import React, { useEffect, useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
// import axios
import axios from 'axios'
import { Link } from 'react-router-dom';



function LoginPage() {


  const url = 'https://api.denzo.io/api/cus/v1/login';
  const [data, setData] = useState([])
  const [token, setToken] = useState('')

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/x-www-form-urlencoded', // Adjust this based on the API requirements
};

const body = new URLSearchParams({
  'username': '+918086808680',
  'password': '123456',
  'store_id': '10',
});

fetch(url, {
  method: 'POST',
  headers: headers,
  body: body,
})
  .then(response => response.json())
  .then(data => {
    // Handle the data here

    console.log(data);
    console.log(data.token);
    setToken(data.token)
    console.log(token);
  })
  .catch(error => {
    // Handle errors here
    console.error('Error:', error);
  });
  localStorage.setItem("authToken", token);

  // const [login,setLogin]=useState([])

  // const fetchData=async()=>{
  //   const response=await axios.get('https://api.denzo.io/api/cus/v1/products?page=1')
  //   console.log(response)   //array of data
  //   // setLogin(response.)
  // }
  // // console.log(login);  //array of data

  // useEffect(()=>{
  //   fetchData()
  // },[])

  return (
    
    <div className='main' style={{ margin: '100px' }}>
      <div className='Form' style={{ width: '400px', marginLeft: '500px' }}>
        <MDBInput label='User Name' id='form1' type='text' />
        <br />
        <MDBInput label='Password' id='form1' type='text' />
        <br />
        <Link to={'products/'+token}>
        <MDBBtn>LOGIN</MDBBtn>
        </Link>
      </div>

    </div>
      
  )
}

export default LoginPage