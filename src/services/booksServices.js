import axios from "axios";
import endpoints from "./endpoints";

export const getBooks = async () => {
    try {
        const { data } = await axios.get(endpoints.books);
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const getABook = async (bookId) => {
    try {
        const { data } = await axios.get(endpoints.bookById(bookId));
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}