import React, { Component } from 'react';
import { Form, Label } from 'semantic-ui-react';
import Script from 'react-load-script';
import PlacesAutocomplete from 'react-places-autocomplete';

const style = {
  autoCompleteContainer: {
    zIndex: 1000
  }
}

class PlaceInput extends Component {

  state = {
    scriptLoaded: false
  }

  handScriptLoaded = () => {
    this.setState({scriptLoaded: true})
  }

  render() {
    const {input, width, onSelect, placeholder, options, meta: {touched, error}} = this.props;
    return (
      <Form.Field error={touched && !!error} width={width}>
        <Script
          url = "https://maps.googleapis.com/maps/api/js?key=AIzaSyD8eyGeIVO1m-lMAwJ21o3qiUPRiuFV_ck&libraries=places"
          onLoad={this.handleScriptLoaded} />
          {this.state.scriptLoaded &&
          <PlacesAutocomplete
            inputProps={{...input, placeholder}}
            options={options}
            style={style}
            onSelect={onSelect} />}
            {touched && error && <Label basic color='red'>{error}</Label>}
      </Form.Field>
    )
  }
}

export default PlaceInput;
