import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { Query } from "../graphql-types"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import CardList from "../components/cardList"

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <CardList />
    </Layout>
  )
}

export default IndexPage
