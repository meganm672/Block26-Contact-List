import {useState, useEffect} from 'react'

export default function SelectedContact({selectedContactId, setSelctedContactId}){
   const [contact,setContact] = useState(null);
   
   useEffect(() => {
    async function fetchContact(){
        try{
           const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
           const result = await response.json();
           setContact(result);
           console.log(result)
        }catch(e){
            console.error(e)
        }
    }
    fetchContact()
},[])
   return(
    <div>
        {contact ? (
          <div className='selectContact'>
                <h2>{contact.name}</h2>
                <ul>
                    <li>Email: {contact.email}</li>
                    <li>Phone: {contact.phone}</li>
                    <li>Street:{contact.address.street}</li>
                    <li>Suite: {contact.address.suite}</li>
                    <li>City: {contact.address.city}</li>
                    <li>Zipcode: {contact.address.zipcode}</li>
                    <li>Company: {contact.company.name}</li>
                </ul>
                <button onClick={(()=> setSelctedContactId(null))}>Back</button>
          </div>
        ) : (
          <p>No contact found!</p>
        )}
    </div>
   );
}