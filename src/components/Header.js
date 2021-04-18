import Button from "./Button"
import { useLocation } from 'react-router-dom'

const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation()
    return (
        <header className='header'>
            <h1>Task Tracker {title}</h1>
            {location.pathname === '/' && <Button
                color={showAdd ? 'red' : 'green'}
                text={showAdd ? 'Close' : 'Add'}
                onClic={onAdd}
            />}
        </header>
    )
}
// Header.defaultProps = {
//     text: 'salut',
//     name: 'ciburec'
// }

// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }
export default Header;