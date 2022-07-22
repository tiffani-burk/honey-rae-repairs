// //create a component to display the details; we will neeed to _expand our object to a nested object that has the address and phone of each customer -
// //return the JSX (html rep) that displays name, email address and phone # of each customer

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

//create a component to display JSX of customer details
export const CustomerDetails = () => {

    //set an initial state variable to represent the customer and updated state
    //set up a useParams to return an object of params to match the URl
    //dont forget to add an object to the inital 
    const {customerId} =useParams()
    const [customer, updateCustomer] = useState({})
    
    
    //set up a useEffect to fetch the details on the customer and expland those details and turn then into an array 
    //watching the customerId state 
    useEffect(
        () => {
            fetch(`http://localhost:8088/customers?_expand=user&_embed=customerTickets&userId=${customerId}`)
            .then(response => response.json())
            .then((data) => {
                const singleCustomer = data[0]
                updateCustomer(singleCustomer)
            })
        }, 
        [customerId]
    )
    //return JSX that returns the name, address and phone of the customer 
return <section >
    <div><strong>Name: </strong>{customer?.user?.fullName} </div>
    <div><strong>Email: </strong>{customer?.user?.email} </div>
    <div><strong>Address: </strong> {customer?.address} </div>
    <div><strong>Phone: </strong> {customer?.phoneNumber}</div>
</section>


}

// //this componenet will be exported and imported+invoked and Routed into the Employee Views  