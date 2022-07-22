//create a text input box as a search field
//add a div to seperate it from the buttons


export const TicketSearch = ({ setterFunction }) => {
    return (
        <div > 
        <input className="search-box"
        onChange={
            (changeEvent) => {
                setterFunction(changeEvent.target.value)
            }
        }
        
        type="text" placeholder="Enter search terms" />
        </div>
    )
}