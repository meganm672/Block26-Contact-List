import { useState } from 'react'
import './App.css'
import ContactList from './components/contactlist'
import SelectedContact from './components/selectedContact';
function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  return (
    <>
      {selectedContactId ? (
          <SelectedContact selectedContactId={selectedContactId} setSelctedContactId={setSelectedContactId}/>
        ) : (
          <ContactList setSelectedContactId={setSelectedContactId} />
        )}
    </>
  )
}

export default App
