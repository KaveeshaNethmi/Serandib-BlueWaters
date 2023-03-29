import React from 'react'
import "./Getwawy.scss";
import MainTitle from '../../Common_Components/MainTitle/MainTitle';

function Getaway()  {
    const mainTitle = "a tropical";
    const subTitle = "getaway";

    return (
        <div className='main-container'> 
            <div className="grid lg:grid-cols-2 h-auto ">
                <div className="left">
                    <MainTitle mainTitle={mainTitle} subTitle={subTitle}/>
                </div>

                <div className="right">
                    <div className="para-text">
                        <p className="para-title">Located at the heart of Senga Bay, Bluewaters hotel is truly a tropical paradise.</p>
                        <p className="para">This hotel is situated on the shores of Lake Malawi, offering breathtaking views of the lake and the surrounding mountains. The hotel's location is perfect for guests who wish to explore the local area, with Senga Bay being one of the most popular spots on the lake for swimming, fishing and boat trips.</p>
                        <button className='viewmore-btn'>view</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Getaway
