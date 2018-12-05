import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import Card from '../components/Card'
import Section from '../components/Section'
import Wave from '../components/Wave'
import Cell from '../components/Cell'
import staticdata from '../../staticdata.json';
import styled from 'styled-components'

const SectionCaption = styled.p`
  font-weight:600;
  font-size:18px;
  text-transform:uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;
  @media (max-width:800px){
    grid-template-columns: repeat(1,1fr);
  }
`


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
          <img src={require('../images/logo-sketch.png')} width="50" />
          <img src={require('../images/logo-figma.png')} width="50" />
          <img src={require('../images/logo-studio.png')} width="50" />
          <img src={require('../images/logo-framer.png')} width="50" />
          <img src={require('../images/logo-react.png')} width="50" />
          <img src={require('../images/logo-swift.png')} width="50" />
        </div>

        <Wave />

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
      <Section
        image={require('../images/wallpaper2.jpg')}
        logo={require('../images/logo-react.png')}
        title="React for Designers"
        text="Learn how to build a modern libraries to get your site / product"
      /> <SectionCaption>12 Sektions - 6 hours</SectionCaption>
      <SectionCellGroup>
        {staticdata.cells.map(cell => (
          <Cell 
            title={cell.title} 
            image={cell.image} />
        ))}
      </SectionCellGroup>
    </div>
   
  </Layout>
)

export default IndexPage
