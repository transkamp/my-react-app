import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGoup">
        <h1>Learn to design and code React apps</h1>
        <p>So lerne ich React Apps zu programmieren.</p>
        <p>Und noch eine Zeile. hahaha</p>

        <Link to="/page-2/">Go to page 2 </Link>
      </div>
    </div>
  </div>
)

export default IndexPage
