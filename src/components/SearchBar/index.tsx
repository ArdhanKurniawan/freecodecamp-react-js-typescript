// use this
import React, {useState, useEffect, useRef} from 'react';

// Image
import searchIcon from '../../images/search-icon.svg';

// style
import { Wrapper, Content } from "./SearchBar.style";

// Types
type Props = {setSearchTerm: React.Dispatch<React.SetStateAction<string>>}

//Fix
const SearchBar: React.FC<Props> = ({setSearchTerm}) => {

    const [State, setState] = useState('');
    const initial = useRef(true);

    useEffect(() => {

        if (initial.current) {
            initial.current = false;
            return;
        }

        const timer = setTimeout(() => {
            setSearchTerm(State);
        }, 500)

        return () => clearTimeout(timer);
    }, [setSearchTerm, State])

    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon' />
                <input 
                type='text' 
                placeholder='Search Movie' 
                onChange={event => setState(event.currentTarget.value)}
                value={State}
                />
            </Content>
        </Wrapper>
    )
}



// // Classes
// class SearchBar extends Component {

//     state = {value : ''};
//     timeout = null;

//     // lifecyle methods
//     componentDidUpdate(_prevProps, prevState) {
//         if (this.state.value !== prevState.value) {
//             const {setSearchTerm} = this.props;

//             clearTimeout(this.timeout);

//             this.timeout = setTimeout(() => {
//                 const {value} = this.state;
//                 setSearchTerm(value);
//             }, 500);
//         }
//     }

//     render() {

//         const {value} = this.state;

//         return (
//             <Wrapper>
//                 <Content>
//                     <img src={searchIcon} alt='search-icon' />
//                     <input 
//                     type='text' 
//                     placeholder='Search Movie' 
//                     onChange={event => this.setState({value: event.currentTarget.value})}
//                     value={value}
//                     />
//                 </Content>
//             </Wrapper>
//         )
//     }
// }

export default SearchBar;