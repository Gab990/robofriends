import React from 'react';

const Card = ({name, email, id}) => { //receiving props and destructuring them in the brackets
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${email}?size=280x280`} alt='user'></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;