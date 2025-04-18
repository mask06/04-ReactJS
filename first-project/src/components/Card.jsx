/* eslint-disable no-unused-vars */
// Class Component
// rcc: React Class Component
// import React, { Component } from 'react'

// export default class Card extends Component {
//   render() {
//     return (
//       <div>Card</div>
//     )
//   }
// }

// Functional Components
// rfc: React Functional Component
// rfce: React Functional Component Export
//  import React from 'react'

//  export default function Card() {
//    return (
//      <div>Card</div>
//    )
//  }

// import React from 'react'

// function Card() {
//   return (
//     <div>Card</div>
//   )
// }

// export default Card

// rafce: React Arrow Functional Component Export

import React from 'react'

const Card = ({kisi}) => {
    // const {kisi}=props;
    return (
            <div className="card">
                <img src="https://cdn.pixabay.com/photo/2023/10/16/15/54/guy-fawkes-8319526_1280.png" alt="profil" />
                <span>{kisi.studentName}</span>
                <span>{kisi.studentLocation}</span>
            </div>
    )
}




// const Card = (props) => {
//     return (
//             <div className="card">
//                 <img src="https://cdn.pixabay.com/photo/2023/10/16/15/54/guy-fawkes-8319526_1280.png" alt="profil" />
//                 <span>{props.kisi.studentName}</span>
//                 <span>{props.kisi.studentLocation}</span>
//             </div>
//     )
// }

export default Card