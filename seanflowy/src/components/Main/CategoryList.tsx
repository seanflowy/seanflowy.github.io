import styled from '@emotion/styled'
import React, { FunctionComponent, ReactNode } from 'react'
import { Link } from 'gatsby'

export type CategoryListProps = {
  selectedCategory: string
  categoryList: {
    // 프로퍼티 이름은 문자열, 프로퍼티 값은 숫자임을 나타내는 타입 표기 방법
    [key: string]: number
  }
}
type CategoryItemProps = {
  active: boolean
}

type GatsbyLinkProps = {
  children: ReactNode
  className?: string
  to: string
} & CategoryItemProps

const CategoryItem = styled(({ active, to, ...props }: GatsbyLinkProps) => (
  <Link to={to} {...props} />
))`
  padding: 10px 10px 10px 0;
  margin-right: 16px;
  width: -moz-fit-content;
  width: fit-content;
  height: 50px;
  text-align: center;
  transition: all, ease-out;
  justify-content: flex-start;
  transition-duration: 0.1s;
  cursor: pointer;
  color: ${({ active }) => (active ? '#4665b7' : 'inherit')};
  font-weight: 700;

  &:last-of-type {
    margin-right: 0;
  }
`
const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1.722rem;

  & div {
    align-items: center;
    display: flex;
  }
`

const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
}) {
  return (
    <Container>
      <div>
        {Object.entries(categoryList).map(([name, count]) => (
          <CategoryItem
            to={`/?category=${name}`}
            active={name === selectedCategory}
            key={name}
          >
            {name} ({count})
          </CategoryItem>
        ))}
      </div>
    </Container>
  )
}

export default CategoryList
