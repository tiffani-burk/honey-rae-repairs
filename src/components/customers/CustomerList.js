//create a component to display a list of customers 
//this component will be displayed to the employees only, in the employeeViews mod

import { useEffect, useState } from "react"
import { Customer } from "./Customer"
import "./Customer.css"

//dont forget, since the fetch is returning an array, make sure there is an empty array in the useState
export const Customerlist = () => {
    //set initial state variable 
    const [customers, setCustomers] = useState([])

    //create a useEffect to watch for setCustomers to change and pass it the data fetched from our API database
    //start with fetching the data from the users, showing which users are customers (isStaff=false)
    useEffect(
        () => {
            fetch(`http://localhost:8088/users?isStaff=false`) 
            .then(response => response.json())
            .then((customerArray) => {
                setCustomers(customerArray)
            })
        },
         []
    )
//return the JSX (html rep) that displays name, address and phone # of each customer
//use .map to loop through the above array of customers, which is is being stored to the "customers" variable
//dont forget to add a fragment (parent) if there are multiple JSX items being returned
//dont forget to add a unique react key, since we are iterating with .map
//we are passing each object (key, id, fullName, ect) to Customer as a prop

return <>
<h3>Customer List:</h3>
    <article className="customers-list">
        {
            customers.map(customer => <Customer key={`customer--${customer.id}`}
                id={customer.id}
                fullName={customer.fullName} 
                address={customer.address}
                phoneNumber={customer.phoneNumber}  />)
        }
    </article>
    </>
}
//fix JSX: should ivoke the Customer Details componenet in the JSX, after looping through the array of customers
//after creating this CustomerList component, export it and import it into EmployeeViews and set up a Route for it
//since address and phone are not on the database under user, we create another componenet called CustomerDetails and expand on our user dets
