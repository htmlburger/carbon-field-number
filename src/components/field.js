/**
 * The external dependencies.
 */
import React, { PropTypes } from 'react';
import { compose, withHandlers } from 'recompose';

/**
 * The internal dependencies.
 */
import Field from 'fields/components/field';
import withStore from 'fields/decorators/with-store';
import withSetup from 'fields/decorators/with-setup';

/**
 * Render a numeric field.
 *
 * @param  {Object}   props
 * @param  {String}   props.name
 * @param  {Object}   props.field
 * @param  {Function} props.handleChange
 */
export const NumberField = ({ name, field, handleChange }) => {
	return <input
		type="number"
		name={name}
		id={field.id}
		className="regular-text"
		value={field.value}
		max={field.max}
		min={field.min}
		step={field.step}
		pattern="[0-9]*"
		onChange={handleChange} />;
}

/**
 * Validate the props.
 *
 * @type {Object}
 */
NumberField.propTypes = {
	name: PropTypes.string.isRequired,
	field: PropTypes.shape({
		id: PropTypes.string.isRequired,
		value: PropTypes.string,
		min: PropTypes.number.isRequired,
		max: PropTypes.number.isRequired,
		step: PropTypes.number.isRequired,
	}).isRequired,
	handleChange: PropTypes.func.isRequired,
};

/**
 * Sync the input value with the store.
 *
 * @param  {Object}   props
 * @param  {Object}   props.field
 * @param  {Function} props.updateField
 * @return {Function}
 */
const handleChange = ({ field, updateField }) => ({ target: { value } }) => updateField(field.id, { value });

export default compose(
	withStore(),
	withSetup(),
	withHandlers({ handleChange })
)(NumberField);
