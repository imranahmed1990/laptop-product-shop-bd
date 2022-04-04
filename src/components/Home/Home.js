import React, { useEffect, useState } from 'react';
import img from '../../img/header-img.png';
import CustomerReview from '../CustomerReview/CustomerReview';
import './Home.css';

const Home = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <div className='home-container'>
                <div className='container'>
                    <h1 className='heading'>WELCOME TO LAPTOP <span className='orange'>ANALYSIS WEBSITE</span></h1>
                    <p><small>Welcome to my laptop analysis website. This will be helping to laptop lover people.because we are discuss more about laptop information. So that we can help you about your usecase and more knowledge. please stay with us ....</small></p>
                    <button className='btn'>DETAILE INFORMATIN</button>
                </div>
                <div className='container'>
                    <img src={img} alt="" />
                </div>
            </div>

            <div>
                <h2 className='customer-review-heading'>Customer Review:</h2>
                <div className='rewiew-container'>
                    {
                        reviews.map(review => <CustomerReview
                            key={review.id}
                            review={review}
                        ></CustomerReview>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;