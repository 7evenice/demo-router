import React, { Component } from 'react'
import dl1 from '../component/data-vd.json'
import Jumbotron from './Jumbotron'

export default class Product extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            
              {/* <div className="jumbotron">
                <h3 className="display-4">Jumbo heading</h3>
                <p className="lead">Jumbo helper text</p>
                <hr className="my-2" />
                <p>More info</p>
                <p className="lead">
                  <a className="btn btn-primary btn-lg" href="Jumbo action link" role="button">Jumbo action name</a>
                </p>
              </div> */}
              {
              dl1.map((value,key) => {
                return(
                  <div className="col-sm-6">
                  <div className="jumbotron">
                  <Jumbotron 
                  jumId= {value.id}
                  heading={value.headingJumbo} 
                  helper= {value.helperJumbo}
                  />
                  </div>
                  </div>
                )
              })
              }
          </div>
        </div>
        {/* tin liên quan  */}
        <div className="container">
          <h4>Tin liên quan</h4>
        </div>
      </div>
    )
  }
}
