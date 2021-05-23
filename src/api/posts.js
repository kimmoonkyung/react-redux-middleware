import axios from 'axios';

// npx json-server ./data.json --port 4000

export const getPosts = async () => {
    const response = await axios.get('http://localhost:4000/posts');
    return response.data;
};

export const getPostById = async (id) => {
    const response = await axios.get(`http://localhost:4000/posts/${id}`);
    return response.data;
};
