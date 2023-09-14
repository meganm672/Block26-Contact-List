import {useState, useEffect} from 'react'

export default function SelectedContact({selectedContactId, setSelctedContactId}){
   const [contact,setContact] = useState(null);
   
   console.log(selectedContactId,"is selectedContactId firing")

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
//    console.log(contact, "this is supposed to be a contact");
   return(
    <div>
        {contact ? (
          <div>
                <p>{contact.name}</p>
                <button onClick={(()=> setSelctedContactId(null))}> Back</button>
          </div>
        ) : (
          <p>No contact found!</p>
        )}
    </div>
   );
}