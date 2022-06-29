import axios from "axios";

// Contents
const contents = "https://pitchpls.herokuapp.com/videos";

export const getAllContents = () => axios.get(contents);
export const getSingleContent = (id) => axios.get(`${contents}/${id}`);

// Support
const support = "https://pitchpls.herokuapp.com/rewards";
export const getSingleSupport = (id) => axios.get(`${support}/${id}`);