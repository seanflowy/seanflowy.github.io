import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const Description = styled.div`
  margin-bottom: 15px;
  border-radius: 5px;
  margin-top: 15px;

  & div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`
const BlogText = styled.p`
  font-size: 16px;
  margin-bottom: 0;
  margin-left: 0;
  height: 130px;
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  padding: 16px;
`
const BlogImage = styled.div`
  margin-right: 16px;

  transition: all;
  transition-duration: 1s;

  & img {
    width: 160px;
    min-width: 160px;
    margin-bottom: 0;
  }
`
const SubTitle = styled.p`
  margin-top: 0;
  padding-top: 0;
  margin-bottom: 0;
`
const Title = styled.h1`
  font-size: 3.4822rem;
  line-height: 4.305rem;
  margin-bottom: 0;
  margin-top: 0;
  cursor: pointer;

  & span {
    box-shadow: none;
    text-decoration: none;
    color: inherit;
  }
`

const Introduction: FunctionComponent = function () {
  return (
    <header>
      <Title>
        <span>Learn By Doing</span>
      </Title>
      <SubTitle>잘하기보다 자라기</SubTitle>
      <Description>
        <div>
          <BlogImage>
            <img
              src="https://avatars.githubusercontent.com/u/91925223?v=4"
              alt="Blog Image"
            />
          </BlogImage>
          <BlogText>
            <div>성장 프로젝트</div>
          </BlogText>
        </div>
      </Description>
    </header>
  )
}

export default Introduction
