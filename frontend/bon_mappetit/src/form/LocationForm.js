import React, { Component } from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import PlaceInput from './PlaceInput'
import { Field, Form } from 'redux-form'

class LocationForm extends Component {

  state = {
    address: '',
    scriptLoaded: false
  }

  handScriptLoaded = () => {
    this.setState({scriptLoaded: true})
  }

  handleFormSubmit = (event) => {
    event.preventDefault()

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.setState({
        coord: latLng
      }))
  }

onChange = (address) => this.setState({address})

  render() {
    const { invalid, submitting, pristine } = this.props;

    return (
      <div>
        <Form onSubmit={this.handleFormSubmit} >
        <Field name='title' type='text' component={PlaceInput} options={{types: ['(establishments)']}} placeholder="find your place..." />
          <button type="submit">Submit</button>
        </Form>
      </div>
    )
  }
}

export default LocationForm
