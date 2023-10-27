import '../App.css';
import PropTypes from 'prop-types';

function IpAddress({ ipAddress }) {
    return (
        <div>
            <h2>Your IP Address:</h2>
            <p>{ipAddress}</p>
        </div>
    );
}

IpAddress.propTypes = {
    ipAddress: PropTypes.string.isRequired,
};

export default IpAddress;