import axios from "axios";

const RECIPIENT_API_BASE_URL = "http://localhost:8080/api/v1/recipients";

class RecipientService {
  saveRecipient(recipient) {
    return axios.post(RECIPIENT_API_BASE_URL, recipient);
  }

  getRecipients() {
    return axios.get(RECIPIENT_API_BASE_URL);
  }

  deleteRecipient(id) {
    return axios.delete(RECIPIENT_API_BASE_URL + "/" + id);
  }

  getRecipientById(id) {
    return axios.get(RECIPIENT_API_BASE_URL + "/" + id);
  }

  updateRecipient(recipient, id) {
    return axios.put(RECIPIENT_API_BASE_URL + "/" + id, recipient);
  }
}

export default new RecipientService();
