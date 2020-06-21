import React from 'react';
import '../../App.css';

const Home =()=>{
    const GITHUB = "https://www.github.com/samman06/trufla";
    const DEPLOYMENT = "https://trufla.herokuapp.com/";
    return (
        <div className="mt-5">
            <h1>Trufla Challenge</h1>
            <h1>Challenge code on my <a href={GITHUB}>Github</a> account</h1>
            <h1>Challenge Deployed on <a href={DEPLOYMENT}>Trufla</a> Heroku</h1>
        </div>
    );
}

export default Home;
