import React from 'react'
import Navi from '../components/Navi'
import { Form } from '../components/Form'
import SearchBar from '../components/SearchBar'
import CardList from '../components/CardList'

const HomePage = () => {
    return (
        <>
            <Navi />
            <Form />
            <SearchBar />
            <CardList />
        </>
    )
}

export default HomePage