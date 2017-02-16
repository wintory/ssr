import React, {Component} from 'react'
import {Link} from 'react-router'

export default class ProvCard extends React.Component {

    render() {
        return (
            <div>
              <section className="whiteSection">
                <div className="container">
                  <div className="row">
                    <div className="col-xs-12">
                      <div className="sectionTitle">
                        <h2><span>Most Province in Thailand</span></h2>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-12">
                      <div className="filter-container isotopeFilters">
                        <ul className="list-inline filter">
                          <li className="active"><a href="#" data-filter="*">All Places</a></li>
                          <li><a href="#" data-filter="Central">Central</a></li>
                          <li><a href="#" data-filter="West">West</a></li>
                          <li><a href="#" data-filter="North">North</a></li>
                          <li><a href="#" data-filter="South">South</a></li>
                          <li><a href="#" data-filter="East">East</a></li>
                          <li><a href="#" data-filter="East">North East</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="row isotopeContainer">
                      <div className="col-sm-4 isotopeSelector asia">
                        <article className="">
                          <figure>
                            <img src="img/home/packages/packages-1.jpg" alt=""/>
                            <h4>Vestibulum Tour</h4>
                            <div className="overlay-background">
                              <div className="inner"></div>
                            </div>
                            <div className="overlay">
                              <a className="fancybox-pop" href="single-package-fullwidth.html">
                              <div className="overlayInfo">
                                <h5>from <span>$399</span></h5>
                                <p><i className="fa fa-calendar" aria-hidden="true"></i>27 Jan, 2017</p>
                              </div>
                              </a>
                            </div>
                          </figure>
                        </article>
                      </div>
                      <div className="col-sm-4 isotopeSelector america africa">
                        <article className="">
                          <figure>
                            <img src="img/home/packages/packages-2.jpg" alt=""/>
                            <h4>Maecenas Tour</h4>
                            <div className="overlay-background">
                              <div className="inner"></div>
                            </div>
                            <div className="overlay">
                            <a className="fancybox-pop" href="single-package-fullwidth.html">
                                <div className="overlayInfo">
                                  <h5>from <span>$599</span></h5>
                                  <p><i className="fa fa-calendar" aria-hidden="true"></i>09 Feb, 2017</p>
                                </div>
                              </a>
                            </div>
                          </figure>
                        </article>
                      </div>
                      <div className="col-sm-4 isotopeSelector africa">
                        <article className="">
                          <figure>
                            <img src="img/home/packages/packages-3.jpg" alt=""/>
                            <h4>Lobortis Tour</h4>
                            <div className="overlay-background">
                              <div className="inner"></div>
                            </div>
                            <div className="overlay">
                              <a className="fancybox-pop" href="single-package-fullwidth.html">
                              <div className="overlayInfo">
                                <h5>from <span>$299</span></h5>
                                <p><i className="fa fa-calendar" aria-hidden="true"></i>14 Feb, 2017</p>
                              </div>
                              </a>
                            </div>
                          </figure>
                        </article>
                      </div>
                      <div className="col-sm-4 isotopeSelector asia america">
                        <article className="">
                          <figure>
                            <img src="img/home/packages/packages-4.jpg" alt=""/>
                            <h4>Leo Lacus Tour</h4>
                            <div className="overlay-background">
                              <div className="inner"></div>
                            </div>
                            <div className="overlay">
                              <a className="fancybox-pop" href="single-package-fullwidth.html">
                              <div className="overlayInfo">
                                <h5>from <span>$399</span></h5>
                                <p><i className="fa fa-calendar" aria-hidden="true"></i>11 Jan, 2017</p>
                              </div>
                              </a>
                            </div>
                          </figure>
                        </article>
                      </div>
                      <div className="col-sm-4 isotopeSelector america">
                        <article className="">
                          <figure>
                            <img src="img/home/packages/packages-5.jpg" alt=""/>
                            <h4>Nullam Tour</h4>
                            <div className="overlay-background">
                              <div className="inner"></div>
                            </div>
                            <div className="overlay">
                              <a className="fancybox-pop" href="single-package-fullwidth.html">
                              <div className="overlayInfo">
                                <h5>from <span>$199</span></h5>
                                <p><i className="fa fa-calendar" aria-hidden="true"></i>02 Feb, 2017</p>
                              </div>
                              </a>
                            </div>
                          </figure>
                        </article>
                      </div>
                      <div className="col-sm-4 isotopeSelector africa asia">
                        <article className="">
                          <figure>
                            <img src="img/home/packages/packages-6.jpg" alt=""/>
                            <h4>Hendrerit Tour</h4>
                            <div className="overlay-background">
                              <div className="inner"></div>
                            </div>
                            <div className="overlay">
                              <a className="fancybox-pop" href="single-package-fullwidth.html">
                              <div className="overlayInfo">
                                <h5>from <span>$799</span></h5>
                                <p><i className="fa fa-calendar" aria-hidden="true"></i>26 Feb, 2017</p>
                              </div>
                              </a>
                            </div>
                          </figure>
                        </article>
                      </div>
                  </div>
                </div>
              </section>
                    </div>
                  )
                }
              }
