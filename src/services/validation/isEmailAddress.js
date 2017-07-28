export default function isEmailAddress(email) {
  // RegEg used by W3C in browser email validation
  const re =/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  return re.test(email)
}