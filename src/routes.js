import React from 'react'
import { Route , IndexRoute} from 'react-router'

import ProvinceDetail from './component/province_detail'
import ActivityDetail from './component/activity_detail'
import App from './component/app'
import HomeDetail from './component/home_detail'

export default (

  <Route path="/" component={App}>
         <IndexRoute component={HomeDetail}/>
         <Route path="home_detail" component={HomeDetail}> </Route>
          <Route path="province_detail" component={ProvinceDetail}> </Route>
          <Route path="activity_detail" component={ActivityDetail} ></Route>
          <Route path="*" component={HomeDetail}>
          </Route>
  </Route>

)
