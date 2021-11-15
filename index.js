const { program } = require("commander");
const { addContact,
        getContactById,
        listContacts,
        removeContact} = require("./contacts");

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);
const argv = program.opts();


(async() => {
    const { action, id, name, email, phone } = argv;
    switch (action) {
        case 'list':
          console.log(await listContacts())  
            break;
        case 'get':
            const contact = await getContactById(id);
            if (!contact) {
                console.log(`Контакт с ${id} не найден.Введите корректный id контакта`);
                break;
            }
            console.log(contact)
      break;
        case 'add':
            if (!name || !email || !phone) {
                console.log("Укажите пожалуста name, email, phone");
                 break;
            }
           console.log(await addContact(name, email, phone))
            break;
        case 'remove':
            const removeContacts = await removeContact(id);
            if (!removeContacts) {
                console.log(`Контакт с ${id} не найден.Введите корректный id для удаления контакта`);
                break;
            }
            console.log(removeContacts)
            break;
    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}
)()

