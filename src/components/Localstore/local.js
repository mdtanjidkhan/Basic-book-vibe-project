

const getAllReadListLocal = () => {
    const allreadList = localStorage.getItem('readList');
    if (allreadList) {
        return JSON.parse(allreadList);
    }
    return [];
}

const addReadlistToLocal = (book) => {
    const allBooks = getAllReadListLocal();
    const isAlreadyExist = allBooks.find((bk) => bk.bookId === book.bookId);
    if (!isAlreadyExist) {
        allBooks.push(book);
        localStorage.setItem("readList", JSON.stringify(allBooks));
    }
}

export { getAllReadListLocal, addReadlistToLocal }