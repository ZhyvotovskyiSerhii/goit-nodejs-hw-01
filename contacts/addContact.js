const { v4 } = require('uuid');

const listContacts = require('./listContacts');
const updateContact = require('./updateContact');


const addContact = async(name, email, phone) => {
    const contacts = await listContacts();
    const newContact = { id: v4(), name, email, phone };
    const updateContacts = [...contacts, newContact];
    await updateContact(updateContacts);
    return newContact;
}

module.exports = addContact;