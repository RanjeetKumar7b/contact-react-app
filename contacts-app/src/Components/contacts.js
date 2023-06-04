import React, { useState, useEffect } from 'react';

const ContactsApp = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = () => {
    // Replace this with your logic to fetch contacts from the phone's contact list
    // For the sake of demonstration, we'll use a dummy array of contacts
    const dummyContacts = [
      { name: 'John', number: '1234567890' },
      { name: 'Smith', number: '0987654321' },
      { name: 'Arjun', number: '9876543210' },
      { name: 'prashant', number: '6789012345' },
      { name: 'ranjeet', number: '1234567890' },
      { name: 'ayush', number: '0987654321' },
      { name: 'shyam', number: '9876543210' },
      { name: 'sidharth', number: '6789012345' },
      { name: 'vishal', number: '1234567890' },
      { name: 'devil', number: '0987654321' },
      { name: 'lucifer', number: '9876543210' },
      { name: 'nishant', number: '6789012345' },
      { name: 'raghu', number: '1234567890' },
      { name: 'akash', number: '0987654321' },
      { name: 'shushant', number: '9876543210' },
      { name: 'raghwendra', number: '6789012345' },

      // Add more contacts as needed
    ];

    setContacts(dummyContacts);
    setFilteredContacts(dummyContacts);
  };

  const searchContacts = (text) => {
    setSearchText(text);
    const filtered = contacts.filter((contact) =>
      contact.name.toLowerCase().startsWith(text.toLowerCase())
    );
    setFilteredContacts(filtered);
  };

  const openModal = (contact) => {
    setSelectedContact(contact);
  };

  const closeModal = () => {
    setSelectedContact(null);
  };

  return (
          <div>
    <div className="container">
      <input className="inp"
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={(e) => searchContacts(e.target.value)}
      />
      <table className="txt">
          <tr>
                    <th>Name</th>
                    <th>Contact Number</th>
          </tr>
          {filteredContacts.map((contact, index) => (
          <tr key={index} onClick={() => openModal(contact)}>
                    <td>
                    {contact.name}
                    </td>
                    <td>
                     {contact.number}
                    </td>
          </tr>
          ))}
      </table>
      </div>
      
      {selectedContact && (
        <div className="popup">
          <h3>{selectedContact.name}</h3>
          <p>{selectedContact.number}</p>
          <button id="btn" onClick={closeModal}>Close</button>
        </div>
      )}
    </div>
  );
};

export default ContactsApp;
