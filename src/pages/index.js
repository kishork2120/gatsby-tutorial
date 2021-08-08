import { graphql, navigate } from "gatsby"
import * as React from "react"
import '../../node_modules/bulma/css/bulma.css'

const style = {
  'cursorPointer':{
    cursor:'pointer !important'
  }
}

// markup
const IndexPage = ({ data }) => {
  return (
    <React.Fragment>
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">
            Place API
          </p>
          <p className="subtitle">
            Simple APP for listing Countries and States
          </p>
        </div>
      </section>
      <table className="table is-hoverable is-fullwidth">
        <thead>
          <tr>
            <td>Country</td>
            <td>Code</td>
            <td>Flag</td>
          </tr>
        </thead>
        <tbody>
          {
            data.placeapi.countries.map((countryData) =>
              <tr style={style.cursorPointer} key={countryData.code} onClick={()=>navigate(`/${countryData.code}`)}>
                <td>{countryData.name}</td>
                <td>{countryData.code}</td>
                <td>{countryData.emoji}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </React.Fragment>
  )
}

export const query = graphql`
  {
    placeapi{
      countries{
        name
        code
        emoji
      }
    }
  }
`

export default IndexPage;
