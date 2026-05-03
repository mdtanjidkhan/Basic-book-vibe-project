import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { addReadlistToLocal, getAllReadListLocal } from "../components/Localstore/local";

export const BookContext = createContext();

const Bookprovider = ({ children }) => {

    const [storeBooks, setStoreBooks] = useState(() => getAllReadListLocal());

    //  Local Storage jonno


    const handleRead = (currentBook) => {
        // step 1. store book id or books object
        // step 2. where to store
        // step 3. array or collection 
        // step 4. if the book is already exist then show a alert or toast
        //  5. if not then add the book in the array or collection
        const isReadBook = storeBooks.find((book) => book.bookId === currentBook.bookId)

        if (isReadBook) {
            toast.error('The book is already Exist')
        } else {
            setStoreBooks([...storeBooks, currentBook])
            toast.success(`${currentBook.bookName} is add to read list.`)
        }
        console.log(currentBook, storeBooks, "book")

        // Local Storage jonno
        addReadlistToLocal(currentBook);
    }


    const [wishLists, setWishList] = useState([]);

    const handleWishList = (currentBook) => {
        // step 1. store book id or books object
        // step 2. where to store
        // step 3. array or collection 
        // step 4. if the book is already exist then show a alert or toast
        //  5. if not then add the book in the array or collection


        const isExistReadList = storeBooks.find((book) => book.bookId === currentBook.bookId);

        if (isExistReadList) {
            toast.error("This book is already in read list ?")
            return;
        }


        const isReadBook = wishLists.find((book) => book.bookId === currentBook.bookId)

        if (isReadBook) {
            toast.error('The book is already Exist')
        } else {
            setWishList([...wishLists, currentBook])
            toast.success(`${currentBook.bookName} is add to wish list.`)
        }
        console.log(currentBook, wishLists, "book")
    }

    const data = {
        storeBooks,
        setStoreBooks,
        handleRead,
        handleWishList,
        setWishList,
        wishLists,
    }
    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>;
};

export default Bookprovider;