import React from 'react';

// Helper
import {calcTime, convertMoney} from '../../helpers';

// Style
import {Wrapper, Content} from './MovieInfoBar.style';

// Type
type Props = {
    time: number;
    budget: number;
    revenue: number;
}

const MovieInfoBar: React.FC<Props> = ({time, budget, revenue}) => (
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

export default MovieInfoBar;