import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import About from './About/About';
import Service from './Service/Service';
import Contact from './Contact/Contact';
import { pagelink } from '../PageLink';
import ResponsiveView from './ResponsiveView/ResponsiveView';
import IframeView from './ResponsiveView/IframeView';


function RoutePages() {
  return (
    <>
      <Route exact path={`/${pagelink.home}`} component={Home} />
      <Route exact path={`/${pagelink.home_}`} component={Home} />
      <Route exact path={`/${pagelink.about}`} component={About} />
      <Route exact path={`/${pagelink.services}`} component={Service} />
      <Route exact path={`/${pagelink.contact}`} component={Contact} />
      <Route exact
        path={`/${pagelink.responsiveView}`}
        component={ResponsiveView} />
      {/** ONLY FOR IFRAME VIEW */}
      <Route exact
        path={`/${pagelink.iframeView}`}
        component={IframeView} />
    </>
  )
}

export default RoutePages
