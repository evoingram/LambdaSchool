// Test away!
import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import { addNewAnimal as mockAddNewAnimal } from '../api';
import AnimalForm from './AnimalForm';

jest.mock('../api');

test('gate defaults to `unlocked` and `open`', async () => {
	mockAddNewAnimal.mockResolvedValueOnce({ id: 1 });
	// AAA Arrange, Act, Assert
	const { getByLabelText, getByText } = render(<AnimalForm />);
	// const component = render(<AnimalForm />)
	// const getByLabelText = component.getByLabelText;
	const speciesInput = getByLabelText(/species/i);
	const ageInput = getByLabelText(/age/i);
	const notesInput = getByLabelText(/notes/i);

	const newAnimal = {
		species: 'Test species',
		age: 'Test age',
		notes: 'test notes'
	};
	fireEvent.change(speciesInput, { target: { value: newAnimal.species } });
	fireEvent.change(ageInput, { target: { value: newAnimal.age } });
	fireEvent.change(notesInput, { target: { value: newAnimal.notes } });

	const submitButton = getByText(/submit!/i);

	fireEvent.click(submitButton);

	expect(mockAddNewAnimal).toHaveBeenCalledTimes(1);
	expect(mockAddNewAnimal).toHaveBeenCalledWith(newAnimal);

	wait(() => expect(getByText(/Test species/i)));
});

test('cannot be closed or opened if it is locked', () => {});
test('shows the controls and display', () => {});
test('displays if gate is open/closed and if it is locked/unlocked', () => {});
test('displays `Closed` if the `closed` prop is `true` and `Open` if otherwise', () => {});
test('displays `Locked` if the `locked` prop is `true` and `Unlocked` if otherwise', () => {});
test('when `locked` or `closed` use the `red-led` class', () => {});
test('when `unlocked` or `open` use the `green-led` class', () => {});
test('provide buttons to toggle the `closed` and `locked` states.', () => {});
test('buttons text changes to reflect the state the door will be in if clicked', () => {});
test('the closed toggle button is disabled if the gate is locked', () => {});
test('the locked toggle button is disabled if the gate is open', () => {});

/*
## Stretch Problem

This section is **optional** and not counted towards MVP. Start working on it after you're done with the main assignment.

- add `Redux` and [read this example in the docs](https://testing-library.com/docs/example-react-redux) to learn how to write tests for it.
*/
