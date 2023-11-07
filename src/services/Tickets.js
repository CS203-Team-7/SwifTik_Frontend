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

export const purchaseTicket = async (email, id, zoneId) => {
    return await axios.post(API_URL + "/purchase/eventId=" + id + "/zoneId=" + zoneId, {
        email
    },{
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    })
}

export const getTicketByUser = async (email) => {
    return await axios.get(API_URL + "/user/" + email, 
    {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    })
}