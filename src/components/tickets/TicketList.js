import { useEffect, useState } from "react"
import "./Tickets.css" //importing my css styling file

export const TicketList = () => {
    const [tickets, setTickets] = useState([])
    //we dont want to modify the array of tickets we got from above, but we still want to display a list of filtered tickets.... so...
    //create another state variable for filtered tix
    const [filteredtickets, setFiltered] = useState([])

    const localHoneyUser = localStorage.getItem("honey_user")//getting hojney user obj from local storage
    const honeyUserObject = JSON.parse(localHoneyUser) //converting the string of the localHoneyUser to an object

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

    //create another useEffect to observe the ticket state
    useEffect(
        () => {
            //checking if the current user is an employee or customer
            if(honeyUserObject.staff) { //checking if staff is true or false
                //for employees
                setFiltered(tickets) //we want to show all the tickets, so we are invoking the setFilteredTickets funciton and passing it the data from tickets. 
            }
            else{
                //for customers 
                const myTickets = tickets.filter(ticket => ticket.userId === honeyUserObject.id) //filtering the tickets to compare the id of the user with the honeyUser id
                setFiltered(myTickets) //invoking setfilteredTickets and passing it the info from myTickets, which is only the tickets matching the filtered condition
                 }
        },
        [tickets]//this time we are watching for every time the ticket state variable changes
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
