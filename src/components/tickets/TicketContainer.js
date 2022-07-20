//this componenet will contain the ticket list and ticket search, so they can communicate with each other
//2 sibling componenets (tickelList and ticketSearch) cannot talk to each other without a parent

import { useState } from "react"
import { TicketList } from "./TicketList"
import { TicketSearch } from "./TicketSearch"

export const TicketContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
    <TicketSearch setterFunction={setSearchTerms} />
    <TicketList searchTermState={searchTerms} /> 
    </>
}