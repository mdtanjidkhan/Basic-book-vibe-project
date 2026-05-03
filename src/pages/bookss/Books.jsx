
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedRead from "../../components/ListBooks/ListedRead";
import ListedWishBook from "../../components/ListBooks/ListedWishBook";
import { useState } from 'react';

const Books = () => {
  
    const [sorting, setSorting] = useState("");
     console.log(sorting,'setSorting')
    return (
        <div className="w-11/12 mx-auto my-5">

            <div className="flex justify-end mx-5">
                <div className="dropdown dropdown-start">
  <div tabIndex={0} role="button" className="btn m-1">Click ⬇️</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-35 p-2 shadow-sm">
    <li onClick={()=>setSorting("pages")}><a>Pages</a></li>
    <li onClick={()=> setSorting('rating')}><a>Rating</a></li>
  </ul>
</div>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                   <ListedRead sorting={sorting}></ListedRead>
                </TabPanel>
                <TabPanel>
                   <ListedWishBook sorting={sorting}></ListedWishBook>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Books;