import React from "react"
import BaseLayout from "../components/baseLayout"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"

export default ({data}) => (
  <BaseLayout>
    <Helmet>
        <title>Spencer Rowland</title>
    </Helmet>
    <div className="work">
      <h2>Work Experience</h2>
      <ul>
        <li>
          <h3>
            <Link to="/escapekit">Escape Kit</Link>
            <span>Creator and solo developer</span>
          </h3>
          <h4>January 2018 - Present</h4>
          <p>
            Escape Kit began with the mission to make a better digital waiver for the escape room industry.
            It has grown to become an automated marketing tool used by escape room businesses across the country.
          </p>
        </li>

        <li>
          <h3>
            <a href="/eenash/home" target="_blank">Escape Experience</a>
            <span>Co-Owner and General Manager</span>
          </h3>
          <h4>NASHVILLE/CHATTANOOGA, TN &nbsp;|&nbsp; DECEMBER 2014 - CLOSED DUE TO COVID</h4>
          <ul class="work">
            <li>Co-owner of escape room business with two locations</li>
            <li>Nominated for Top 10 escape rooms in the country (USA Today)</li>
            <li>Reached +$1 million in annual revenue across both locations at peak</li>
          </ul>
        </li>

        <li>
          <h3>
            <a href="#">Bryan Pendleton Swats & McAllister</a>
            <span>Actuarial Analyst</span>
          </h3>
          <h4>BRENTWOOD, TN &nbsp;|&nbsp; APRIL 2011 - APRIL 2015</h4>
          <ul class="work">
            <li>Analyst for employee benefits consulting firm under Wells Fargo’s Institutional Retirement and Trust business</li>
            <li>Exceeded annual billing goals each year (at least 122% of goal)</li>
          </ul>
        </li>

        <li>
          <h3>
            <a href="#">Gabriel Roeder Smith & Company</a>
            <span>Actuarial Analyst</span>
          </h3>
          <h4>DENVER, CO &nbsp;|&nbsp; SEPTEMBER 2009 - MARCH 2011</h4>
          <ul class="work">
            <li>Pension consulting firm serving clients primarily in the public sector</li>
            <li>Worked with valuation software written in FORTRAN</li>
          </ul>
        </li>

        <li>
          <h3>
            <a href="#">State Farm</a>
            <span>Claims Representative</span>
          </h3>
          <h4>MURFREESBORO, TN &nbsp;|&nbsp; APRIL 2008 - SEPTEMBER 2009</h4>
          <ul class="work">
            <li>Investigated, negotiated and settled third party bodily injury claims</li>
          </ul>
        </li>

      </ul>
    </div>
    <div className="contact">
      <h2>Get in touch</h2>
      <p>
        Follow me on <a href="https://twitter.com/spencerowland" target="_blank" rel="noopener noreferrer">Twitter</a> or email me at jsrowland10@gmail.com.
      </p>
    </div>
  </BaseLayout>
)

export const query = graphql`
  query {
    headshot: file(relativePath: { eq: "headshot.png" }) {
      childImageSharp {
        fixed(width: 96) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
