import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Tickets.css" //importing my css styling file

export const TicketList = ({ searchTermState }) => {
    const [tickets, setTickets] = useState([])
    //we dont want to modify the array of tickets we got from above, but we still want to display a list of filtered tickets.... so...
    //create another state variable for filtered tix
    const [filteredtickets, setFiltered] = useState([])
    //create another state variable for the emergency tix; by default, we don't want to see only emergency tix, so set useState to false
    const [emergency, setEmergency] = useState(false)
    //create another state variable for the open tickets
    //it's set to false, because we do not only want it to be the open tix on default
    const [openOnly, updateOpenOnly] = useState(false)


    //defining our current user
    const localHoneyUser = localStorage.getItem("honey_user")//getting hojney user obj from local storage
    const honeyUserObject = JSON.parse(localHoneyUser) //converting the string of the localHoneyUser to an object


    //import useNavigate and declare to variable 
    const navigate = useNavigate()

    //create a useEffect to search throught the list of tickets and filter based on the description
    useEffect(
        () => {
            const searchedTickets = tickets.filter(ticket => ticket.description.toLowerCase().startsWith(searchTermState.toLowerCase()))
            setFiltered(searchedTickets)
        },
        [searchTermState]
    )

    //create a useEffect to observe when the state of emergency changes
    useEffect(
        () => {
            if (emergency) {  //if emergency is true
                const emergencyTickets = tickets.filter(ticket => ticket.emergency === true) //filtering through the original ticket array to check if emergency evaluates to true; since it produces a new array, make sur to declare to a new variable. 
                setFiltered(emergencyTickets) //update the state variable to emergencyTickets
            }
            else {
                setFiltered(tickets) //setFiltered back to the origal tickets, which is showing all of them
            }
        },
        [emergency] //state being observed
    )

    //create a useEffect to fetch all the tickets
    useEffect(
        () => {
            fetch(`http://localhost:8088/serviceTickets`) // writing fetch statement and paste the link of the API we are fetching
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
            if (honeyUserObject.staff) { //checking if staff is true or false
                //for employees
                setFiltered(tickets) //we want to show all the tickets, so we are invoking the setFilteredTickets funciton and passing it the data from tickets. 
            }
            else {
                //for customers 
                const myTickets = tickets.filter(ticket => ticket.userId === honeyUserObject.id) //filtering the tickets to compare the id of the user with the honeyUser id
                setFiltered(myTickets) //invoking setfilteredTickets and passing it the info from myTickets, which is only the tickets matching the filtered condition
            }
        },
        [tickets]//this time we are watching for every time the ticket state variable changes
    )

    //create another useEffect to obseve the open only state
    useEffect(
        () => {
            if (openOnly) {
                const openTicketArray = tickets.filter(ticket => {
                    return ticket.userId === honeyUserObject.id && ticket.dateCompleted === ""
                })
                setFiltered(openTicketArray) //update setFiltered to the opentick array
            }
            else {
                const myTickets = tickets.filter(ticket => ticket.userId === honeyUserObject.id)
                setFiltered(myTickets)
            }

        },
        [openOnly] //watching the only only state var to change
    )

    //since we have now (above) invoked setFiltered, that changes the state of filteredtickets, so we have to use filtered tickets in the return statement below. 
    return (
        <>
            {
                honeyUserObject.staff //ternary statement evals to true or false
                    //this on click is a function; set the state of this function to true
                    //two items or more must have a parent (react fragment)
                    //if true of 1st setEmergency, invoke the button
                    //if false on 2nd setEmergency, invoke the button
                    //if false, nav to new route create ticket button
                    ? <>
                        <button onClick={() => { setEmergency(true) }} >Emergency</button>
                        <button onClick={() => { setEmergency(false) }} >Show all</button>
                    </>
                    : <>
                        <button onClick={() => navigate("/ticket/create")}>Create Ticket</button>
                        <button onClick={() => updateOpenOnly(true)}>Open Ticket</button>
                        <button onClick={() => updateOpenOnly(false)}>All My Tickets</button>
                    </>

                // : "" //if false, show nothing
            }

            <h2>List of Tickets</h2>
            <article className="tickets">
                {
                    filteredtickets.map(filteredticket => //iterate through filteredtickets with .map to make filteredtickets dynamic
                    //line 53 is interpolate filteredticket on line 27 and access the description, using dot notation; interpolating does not need $ in react
                    //line 56 is a condensed if else statement
                    {
                        return <section className="filteredticket">
                            <header>
                                {filteredticket.description}
                            </header>
                            <footer>
                                Emergency: {filteredticket.emergency ? "🆘" : "no"}
                            </footer>
                        </section>
                    }


                    )
                }
            </article>
        </>
    )
}

