import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../context/Bookprovider";
import BooksCard from "../Homepage/BooksCard";
import { Link } from "react-router";

const ListedRead = ({ sorting }) => {

  const { storeBooks } = useContext(BookContext);
  // console.log(storeBooks, "wish book ok")
  // sorting jonno price low theke high or high thke low 
  const [filterReadList, setFilerReadList] = useState(storeBooks)
  useEffect(() => {
    if (sorting) {
      if (sorting === "pages") {
        const sortData = [...storeBooks].sort((a, b) => a.totalPages - b.totalPages);
        console.log(sortData)
        //  setFilerReadList(sortData)
      } else if (sorting === "rating") {
        const sortedData = [...storeBooks].sort((a, b) => a.rating - b.rating);
        // console.log(sortedData)
        setFilerReadList(sortedData)
      }
    }


  }, [sorting, storeBooks]);
  return (
    <div>
      {filterReadList.length === 0 ? <div className="h-[50vh] bg-gray-200 flex flex-col justify-center items-center sm:mx-5">
        <h2 className="font-bold text-2xl">No Read list a Data </h2>
        <Link to="/">
          <button className="mt-6 px-6 py-3 bg-white text-purple-600 font-semibold rounded-xl shadow-md hover:bg-purple-100 transition duration-300">
            Go Back Home
          </button>
        </Link>
      </div>
        : <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {
            filterReadList.map((book, i) => <BooksCard key={i} book={book}></BooksCard>)
          }
        </div>}
    </div>
  );
};

export default ListedRead;