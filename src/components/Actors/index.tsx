import React from 'react';

// Styles
import {Wrapper, Images} from './Actors.style';

// Types
type Props = {
    names: string;
    characters: string;
    imageurl: string;
}

const Actors: React.FC<Props> = ({names, characters, imageurl}) => (
    <Wrapper>
        <Images src={imageurl} alt='actors-thumb' />
        <h3>{names}</h3>
        <p>{characters}</p>
    </Wrapper>
);

export default Actors;