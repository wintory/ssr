
import { Route , IndexRoute , RouterContext , match} from 'react-router'
import routes from './routes'
import { renderToString }  from 'react-dom/server'
import React from 'react'
import ProvinceDetail from './component/province_detail'
import ActivityDetail from './component/activity_detail'

export default function(req, res) {

    match({
      routes:routes, location:req.url}, (error, redirectLocation, renderProps) => {
        res.render('index.handlebars' , {
            markup: renderToString(<RouterContext {...renderProps} />)
        })
    });
}
