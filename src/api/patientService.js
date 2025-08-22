import axios from 'axios';
const API_URL = 'https://fedskillstest.coalitiontechnologies.workers.dev';
const USERNAME = 'coalition';
const PASSWORD = 'skills-test';
const fetchPatientData = async () => {
    const response = await axios.get(API_URL, {
        headers: {
            'Authorization': 'Basic ' + btoa(`${USERNAME}:${PASSWORD}`),
        },
    });
    return response.data;
};
export default fetchPatientData;