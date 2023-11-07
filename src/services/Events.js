import axios from "axios";

// Constants
const API_URL = "http://13.215.177.151:8080/events";

export const getEvents = async () => {
    return await axios.get(API_URL, {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    });
}

export const getEvent = async(id) => {
    return await axios.get(API_URL + "/" + id, {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    });
}

export const createEvent = async (eventName, artists, dates, venue, venueCapacity) => {
    return await axios.post(API_URL + "/create", {
        eventName,
        artists,
        dates,
        venue,
        venueCapacity
    }, {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    });
}

export const updateEvent = async (id, eventName, artists, dates, venue, venueCapacity) => {
    return await axios.put(API_URL + "/" + id, {
        eventName,
        artists,
        dates,
        venue,
        venueCapacity
    }, {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    });
}

export const deleteEvent = async (id) => {
    return await axios.delete(API_URL + "/" + id, {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    });
}

export const openEventPreRegistration = async (id) => {
    return await axios.put(API_URL + "/" + id + "/open", {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    })
}

export const closeEventPreRegistration = async (id) => {
    return await axios.put(API_URL + "/" + id + "/close", {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    })
}

export const raffleEvent = async (id) => {
    return axios.put(API_URL + "/" + id + "/raffle", {
        header: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    })
}

