import styled from 'styled-components'
import Wrapper from '../../components/Wrapper'
import { siteMaxWidth } from '../../components/_theme/units'

const AppWrapper = styled(Wrapper)`
  max-width: ${siteMaxWidth};
  min-height: 100vh;
  margin: 0 auto;
`

export default AppWrapper
