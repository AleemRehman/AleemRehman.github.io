import React from "react"
import "shared/shared"
import Layout from "components/layout"
import SEO from "components/seo"

export default class IndexPage extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Layout>
        <SEO title="home" />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
      </Layout>
    )
  }
}
