import React from 'react'
import {Link} from 'react-router'
class Page1 extends React.Component{
  render(){
    return(
        <div>
          <h1>This is Page 1</h1>
          <Link to="page2">go page 2</Link>
        </div>
    )
  }
}
export default Page1
