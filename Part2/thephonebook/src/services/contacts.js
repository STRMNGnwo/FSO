import axios from 'axios'

//this file is used for all network requests for the thephonebook.
const baseURL="http://localhost:3001/api/persons"
const getContacts=()=>{

    const request=axios.get(baseURL); //Promise stored in request variable.
    return request.then((response)=>{ return response.data}); //returns a promise, which returns data

}

const createContact=(newContact)=>{

    const request=axios.post(baseURL,newContact);

    return request.then((response)=>{ return response.data});
}

const updateContact=(updatedContact,id)=>{

    const url=`${baseURL}/${id}`
    const request=axios.put(url,updatedContact);

    return request.then((response)=>{return response.data});
}

const deleteContact=(contactToDelete)=>{

    const url=`${baseURL}/${contactToDelete}`;
    const request=axios.delete(url);

    return request.then((response)=>{return response.data});
}



export default {getContacts,createContact,updateContact,deleteContact}