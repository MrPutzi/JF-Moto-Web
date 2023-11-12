import React, { Component } from 'react'
import PhotoCarousel from '../components/Carousel'
import JFCard from '../components/JFCard'
import Subscribe from "../components/Subscribe";

export default class Home extends Component {
  render() {
    return (
        <div className="grid grid-flow-col auto-cols-max">
            <PhotoCarousel />
          <JFCard />

        <div></div>
            <div> </div>
        <div> <Subscribe/> </div>

        </div>
    );
  }
}