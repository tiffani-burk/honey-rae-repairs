//create a componenet that will return a list of customers, with their name address and phone #
import "./Customer.css"
import { Link } from "react-router-dom"

//this componenet accepts a single customer object as a prop, with the id, name, address and phone in it
export const Customer = ({ id, fullName }) => {
    return <section className="customer">
        <div className="customer-container"> <div><strong>Name: </strong>  {fullName} </div>
            <Link to={`/customers/${id}`}>
                View Customer Details
            </Link>


        </div>


    </section>
}

//This componenet will be exported and imported + invoked in the customerList component 