import React from 'react';
import { use } from 'react';
import BooksCard from './BooksCard';
const booksPromise = fetch('/booksData.json')
.then(res=>res.json())
const Allbooks = () => {
    const books = use(booksPromise);
    // console.log(books)
    return (
        <div className='w-11/12 mx-auto my-12'>
            <h2 className='font-bold text-2xl text-center text-black'>Books</h2>

              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-7'>
                {
                    books.map(book=><BooksCard key={book.bookId} book={book}></BooksCard>)
                }
              </div>
        </div>
    );
};

export default Allbooks;