module.exports = /* eslint-disable */ [{"name":"Button","description":"","props":{"primary":{"type":{"name":"bool"},"required":false,"description":"","defaultValue":{"value":"false","computed":false}},"secondary":{"type":{"name":"bool"},"required":false,"description":"","defaultValue":{"value":"false","computed":false}},"large":{"type":{"name":"bool"},"required":false,"description":"","defaultValue":{"value":"false","computed":false}},"small":{"type":{"name":"bool"},"required":false,"description":"","defaultValue":{"value":"false","computed":false}},"children":{"type":{"name":"node"},"required":false,"description":"","defaultValue":{"value":"null","computed":false}}},"code":"import React from 'react'\r\nimport styled from 'styled-components'\r\nimport { bool, node } from 'prop-types'\r\nimport { radiusRound, transTextHover, primaryNormal, lineHeightTight } from '../../theme/units'\r\nimport { trimChildrenHorizontal } from '../../theme/utils/utils.mixins'\r\nimport getPropStylesFromTheme from '../../theme/utils/getPropStylesFromTheme'\r\nimport types from './Button.types'\r\nimport sizes from './Button.sizes'\r\n\r\nconst tm = {\r\n  borderRadius: radiusRound,\r\n  transition: transTextHover,\r\n  weight: primaryNormal,\r\n  lineHeight: lineHeightTight,\r\n  types,\r\n  sizes\r\n}\r\n\r\nconst StyledButton = styled.button`\r\n  border-radius: ${tm.borderRadius};\r\n  transition: ${tm.transition};\r\n  font-weight: ${tm.weight};\r\n  line-height: ${tm.lineHeight};\r\n  border: 0;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  min-height: 1rem;\r\n  min-width: 3rem;\r\n  vertical-align: baseline;\r\n\r\n  ${props => !props.large && !props.small && getPropStylesFromTheme(tm, 'sizes', 'default')} ${props =>\r\n      props.small && getPropStylesFromTheme(tm, 'sizes', 'sm')} ${props =>\r\n      props.large && getPropStylesFromTheme(tm, 'sizes', 'lg')} ${props =>\r\n      !props.primary && !props.secondary && getPropStylesFromTheme(tm, 'types', 'default')} ${props =>\r\n      props.primary && getPropStylesFromTheme(tm, 'types', 'primary')} ${props =>\r\n      props.secondary && getPropStylesFromTheme(tm, 'types', 'secondary')} ${trimChildrenHorizontal};\r\n`\r\n\r\nfunction Button ({primary, secondary, large, small, children}) {\r\n  return (\r\n    <StyledButton\r\n      primary={primary}\r\n      secondary={secondary}\r\n      large={large}\r\n      small={small}\r\n    >\r\n      {children}\r\n    </StyledButton>\r\n  )\r\n}\r\n\r\nButton.propTypes = {\r\n  primary: bool,\r\n  secondary: bool,\r\n  large: bool,\r\n  small: bool,\r\n  children: node\r\n}\r\n\r\nButton.defaultProps = {\r\n  primary: false,\r\n  secondary: false,\r\n  large: false,\r\n  small: false,\r\n  children: null\r\n}\r\n\r\nexport default Button\r\n","examples":[]},{"name":"HelloWorld","description":"Component that says 'Hello' to the world","props":{"message":{"type":{"name":"string"},"required":false,"description":"Message to be displayed","defaultValue":{"value":"'World'","computed":false}}},"code":"import React from 'react'\r\nimport { string } from 'prop-types'\r\n\r\n/** Component that says 'Hello' to the world */\r\nfunction HelloWorld({message = 'World'}) {\r\n  return <div>Hello {message}</div>\r\n}\r\n\r\nHelloWorld.propTypes = {\r\n  /** Message to be displayed */\r\n  message: string\r\n}\r\n\r\nexport default HelloWorld","examples":[]},{"name":"IconButton","description":"","props":{"icon":{"type":{"name":"string"},"required":true,"description":""},"children":{"type":{"name":"node"},"required":false,"description":"","defaultValue":{"value":"null","computed":false}}},"code":"import React from 'react'\r\nimport { string, node } from 'prop-types'\r\nimport getIcon from '../../theme/utils/utils.icons'\r\nimport IconButtonIcon from './IconButtonIcon'\r\nimport IconButtonButton from './IconButtonButton'\r\n\r\nconst IconButton = props => {\r\n  const iconOnly = !props.children // no children means its an icon only button\r\n  const icon = getIcon(props.icon)\r\n\r\n  if (iconOnly && !icon) return null\r\n\r\n  return (\r\n    <IconButtonButton {...props} iconOnly={iconOnly}>\r\n      <IconButtonIcon {...props} iconOnly={iconOnly}>\r\n        {icon}\r\n      </IconButtonIcon>\r\n      {props.children}\r\n    </IconButtonButton>\r\n  )\r\n}\r\n\r\nIconButton.propTypes = {\r\n  icon: string.isRequired,\r\n  children: node\r\n}\r\n\r\nIconButton.defaultProps = {\r\n  children: null\r\n}\r\n\r\nexport default IconButton\r\n","examples":[]},{"name":"Label","description":"","props":{"htmlFor":{"type":{"name":"string"},"required":true,"description":""},"label":{"type":{"name":"string"},"required":true,"description":""},"required":{"type":{"name":"bool"},"required":false,"description":"","defaultValue":{"value":"false","computed":false}}},"code":"import React from 'react'\r\nimport { string, bool } from 'prop-types'\r\nimport { Label as StyledLabel, RequiredSymbol } from './Label.styles'\r\n\r\nfunction Label({ htmlFor, label, required }) {\r\n  return (\r\n    <StyledLabel htmlFor={htmlFor}>\r\n      {label} {required && <RequiredSymbol title=\"Required field\" />}\r\n    </StyledLabel>\r\n  )\r\n}\r\n\r\nLabel.propTypes = {\r\n  htmlFor: string.isRequired,\r\n  label: string.isRequired,\r\n  required: bool\r\n}\r\n\r\nLabel.defaultProps = {\r\n  required: false\r\n}\r\n\r\nexport default Label\r\n","examples":[]},{"name":"TextInput","description":"","props":{"htmlId":{"type":{"name":"string"},"required":true,"description":""},"name":{"type":{"name":"string"},"required":true,"description":""},"label":{"type":{"name":"string"},"required":true,"description":""},"type":{"type":{"name":"enum","value":[{"value":"'text'","computed":false},{"value":"'email'","computed":false},{"value":"'number'","computed":false},{"value":"'password'","computed":false},{"value":"'tel'","computed":false}]},"required":false,"description":"","defaultValue":{"value":"'text'","computed":false}},"required":{"type":{"name":"bool"},"required":false,"description":"","defaultValue":{"value":"false","computed":false}},"onChange":{"type":{"name":"func"},"required":true,"description":""},"placeholder":{"type":{"name":"string"},"required":false,"description":"","defaultValue":{"value":"''","computed":false}},"value":{"type":{"name":"string"},"required":false,"description":"","defaultValue":{"value":"''","computed":false}},"error":{"type":{"name":"string"},"required":false,"description":"","defaultValue":{"value":"null","computed":false}},"children":{"type":{"name":"node"},"required":false,"description":"","defaultValue":{"value":"null","computed":false}}},"code":"import React from 'react'\r\nimport { string, oneOf, bool, func, node } from 'prop-types'\r\nimport Label from '../Label/index'\r\nimport { Field, Input, Error } from './TextInput.styles'\r\n\r\nfunction TextInput({ htmlId, name, label, type, required, onChange, placeholder, value, error, children, ...props }) {\r\n  return (\r\n    <Field>\r\n      <Label htmlFor={htmlId} label={label} required={required} />\r\n      <Input\r\n        id={htmlId}\r\n        type={type}\r\n        name={name}\r\n        placeholder={placeholder}\r\n        value={value}\r\n        onChange={onChange}\r\n        error={error}\r\n        {...props}\r\n      />\r\n      {children}\r\n      {error &&\r\n        <Error>\r\n          {error}\r\n        </Error>}\r\n    </Field>\r\n  )\r\n}\r\n\r\nTextInput.propTypes = {\r\n  htmlId: string.isRequired,\r\n  name: string.isRequired,\r\n  label: string.isRequired,\r\n  type: oneOf(['text', 'email', 'number', 'password', 'tel']),\r\n  required: bool,\r\n  onChange: func.isRequired,\r\n  placeholder: string,\r\n  value: string,\r\n  error: string,\r\n  children: node\r\n}\r\n\r\nTextInput.defaultProps = {\r\n  type: 'text',\r\n  required: false,\r\n  placeholder: '',\r\n  value: '',\r\n  error: null,\r\n  children: null\r\n}\r\n\r\nexport default TextInput\r\n","examples":[]},{"name":"Wrapper","description":"","props":{"children":{"type":{"name":"node"},"required":false,"description":"","defaultValue":{"value":"null","computed":false}}},"code":"import React from 'react'\r\nimport { node } from 'prop-types'\r\nimport styled from 'styled-components'\r\nimport { md } from '../../theme/spacers'\r\n\r\nconst StyledDiv = styled.div`\r\n  padding: ${md};\r\n`\r\n\r\nfunction Wrapper (props) {\r\n  return <StyledDiv>{props.children}</StyledDiv>\r\n}\r\n\r\nWrapper.propTypes = {\r\n  children: node\r\n}\r\n\r\nWrapper.defaultProps = {\r\n  children: null\r\n}\r\n\r\nexport default Wrapper\r\n","examples":[]}]