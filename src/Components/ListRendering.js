import React from 'react'

function ListRendering() {
    let arr = [
        {
            name: 'Priyanshu',
            address: 'GKP'
        },
        {
            name: 'Aman',
            address: 'LKO'
        },
        {
            name: 'Ayush',
            address: 'Varanasi'
        }
    ];
    let Fruit=["Apple","Guava","Mango"];
    let FruitList=Fruit.map(Fruit=><h2>{Fruit}</h2>);
    // let arrList=arr.map(arr=><h2>{arr+2}</h2>);          // Method 1: Using the map function outside the return method so as to treat it like a normal JavaScript Syntax.
    return (
        <div>
            {/* <h2>{arrList}</h2> */}
            {                                               // Method 2: Here we use the map method to render the arr inside the JSX itself
                arr.map(arr => <h2>I am {arr.name}. I live in {arr.address}</h2>)    //  by embedding the arr.map method inside curly braces to treat it as JavaScript
            }
            <h2>{FruitList}</h2>
        </div>
    )
}

export default ListRendering