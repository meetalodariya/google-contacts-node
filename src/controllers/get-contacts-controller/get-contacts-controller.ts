import { google } from "googleapis";
import { getAuthenticatedClient } from "../../utils/oauth2";
import { getFormattedContacts } from "./get-contacts-format";

const getContactsController = async (req, res, next) => {
  try {
    const oauth2Client = await getAuthenticatedClient(req.user.token);
    const service = google.people({
      version: "v1",
      auth: oauth2Client,
    });
    const fetchedContacts = await service.people.connections.list({
      pageSize: 300,
      auth: oauth2Client,
      resourceName: "people/me",
      personFields: "names,emailAddresses,photos,phoneNumbers",
    });

    const mappedContacts = getFormattedContacts(
      fetchedContacts.data.connections
    );
    return res.json({ contacts: mappedContacts });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export { getContactsController };
