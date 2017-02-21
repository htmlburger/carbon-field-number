/**
 * The external dependencies.
 */
import React from 'react';
import { compose } from 'recompose';

/**
 * The internal dependencies.
 */
import Field from 'fields/components/field';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';

/**
 * Render a numeric field.
 *
 * @param  {Object}        props
 * @return {React.Element}
 */
export const NumberField = (props) => {
	return <p>Number field here.</p>;
}

export default compose(
	withStore(),
	withSetup()
)(NumberField);
