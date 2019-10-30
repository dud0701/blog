import React from "react"
import Layout from "../components/layout"
import { ITemplateProps } from "../interface"
import Utterances from "./Utterances"

type IPosteTemlateProps = ITemplateProps<{
  html: string
  date: string
  title: string
}>

const PostTemplate: React.FC<IPosteTemlateProps> = React.memo(props => {
  const { title, date, html } = props.pageContext

  return (
    <Layout>
      <h2>{title}</h2>
      <h4>{date}</h4>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Utterances repo="dud0701/blog" />
      <br />
      <br />
      <br />
    </Layout>
  )
})

PostTemplate.displayName = "PostTemplate"

export default PostTemplate
