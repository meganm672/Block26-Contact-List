import {useState,useEffect} from 'react'

export default function SelectedContact({selectedContactId, setSelctedContactId}){
   const [contact,setContact] = useState(null);

   useEffect(() => {
    async function fetchContact(){
        try{
            const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
            const data = await response.json();
            console.log(data);
            setContact(data);
        }catch (e){
            console.error(e)
        }
    }
    fetchContact();
   },[])
   return(
    <div>
        <h2>{contact.name}</h2>
        <button></button>
    </div>
   );
}