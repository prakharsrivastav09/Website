import React, {useEffect , useState} from "react";

const App = () => {
    const [arr, setArr] = useState([]);
    let api = "https://dummyjson.com/products";
    const fetchApi = async(url) => {
        try
        const response = await fetch(url);
        const data = await reponse()
    }
}