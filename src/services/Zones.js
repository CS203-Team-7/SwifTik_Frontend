import axios from "axios";

const API_URL = "http://localhost:8080/events";

export const getZonesForEvent = async (id) => {
    return await axios.get(API_URL + "/" + id + "/zones", {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    });
}

export const createZone = async (id, zoneCapacity, zoneName, zoneDate, ticketPrice) => {
    return await axios.post(API_URL + "/" + id + "/createZone", {
        zoneCapacity,
        zoneName,
        zoneDate,
        ticketPrice
    }, {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    });
}

export const preRegister = async (email, id, zoneId) => {
    return await axios.put(API_URL + "/" + id + "/zone=" + zoneId + "/preRegister",{
        email
    },{
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    });
}