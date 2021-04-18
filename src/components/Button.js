import PropTypes from 'prop-types';

const Button = ({ text, color, onClic }) => {

    return <button
        onClick={onClic}
        style={{ backgroundColor: color }}
        className="btn">{text}
    </button>
}

Button.defaultProps = {
    color: 'steelblue'
}
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClic: PropTypes.func
}
export default Button;