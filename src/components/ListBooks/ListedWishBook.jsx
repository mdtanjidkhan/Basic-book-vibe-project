import { useContext, useState } from "react";
import { BookContext } from "../../context/Bookprovider";
import BooksCard from "../Homepage/BooksCard";
import { Link } from "react-router";

const ListedWishBook = ({ sorting }) => {
    const { wishLists } = useContext(BookContext);

    const [filterWishList, setFilerWishList] = useState(wishLists)

    useEffect(() => {
        if (sorting) {
            if (sorting === "pages") {
                const sortData = [...wishLists].sort((a, b) => a.totalPages - b.totalPages);
                console.log(sortData)
                //  setFilerReadList(sortData)
            } else if (sorting === "rating") {
                const sortedData = [...wishLists].sort((a, b) => a.rating - b.rating);
                // console.log(sortedData)
                setFilerWishList(sortedData)
            }
        }


    }, [sorting, wishLists]);

    return (
        <div>
            {filterWishList.length === 0 ? <div className="h-[50vh] bg-gray-200 flex flex-col justify-center items-center">
                <h2 className="font-bold text-2xl">No Wish list Data </h2>
                <Link to="/">
                    <button className="mt-6 px-6 py-3 bg-white text-purple-600 font-semibold rounded-xl shadow-md hover:bg-purple-100 transition duration-300">
                        Go Back Home
                    </button>
                </Link>
            </div>
                : <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        filterWishList.map((book, i) => <BooksCard key={i} book={book}></BooksCard>)
                    }
                </div>}
        </div>
    );
};

export default ListedWishBook;