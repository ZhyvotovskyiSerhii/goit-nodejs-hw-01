const listContacts = require("./listContacts");
const updateContact = require('./updateContact');

const removeContact = async(contactId) => {
    const contacts = await listContacts();
    const newContacts = contacts.filter(contact => contact.id !== Number(contactId));
    if (!newContacts) {
        return null;
    }
    await updateContact(newContacts);
    return true;
}

module.exports = removeContact;