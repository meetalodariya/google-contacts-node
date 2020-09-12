export const getFormattedContacts = (contacts) => {
  return contacts.map((contact: any) => {
    let email: any = { email: "" },
      name: any = { name: "" },
      photo: any = { photo: "" },
      phone: any = { phone: "" };
    if (contact.emailAddresses) {
      email = { email: contact.emailAddresses[0].value };
    }
    if (contact.phoneNumbers) {
      phone = { phone: contact.phoneNumbers[0].value };
    }
    if (contact.photos) {
      photo = { photo: contact.photos[0].url };
    }
    if (contact.names) {
      name = { name: contact.names[0].displayName };
    }
    return {
      ...email,
      ...phone,
      ...photo,
      ...name,
    };
  });
};
