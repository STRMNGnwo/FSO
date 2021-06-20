import axios from 'axios'

//this file is used for all network requests for the thephonebook.
const baseURL="http://localhost:3001/persons"
const getContacts=()=>{

    const request=axios.get(baseURL); //Promise stored in request variable.
    return request.then((response)=>{ return response.data}); //returns a promise, which returns data

}

const createContact=(newContact)=>{

    const request=axios.post(baseURL,newContact);

    return request.then((response)=>{ return response.data});
}

const updateContact=(updatedContact)=>{

    const request=axios.put(baseURL,updatedContact);

    return request.then((response)=>{return response.data});
}

export default {getContacts,createContact,updateContact}