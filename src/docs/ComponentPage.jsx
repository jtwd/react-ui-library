import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import Example from './Example';
import Props from './Props';

const ComponentPage = ({component}) => {
  const {name, description, props, examples} = component;

  return (
    <div className="componentpage">
      <h2>{name}</h2>
      <p>{description}</p>

      <h3>Example{examples.length > 1 && "s"}</h3>
      {
        examples.length > 0 ?
        examples.map( example => <Example key={example.code} example={example} componentName={name} /> ) :
        "No examples exist."
      }

      <h3>Props</h3>
      {
        props ?
        <Props props={props} /> :
        "This component accepts no props."
      }
    </div>
  )
};

ComponentPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  component: PropTypes.object.isRequired
};

export default ComponentPage;
