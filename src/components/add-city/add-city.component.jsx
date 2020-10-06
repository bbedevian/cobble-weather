import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addCity} from '../../redux/cities/cities.actions'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import './add-city.styles.scss'

class AddCity extends Component {

    state = {
        city: ''
    }

    handleChange = event => {
        this.setState({city: event.target.value});
    }

    handleSubmit = () => {
        this.props.addCity(this.state.city)
        this.setState({city: ''});
    }

    render() {
        const {city} = this.state
        return (
            <div className='add-city'>
                <TextField size="15" value={city} onChange={this.handleChange} label="Add new city" />
               {city.length > 0 ? <Button onClick={this.handleSubmit}>Add City</Button> : null}
            </div>
        );
    }
}

const mdp = (dispatch) => {
    return {
      addCity: (city) => dispatch(addCity(city))
    }
  }


export default connect(null, mdp)(AddCity);
