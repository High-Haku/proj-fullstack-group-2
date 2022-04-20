import axios from "axios";

const contents = "http://localhost:5000/videos";

export const getAllContents = () => axios.get(contents);
export const getSingleContent = (id) => axios.get(`${contents}/${id}`);

// `${videos}/${id}`