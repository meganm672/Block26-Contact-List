

export default function ContactRow({ setSelectedContactId, contact }) {
    // console.log(contact,"checking contact prop in contactRow function", setSelectedContactId, "checking setSelectedContactId in setSelectedContactId function")
    return (
      <tr 
        onClick={() => { setSelectedContactId(contact.id)
      }}>
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
        <td>{contact.id}</td>
      </tr>
    );
  }