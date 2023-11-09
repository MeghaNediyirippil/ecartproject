import React, { useState } from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';
import { useParams } from 'react-router-dom';


function Products() {

    const [tokenpass, setTokenpass] = useState('')

    const storedToken = localStorage.getItem("authToken");
    //     const {token}=useParams()
    //   console.log(token);  // particular token
    // const {token}=useParams()
    console.log(storedToken);
    setTokenpass(storedToken)
    console.log(tokenpass);


    //   setTokenpass(token)
    //   console.log(tokenpass);


    const url = 'https://api.denzo.io/api/cus/v1/products?page=1';

    const headers = {
        'Accept': 'application/json',
        'Authorization': tokenpass,
    };

    // fetch(url, {
    //     method: 'GET',
    //     headers: headers,
    // })
    //     .then(response => response.json())
    //     .then(data => {
    //         // Handle the data here
    //         console.log(data);
    //     })
    //     .catch(error => {
    //         // Handle errors here
    //         console.error('Error:', error);
    //     });







    return (
        <div style={{ width: '400px' }}>
            <MDBCard>
                <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
                <MDBCardBody>
                    <MDBCardTitle>Product Name:</MDBCardTitle>
                    <MDBCardText>
                        Product Description
                    </MDBCardText>
                    <MDBBtn href='#'>Buy</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </div>
    )
}

export default Products