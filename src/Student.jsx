import PropTypes from 'prop-types';

const Student = (props) => {
    // console.log(props);
    return (
        <>
            <div className="container">
                <p>MY NAME IS: {props.name}</p>
                <p> I AM {props.age} years old </p>
                <p> I LIVE IN {props.city} </p>
                <p>IS  {props.name} A student :{props.isstudent ? 'yes' : 'No'} </p>
            </div>

        </>
    );
};
// protypes  check for condition to props .     
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    city: PropTypes.string,
    isstudent:PropTypes.bool,

    };
    // default : if value is not given . 
    Student.defaultProps = {
        name: "User",
        age: 0,
        city: "unknown",
        isstudent: false,
      };
      
export default Student; 