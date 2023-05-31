const fs = require('fs/promises')
const path = require("path");
const { nanoid } = require("nanoid");


const contactsPath = path.join(__dirname, "contacts.json");

const listContacts = async () => {
  
  try {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
    
  }
}

const getContactById = async (contactId) => {
  
   try {
    const contacts = await listContacts();
    const result = contacts.find((item) => item.id === contactId);
    return result || null;
  } catch (error) {
    console.log(error);
  }
}

const removeContact = async (contactId) => {
  //  const contacts = await listContacts();
  //   const index = contacts.findIndex(item => item.id === contactId);
  //   if (index === -1) {
  //       return null;
  //   }
  //   const [result] = contacts.splice(index, 1);
  //   await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  //   return result;

  try {
    const contacts = await listContacts();
    const index = contacts.findIndex((item) => item.id === contactId);
    if (index === -1) {
      return;
    }
    const [result] = contacts.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return result;
  } catch (error) {
    console.log(error);
  }
}

const addContact = async (body) => {
  
    try {
    const contacts = await listContacts();
    const newContact = {
      ...body,
      id: nanoid(),
    };
    const contactsData = [...contacts, newContact];
    await fs.writeFile(contactsPath, JSON.stringify(contactsData, null, 2));
    return newContact;
  } catch (error) {
    console.log(error);
  }
}

const updateContact = async (contactId, body) => {
  // try {
  //   const contacts = await listContacts();
  //   const index = contacts.findIndex((item) => item.id === contactId);
  //   if (index === -1) {
  //     return;
  //   }
  //   contacts[index] = { ...body, id: contactId };
  //   await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  //   return contacts[index];
  // } catch (error) {
  //   console.log(error);
  // }

    // const contactId = String(id);
  const contacts = await listContacts();
  const index = contacts.findIndex((item) => item.id === contactId);
  if (index === -1) {
    return null;
  }

  contacts[index] = { contactId, ...body };

   await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

  return contacts[index];
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
