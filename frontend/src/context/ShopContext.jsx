import { createContext } from "react";
import { products } from "../assets/assets";
import {useState} from 'react';
// using useContext to make value attribute accesible in all components
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(true);

    const value = {
        products , currency , delivery_fee,
        search, setSearch, showSearch, setShowSearch
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;