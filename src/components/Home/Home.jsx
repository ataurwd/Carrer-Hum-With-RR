import React from 'react';
import Header from './Header';
import Categories from './Categories';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const data = useLoaderData()    
    return (
        <div>
            <Header/>
            <Categories data ={data}/>
        </div>
    );
};

export default Home;