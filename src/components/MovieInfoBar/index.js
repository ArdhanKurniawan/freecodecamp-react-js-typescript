import React from 'react';
import PropTypes from 'prop-types';

// Helper
import {calcTime, convertMoney} from '../../helpers';

// Style
import {Wrapper, Content} from './MovieInfoBar.style';

const MovieInfoBar = ({time, budget, revenue}) => (
    <Wrapper>
        <Content>
            <div className='coloum'>
                <p>Running Time : {calcTime(time)}</p>
            </div>
            <div className='coloum'>
                <p>Budget : {convertMoney(budget)}</p>
            </div>
            <div className='coloum'>
                <p>Revenue : {convertMoney(revenue)}</p>
            </div>
        </Content>
    </Wrapper>
);

MovieInfoBar.propTypes = {
    time : PropTypes.number,
    budget : PropTypes.number,
    revenue : PropTypes.number
};

export default MovieInfoBar;