import axios from "axios";

// constants:
const API_URL = "http://13.215.177.151:8080/tickets";

export const getTickets = async () => {
    return await axios.get(API_URL, {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    });
}

export const getTicket = async (id) => {
    return await axios.get(API_URL + "/" + id, {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    });
}

export const purchaseTicket = async (id, zoneId) => {
    return await axios.put(API_URL + "/purchase/eventId=" + id + "/zoneId=" + zoneId, {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    })
}