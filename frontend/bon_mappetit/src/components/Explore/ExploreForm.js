import React, { Component } from "react"
import ExploreSearch from './ExploreSearch'

class ExploreForm extends Component {

  constructor() {    // Set up a state to help pass data back to the parent App component
    super()
    this.state = {
      cityLoc: '',
      stateLoc: ''
    }
  }

  // Get the info from the ExploreSearch component and save it to state here in ReportForm.
  setFormLocation = (googleLocation) => {
    let parsedLoc = googleLocation.split(', ') // The Google result comes back as a comma-separated string: "Austin, TX, USA". Parse it into usable data.
    this.setState({
      cityLoc: parsedLoc[0],
      stateLoc: parsedLoc[1]
    })
  }

  // Process the form submission with the info that was just saved to ReportForm.state
  createReportLocation = (event) => {
    event.preventDefault()
    const inputLocation = {
      cityLoc: this.state.cityLoc,
      stateLoc: this.state.stateLoc
    }
    // Call the parent App component's setReportLocation function, which sets App.state. so that all other components will have access to it.
    this.props.setReportLocation(inputLocation)
  }

  render(){
      return (
        <form onSubmit={this.createReportLocation}  className="card card-body mb-3">
          <div className="row">
            <div className="col-sm-12">
              <p>Search here</p>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-10">
              <ExploreSearch setFormLocation={this.setFormLocation}/>
            </div>

            <div className="col-sm-2">
              <button type="submit" className="btn btn-xs btn-primary">Submit</button>
            </div>
          </div>
        </form>
      )
    }
  }

  export default ExploreForm;
