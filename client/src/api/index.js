import axios from "axios";

// Contents
const contents = "http://localhost:5000/videos";

export const getAllContents = () => axios.get(contents);
export const getSingleContent = (id) => axios.get(`${contents}/${id}`);

// Support
const support = "http://localhost:5000/rewards";
export const getSingleSupport = (id) => axios.get(`${support}/${id}`);