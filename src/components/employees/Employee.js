export const Employee = ({ id, fullName, email}) => {
    return <section className="employee" >
    <div><strong> Name:</strong> {fullName}</div>
    <div> <strong>Email: </strong> {email}</div>
</section>
}