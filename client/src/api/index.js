import axios from "axios";

const contents = "http://localhost:5000/videos";

export const getAllContents = () => axios.get(contents);

// `${videos}/${id}`