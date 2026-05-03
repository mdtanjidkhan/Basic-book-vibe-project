

import { useContext } from 'react';
import { useLoaderData } from 'react-router';
import { useParams } from 'react-router';
import { BookContext } from '../../context/Bookprovider';

const BooksDetails = () => {
    const { bookId } = useParams();
    const books = useLoaderData();
    // console.log(books)

    const expectedBook = books.find((book) => book.bookId == bookId);
    // console.log(expectedBook)
    const { bookName, author, review, totalPages, publisher, rating, yearOfPublishing, category } = expectedBook;

    const { handleRead, handleWishList } = useContext(BookContext)
    //    console.log(booksContext)

    return (
        <div>

            <div className=" grid flex-col-reverse md:grid-cols-2 card lg:card-side bg-base-100 shadow-sm w-11/12 mx-auto mt-4">
                <figure className='flex justify-center items-center p-10 bg-gray-200 shadow-md rounded-md mx-5 my-5'>
                    <img
                        src={expectedBook.image}
                        alt="books" className='h-[400px] w-[400px]' />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{bookName}</h2>
                    <p className='font-semibold text-xl'>By: {author}</p>
                    <p className='font-bold text-xl py-2 border-y'>{category}</p>
                    <p className='text-gray-400 font-medium'><span className='font-bold text-xl text-black'>Review:</span> {review}</p>
                    <div className='flex items-center gap-3 pt-2'>
                        {expectedBook.tags.map((tag, i) => <div key={i} className="badge text-green-500 bg-green-200 font-bold">{tag}</div>)}
                    </div>
                    <div className='flex items-center gap-5 border-t mt-3'>
                        <span className='font-bold'>Number of Pagess:</span> <span className='font-bold'>{totalPages}</span>
                    </div>
                    <div className='flex items-center gap-5 mt-2'>
                        <span className='font-bold'>Publisher:</span>{publisher} <span className='font-bold'>{totalPages}</span>
                    </div>
                    <div className='flex  items-center gap-5 mt-2'>
                        <span className='font-bold'>Year of Publishing:</span> <span className='font-bold'>{yearOfPublishing}</span>
                    </div>
                    <div className='flex items-center gap-5 mt-2'>
                        <span className='font-bold'>Rating</span> <span className='font-bold'>{rating}</span>
                    </div>
                    <div className="card-actions gap-4 mt-3">
                        <button onClick={() => handleRead(expectedBook)} className='btn bg-white text-black font-bold p-3 birder border-gray-400'>Read</button>
                        <button onClick={() => handleWishList(expectedBook)} className="btn btn-primary">Wishlist</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BooksDetails;