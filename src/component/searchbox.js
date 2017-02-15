import React,{Component} from 'react'

export default class SearchBox extends Component{


  render(){


    return(
        <div>
          <form className="destinations-form">
             <div className="input-line">
                <input type="text" name="destination" value="" className="form-input check-value" placeholder="Province Destination?" />
                <button type="button" name="destination-submit" className="form-submit btn btn-special">Find a Activity</button>
             </div>
          </form>
        </div>



    )
  }
}
