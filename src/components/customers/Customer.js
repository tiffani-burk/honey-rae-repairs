//create a componenet that will return a list of customers, with their name address and phone #

import { Link } from "react-router-dom"

//this componenet accepts a single customer object as a prop, with the id, name, address and phone in it
export const Customer = ({ id, fullName, address, phoneNumber }) => {
    return <section className="customer">
    <div>
        <Link to={`/customers/${id}`}>
            Name: {fullName}
            <button>View Details</button>
            </Link>
       
        
    </div>


</section>
}

//This componenet will be exported and imported + invoked in the customerList component 