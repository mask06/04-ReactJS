/* eslint-disable no-unused-vars */
import React from 'react'
import Card from './Card'
import students from '../data'
const CardList = () => {
    return (
        <div className='container'>
            {/* prop: tek yönlü data(one way data binding) transferi ile parent componentten child componente veri aktarımını sağlar. */}
            {
                students.map(person=>
                    <Card kisi={person} key={person.id}/>
                )
            }
        </div>
    )
}

export default CardList