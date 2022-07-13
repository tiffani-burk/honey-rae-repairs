import { useEffect, useState } from "react"
import "./Tickets.css" //importing my css styling file

export const TicketList = () => {
    const [tickets, setTickets] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/serviceTickets`) // writing fetch statement and paste the link to the API we are fetching
           .then(response => response.json()) //invokes the json function on the data received from the fetch
           .then((ticketArray) => { //add parameter to pass data to setTickets
            setTickets(ticketArray) //invoke setTickets and pass it the new desired value
           })
        },
        [] // When this array is empty, you are observing initial component state; dependency array; useEffect watches this array
    )
    return (
    <>
    <h2>List of Tickets</h2>
    <article className="tickets">

    {//iterate through tickets with .map to make tickets dynamic
    //interpolate ticket on line 27 and access the description, using dot notation; interpolating does not need $ in react
    //line 31 is a condensed if else statement
        tickets.map(ticket =>
            {
                return <section className="ticket">
                    <header> 
                    {ticket.description} 
                    </header>
                    <footer>
                    Emergency: {ticket.emergency ? "🆘" : "no"} 
                    </footer>
                </section>
            }
            
            
        ) 
    }




    </article>
    </>
    
    
    ) 
}
