import React from 'react';

// Style
import {Wrapper} from './Button.style';

// Types
type Props = {
    text: string;
    callback: () => void;
};

const Button: React.FC<Props> = ({text, callback}) => (
    <Wrapper type='button' onClick={callback}>
        {text}
    </Wrapper>
);

export default Button;