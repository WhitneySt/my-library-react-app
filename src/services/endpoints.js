const URL_BASE = "http://localhost:3000/";

const endpoints = {
    books: `${URL_BASE}library`,
    bookById: (id) => `${URL_BASE}library/${id}`,
    bookByTitle: (title) => `${URL_BASE}library?title=${title}`,
    userByEmailAndPass: (email, password) => `${URL_BASE}users?email=${email}&password=${password}`,
    users: `${URL_BASE}users`
}

export default endpoints;