import React from 'react'
import { arrayOf, object, string, oneOf, bool } from 'prop-types'
import styled from 'styled-components'

import Heading from '../Heading'
import P from '../P'

const Ul = styled.ul`
  position: relative;
`

const Ol = styled.ol`
  position: relative;
`

const Li = styled.li`
  position: relative;
  &.has-text {
    padding-bottom: 1rem;
  }
`

const StyledP = styled(P)`
  &:first-of-type {
    margin-top: 0;
  }
`

function List ({collection, titleKey, textKey, headingLevel, ordered}) {
  const StyledList = ordered ? Ol : Ul
  return (
    <StyledList>
      {collection.map(item => {
        let Title = item[titleKey]
        if (headingLevel > 0) Title = <Heading collapse level={headingLevel}>{item[titleKey]}</Heading>
        let Text = item[textKey]
        if (Text) Text = <StyledP>{item[textKey]}</StyledP>
        return (
          <Li key={item.id} className={(Text) ? 'has-text' : null}>
           {Title}
           {Text}
          </Li>
        )
      })}
    </StyledList>
  )
}

List.propTypes = {
  collection: arrayOf(object),
  titleKey: string,
  textKey: string,
  headingLevel: oneOf([0, 1, 2, 3, 4 , '1', '2', '3', '4']),
  ordered: bool
}

List.defaultProps = {
  collection: [],
  titleKey: '',
  textKey: null,
  headingLevel: 0,
  ordered: false
}

export default List