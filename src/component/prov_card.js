import React,{Component} from 'react'
import {Link} from 'react-router'

export default class ProvCard extends React.Component{
  render(){
    return(
    <div>
        <section id="portfolio" className="bg-light-gray">
          <div className="container">
            <h2>Most Province</h2>
              <div className="row">

          <table>
            <tr>

              <td>
              <Link to="/activity_detail">  <div className="card">
                    <div className="card-image">
                        <img className="img-responsive" src="http://www.sawasdee-hotels.com/pattaya/siam_sawasdee/images/hotel.jpg"/>
                        <span className="card-title">Bangkok</span>
                    </div>
                </div>
                </Link>
              </td>
              <td>
                  <Link to="/activity_detail"> <div className="card">
                    <div className="card-image">
                        <img className="img-responsive" src="http://www.artterracotta.com/images/img01.png"/>
                        <span className="card-title">Chiang Mai</span>
                    </div>
                </div>
                </Link>
              </td>
              <td>
                <Link to="/activity_detail">   <div className="card">
                    <div className="card-image">
                        <img className="img-responsive" src="https://images.trvl-media.com/hotels/2000000/1850000/1849100/1849012/1849012_130_b.jpg"/>
                        <span className="card-title">Pattaya</span>
                    </div>
                </div>
                </Link>
              </td>
              <td>
                  <Link to="/activity_detail"> <div className="card">
                    <div className="card-image">
                        <img className="img-responsive" src="https://media.expedia.com/hotels/1000000/530000/527800/527737/527737_17_b.jpg"/>
                        <span className="card-title">Phuket</span>
                    </div>
                </div>
                </Link>
              </td>
              <td>
                <Link to="/activity_detail">   <div className="card">
                    <div className="card-image">
                        <img className="img-responsive" src="https://yooniqimages.blob.core.windows.net/yooniqimages-data-storage-resizedimagefilerepository/List/20957/dfdbfc19-d3ae-4e61-b113-7051115ecb99/YooniqImages_209579897.jpg"/>
                        <span className="card-title">Ayutthaya</span>
                    </div>
                </div>
                </Link>
              </td>


              </tr>

</table>



      </div>
      </div>

        </section>
    </div>



    )
  }
}
