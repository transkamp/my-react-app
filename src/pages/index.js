import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import Card from '../components/Card';

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGoup">
        <h1>
          My <br />
          Developper Network for Beginners
        </h1>
        <p>So lerne ich React Apps zu programmieren.</p>
        <p>Und noch eine Zeile. hahaha</p>
        <Link to="/page-2/">Watch the video </Link>
        <div className="Logos">
          <img src={require('../images/logo-sketch.png')} width="50"/>
          <img src={require('../images/logo-figma.png')} width="50"/>
          <img src={require('../images/logo-studio.png')} width="50"/>
          <img src={require('../images/logo-framer.png')} width="50"/>
          <img src={require('../images/logo-react.png')} width="50"/>
          <img src={require('../images/logo-swift.png')} width="50"/>
        </div>

        <svg
          width="100%"
          height="150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="white">
            <animate
              repeatCount="indefinite"
              fill="freeze"
              attributeName="d"
              dur="10s"
              values="M0,95 C112.673339,169.774259 220.918295,188.963145 324.734868,152.566658 C428.551441,116.170171 661.639818,96.9812852 1024,95 L1024,383 L0,383;

M0,95 C221.705371,633.547706 384.466342,642.451734 488.282915,606.104889 C592.099488,569.758043 770.67185,560.854016 1024,579.392805 L1024,867 L0,867;

M0,95 C112.673339,169.774259 220.918295,188.963145 324.734868,152.566658 C428.551441,116.170171 661.639818,96.9812852 1024,95 L1024,383 L0,383
       

       
       "
            />
          </path>
        </svg>

        {/* <svg
          width="100%"
          height="461px"
          viewBox="0 0 100% 461"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle id="Oval" cx="512.5" cy="230.5" r="130" fill="red">
            <animate
              repeatCount="indefinite"
              fill="freeze"
              attributeName="r"
              dur="10s"
              from="50"
              to="200"
            />
            "/>
          </circle>
        </svg>  */}

      
      </div>
      <div className="Cards">
        <h2>11 courses, more coming</h2>
        <div className="CardGroup">
        <Card 
            title="map.apps Basis" 
            text="12 sections"
            image={require('../images/wallpaper.jpg')}
            />
        <Card 
            title="map.apps Layout" 
            text="10 sections"
            image={require('../images/wallpaper2.jpg')}
            />
        <Card 
            title="map.apps Design System" 
            text="5 sections"
            image={require('../images/wallpaper3.jpg')}
            />
        <Card 
            title="map.apps 3D" 
            text="8 sections"
            image={require('../images/wallpaper4.jpg')}
            />
            </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage


