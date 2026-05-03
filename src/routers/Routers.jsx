import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePages from "../pages/homepages/HomePages";
import Books from "../pages/bookss/Books";
import ErrorPage from "../pages/errorPage/ErrorPage";
import BooksDetails from "../pages/BookDetails/BooksDetails";
import PageToRead from "../components/PageToRead/PageToRead";


 export const router = createBrowserRouter([
   {
    path:"/",
    Component: MainLayout,
    children:[
      {index:true, Component:HomePages,
      },
      {
        path:"/books",
       Component:Books,
      },
      {
        path:"/booksDetails/:bookId",
        Component:BooksDetails,
        loader:()=>fetch("/booksData.json"),
      },
     {
      path:"/page to read",
      Component:PageToRead,
     }
    ],
   errorElement: <ErrorPage></ErrorPage>
   },
  
   
])
