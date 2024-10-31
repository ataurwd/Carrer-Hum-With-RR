import React from 'react';
import Header from './Header';
import Categories from './Categories';
import { useLoaderData } from 'react-router-dom';
import Jobs from './Jobs';

const Home = () => {
    const data = useLoaderData()    
    return (
        <div>
            <Header/>
            <Categories data ={data}/>
            <Jobs/>
        </div>
    );
};

export default Home;