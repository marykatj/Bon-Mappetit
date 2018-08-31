import React, { Component } from "react"
import ExploreSearch from './ExploreSearch'

class ExploreForm extends Component {

  constructor() {    // Set up a state to help pass data back to the parent App component
    super()
    this.state = {
      cityLocation: '',
      stateLocation: ''
    }
  }

  // Get the info from the ExploreSearch component and save it to state here in ReportForm.
  setLocation = (googleLocation) => {
    let parsedLocation = googleLocation.split(', ') // The Google result comes back as a comma-separated string: "Austin, TX, USA". Parse it into usable data.
    this.setState({
      cityLocation: parsedLocation[0],
      stateLocation: parsedLocation[1]
    })
  }

  // Process the form submission with the info that was just saved to ReportForm.state
  createLocation = (event) => {
    event.preventDefault()
    const inputLocation = {
      cityLoc: this.state.cityLocation,
      stateLoc: this.state.stateLocation
    }
    // Call the parent App component's setReportLocation function, which sets App.state. so that all other components will have access to it.
    this.props.setLocation(inputLocation)
  }

  render(){
      return (
        <div>
        <form onSubmit={this.createLocation}  className="card card-body mb-3">
          <div className="row">
            <div className="col-sm-12">
              <p>Search here</p>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-10" className="Explore-search">
              <ExploreSearch setLocation={this.setLocation}/>
            </div>

            <div className="col-sm-2">
              <button type="submit" className="btn btn-xs btn-primary">Submit</button>
            </div>
          </div>
        </form>
        </div>
      )
    }
  }

  export default ExploreForm;
