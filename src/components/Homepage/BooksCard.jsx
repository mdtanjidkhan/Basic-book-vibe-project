import React from 'react';
import { FaRegStar } from 'react-icons/fa6';
import { Link } from 'react-router';

const BooksCard = ({ book }) => {
    return (
        <Link to={`/booksDetails/${book.bookId}`}>
            <div className="card bg-base-100 shadow-sm flex flex-col h-full">
                <figure className='p-6 bg-gray-200 shadow-xl rounded-md mx-5 my-5'>
                    <img
                        src={book.image}
                        alt="" className='h-[200px]' />
                </figure>
                <div className="card-body">
                        <div className='flex items-center gap-3'>
                            {book.tags.map((tag, i)=><div key={i}className="badge text-green-500 bg-green-200 font-bold">{tag}</div>)}
                        </div>
                    <h2 className="card-title font-bold text-2xl">
                        {book.bookName
                        }
                    </h2>
                    <p className='font-semibold text-xl'>{book.author }</p>
                   
                    <div className="card-actions justify-between border-t border-dashed border-gray-300 pt-4">
                        <div className="font-bold ">{book.category}

                          </div>
                        <div className="font-bold flex items-center gap-2">{book.rating}<FaRegStar></FaRegStar>
                       </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BooksCard;