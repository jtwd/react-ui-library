import React from 'react'
import { arrayOf, object, string, oneOf, bool } from 'prop-types'
import {headingLevelPropType} from '../_theme/units'
import { StyledP, Li, Ol, Ul } from './List.styles'
import Heading from '../Heading'

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
  headingLevel: oneOf(headingLevelPropType),
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