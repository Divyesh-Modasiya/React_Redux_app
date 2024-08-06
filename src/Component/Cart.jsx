

// import React, { useEffect, useState } from 'react';

// function Cart() {
//     const [cart, setCart] = useState([]);

//     useEffect(() => {
//         const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//         setCart(storedCart);
//     }, []);

//     const editPrice = (index) => {
//         const newPrice = prompt("Enter the new price:");
//         if (newPrice !== null && !isNaN(newPrice) && newPrice > 0) {
//             const updatedCart = [...cart];
//             updatedCart[index].price = parseFloat(newPrice);
//             setCart(updatedCart);
//             localStorage.setItem("cart", JSON.stringify(updatedCart));
//         } else {
//             alert("Please enter a valid price.");
//         }
//     };

//     return (
//         <div className="cartBox flex flex-wrap justify-evenly">
//             {cart.length > 0 ? (
//                 cart.map((item, index) => (
//                     <div key={index} className='cartItem flex flex-wrap w-[23%] border-[1px] border-[black] rounded-[20px] my-[10px]'>
//                         <div className='subbox w-full h-[450px] flex flex-col justify-center items-center px-[50px]'>
//                             <img src={item.image} alt="" className='w-[200px] h-[200px]' />
//                             <h1 className='text-center text-[15px]'>Title :- {item.title}</h1>
//                             <h1 className='text-[15px]'>Price :- {item.price}</h1>
//                             <h1 className='text-[15px]'>Rating :- {item.rating.rate}</h1>
//                             <button
//                                 onClick={() => editPrice(index)}
//                                 className='w-[150px] h-[40px] bg-black rounded-[10px] text-white'>
//                                 Edit Price
//                             </button>
//                         </div>
//                     </div>
//                 ))
//             ) : (
//                 <h1>Your cart is empty</h1>
//             )}
//         </div>
//     );
// }

// export default Cart;

import React, { useEffect, useState } from 'react';

function Cart() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    }, []);

    const editPrice = (index) => {
        const newPrice = prompt("Enter the new price:");
        if (newPrice !== null && !isNaN(newPrice) && newPrice > 0) {
            const updatedCart = [...cart];
            updatedCart[index].price = parseFloat(newPrice);
            setCart(updatedCart);
            localStorage.setItem("cart", JSON.stringify(updatedCart));
        } else {
            alert("Please enter a valid price.");
        }
    };

    const deleteItem = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    return (
        <div className="cartBox flex flex-wrap justify-evenly">
            {cart.length > 0 ? (
                cart.map((item, index) => (
                    <div key={index} className='cartItem flex flex-wrap w-[23%] border-[1px] border-[black] rounded-[20px] my-[10px]'>
                        <div className='subbox w-full h-[450px] flex flex-col justify-center items-center px-[50px]'>
                            <img src={item.image} alt="" className='w-[200px] h-[200px]' />
                            <h1 className='text-center text-[15px]'>Title :- {item.title}</h1>
                            <h1 className='text-[15px]'>Price :- {item.price} $</h1>
                            <h1 className='text-[15px]'>Rating :- {item.rating.rate}</h1>
                            <button
                                onClick={() => editPrice(index)}
                                className='w-[150px] h-[40px] bg-black rounded-[10px] text-white mb-2'>
                                Edit Price
                            </button>
                            <button
                                onClick={() => deleteItem(index)}
                                className='w-[150px] h-[40px] bg-red-600 rounded-[10px] text-white'>
                                Delete Item
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <h1>Your cart is empty</h1>
            )}
        </div>
    );
}

export default Cart;
