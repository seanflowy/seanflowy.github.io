import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import PostList, { PostType } from 'components/Main/PostList'
import GlobalStyle from 'components/Common/GlobalStyle'
import Introduction from 'components/Main/Introduction'
import CategoryList from 'components/Main/CategoryList'

const CATEGORY_LIST = {
  All: 5,
  Web: 3,
  Mobile: 2,
}

type IndexPageProps = {
  data: {
    allMarkdownRemark: {
      edges: PostType[]
    }
  }
}

const Background = styled.div`
  width: 100%;
  outline: none;
`

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 41.328rem;
  padding: 2.583rem 1.2915rem;
`

const IndexPage: FunctionComponent<IndexPageProps> = function ({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  return (
    <Background>
      <Wrapper>
        <GlobalStyle />
        <Introduction />
        <CategoryList selectedCategory="Web" categoryList={CATEGORY_LIST} />
        <PostList posts={edges} />
      </Wrapper>
    </Background>
  )
}

export default IndexPage

export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              publicURL
            }
          }
        }
      }
    }
  }
`
