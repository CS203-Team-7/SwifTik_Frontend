import axios from "axios";

// constants:
const API_URL = "http://localhost:8080/tickets";

export const getTickets = async () => {
    return await axios.get(API_URL, {
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origins': '*',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    });
}

export const getTicket = async (id) => {
    return await axios.get(API_URL + "/" + id, {
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origins': '*',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    });
}

export const purchaseTicket = async (id, zoneId) => {
    return await axios.put(API_URL + "/purchase/eventId=" + id + "/zoneId=" + zoneId, {
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origins': '*',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    })
}