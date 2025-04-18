import React from 'react'
import { mainText } from '../data/data'
import PageText from '../component/PageText'
import PageHeading from '../component/PageHeading'
const MainPage = () => {
    return (
        <div className='main-page'><img src="https://cdn.pixabay.com/photo/2018/08/26/18/45/server-3632935_960_720.jpg" alt="" />
        <PageHeading heading ={"React Router"}/>
        <PageText text={mainText}/>
        </div>
    )
}

export default MainPage