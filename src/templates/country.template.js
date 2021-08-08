import { graphql } from 'gatsby';
import React from 'react';

const Country = ({data})=>{
  const countryData = data.placeapi.country;

  return(
    <React.Fragment>
      <section className="hero is-info">
        <div className="hero-body">
          <p className="title">
            Country : {countryData.name}
          </p>
          <p className="subtitle">
            Country Code : {countryData.code}
          </p>
        </div>
      </section>
      <table className="table is-hoverable is-fullwidth">
        <thead>
          <tr>
            <td>State</td>
            <td>Code</td>
          </tr>
        </thead>
        <tbody>
          {
            countryData.states.map((stateData) =>
              <tr key={stateData.code}>
                <td>{stateData.name}</td>
                <td>{stateData.code}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </React.Fragment>
  )
}

export const query = graphql`
  query($code:ID!){
    placeapi{
      country(code:$code){
        name
        code
        states{
          name
          code
        }
      }
    }
  }
`

export default Country;