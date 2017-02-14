import React,{Component} from 'react'

export default class SearchBox extends Component{

  render(){
    return(
      <div>
      <form className="destinations-form">
         <div className="input-line">
            <input type="text" name="destination" value="" className="form-input check-value" placeholder="WHAT IS YOUR DESTINATION?" />
            <button type="button"  className="form-submit btn btn-special">Find your activity</button>
         </div>
      </form>
      </div>
    )
  }
}
