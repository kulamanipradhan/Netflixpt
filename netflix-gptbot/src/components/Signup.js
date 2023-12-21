import React from 'react'
import Header from './Header'

const Signup = () => {
    return (
        <div> <div className="absolute">
            <Header />
            <img
                src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                alt="bg-img"
                className="bg-opacity-100 "
            />
        </div>
            <form className="absolute w-9/12 my-80 mx-auto right-0 left-0 text-white bg-opacity-90 rounded-lg text-center">

                <h2 className="font-bold text-6xl md:text-4xl mb-2 p-2 ">The biggest Indian hits. Ready to watch here from <h2>₹149. </h2></h2>

                <h3 className='text-2xl  my-3'>Join today. Cancel anytime.</h3>
                <p className='text-lg'>Ready to watch? Enter your email to create or restart your membership.</p>
                <div> <input
                    type="email"
                    placeholder="Enter Your Email"
                    className=" w-4/12 p-2 m-2 rounded"
                />

                    <button className="bg-red-600 text-white  p-2 md:px-20 m-2 my-8 rounded">
                        Get Started
                    </button></div>


            </form></div>
    )
}

export default Signup