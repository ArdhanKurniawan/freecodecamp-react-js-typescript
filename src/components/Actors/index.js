import React from 'react';
import PropTypes from 'prop-types';

// Styles
import {Wrapper, Images} from './Actors.style';

const Actors = ({names, characters, imageurl}) => (
    <Wrapper>
        <Images src={imageurl} alt='actors-thumb' />
        <h3>{names}</h3>
        <p>{characters}</p>
    </Wrapper>
);

Actors.propTypes = {
    names: PropTypes.string,
    characters: PropTypes.string,
    imageurl: PropTypes.string
}

export default Actors;