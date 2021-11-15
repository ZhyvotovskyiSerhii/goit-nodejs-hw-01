const path = require("path");
const fs = require('fs/promises')
const contactsPath = path.join(__dirname, "../db/contacts.json");

const contacts = require(contactsPath)

const updateContact = async (contacts) => {
        await fs.writeFile(contactsPath,JSON.stringify(contacts))
}


module.exports = updateContact;