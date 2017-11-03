function mapConditionalProp (prop, theme) {
  const objProp = {}

  Object.keys(theme).forEach((type) => {
    objProp[type] = (theme[type][prop]) ? theme[type][prop] : theme.default[prop]
  })

  return objProp
}

export default mapConditionalProp
