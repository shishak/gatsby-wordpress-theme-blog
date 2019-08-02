/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import SEO from "../../components/Seo"
import { Card } from "../../styles/elements"

const Page = ({ data }) => {
  const { title, content, excerpt } = data.wpgraphql.page
  return (
    <Layout>
      <SEO title={title} description={excerpt} />
      <Card>
        <div className="content">
          <Styled.h1
            sx={{ textAlign: "center", textTransform: "uppercase" }}
            className="page-title"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <Styled.root
            className="content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </Card>
    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query GET_PAGE($id: ID!) {
    wpgraphql {
      page(id: $id) {
        title
        content
        excerpt
        uri
      }
    }
  }
`
