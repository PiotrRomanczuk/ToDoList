const createNote = require('./createNote');
const getNoteById = require('./getNoteByID');
const getAllNotes = require('./getAllNotes');
const updateNoteById = require('./updateNoteById');
const deleteNoteById = require('./deleteNoteById');
const deleteAllNotes = require('./deleteAllNotes');

module.exports = {
	createNote,
	getNoteById,
	getAllNotes,
	updateNoteById,
	deleteNoteById,
	deleteAllNotes,
};
