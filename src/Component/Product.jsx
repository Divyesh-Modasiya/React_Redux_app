import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Product() {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOrder, setSortOrder] = useState(null); // null, 'asc', or 'desc'

    useEffect(() => {
        const dataFetch = async () => {
            try {
                let response = await fetch('https://fakestoreapi.com/products');
                let jsonData = await response.json();
                setData(jsonData);
            } catch (err) {
                console.log(err);
            }
        };
        dataFetch();
    }, []);

    const AddCart = (item) => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(item);
        localStorage.setItem("cart", JSON.stringify(cart));
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSort = (order) => {
        setSortOrder(order);
    };

    const filteredData = data.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const sortedData = filteredData.sort((a, b) => {
        if (sortOrder === 'asc') {
            return a.price - b.price;
        } else if (sortOrder === 'desc') {
            return b.price - a.price;
        } else {
            return 0;
        }
    });

    return (
        <>
            <div className="controls w-full flex justify-center my-4">
                <input
                    type="text"
                    placeholder="Search by title..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="p-2 border border-gray-400 rounded mr-4 outline-none"
                />
                <button
                    onClick={() => handleSort('asc')}
                    className="p-2 border border-gray-400 rounded mr-4"
                >
                    Sort by Price: Ascending
                </button>
                <button
                    onClick={() => handleSort('desc')}
                    className="p-2 border border-gray-400 rounded"
                >
                    Sort by Price: Descending
                </button>
            </div>
            <div className="mainBox flex flex-wrap justify-evenly">
                {sortedData.map((el, index) => {
                    return (
                        <div key={index} className='mainbox flex flex-wrap w-[23%] border-[1px] border-[black] rounded-[20px] my-[10px]'>
                            <div className='subbox w-full h-[450px] flex flex-col justify-center items-center px-[50px]'>
                                <img src={el.image} alt="" className='w-[200px] h-[200px]' />
                                <h1 className='text-center text-[15px]'>Title :- {el.title}</h1>
                                <h1 className='text-[15px]'>Price :- {el.price} $</h1>
                                <h1 className='text-[15px]'>Rating :- {el.rating.rate}</h1>
                                <Link to="/cart">
                                <button onClick={() => AddCart(el)} className='w-[150px] h-[40px] bg-black rounded-[10px] text-white'>
                                    Add To Cart
                                </button>
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Product;
