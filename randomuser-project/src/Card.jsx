import React from 'react'

const Card = ({ getRandomUser,state }) => {
    const { user, loading, error } = state;
    return (
        <div className="container">
            <button onClick={getRandomUser} disabled={loading}>{loading ? "loading..." : "Get Random User"}</button>
            {
                user ?
                    <div className="card">
                        <img src={user.picture.large} alt="profil-photo" />
                        <div className="card-body">
                            <span>{user.name.title + "." + user.name.first + " " + user.name.last}</span>
                            <span>{user.location.city + "/" + user.location.country}</span>
                            <span>{user.email}</span>
                            <span>{user.dob.date.substring(0, 10)}</span>
                        </div>
                    </div>
                    :
                    <p className='error-message'>{error}</p>
            }
        </div>
    )
}

export default Card