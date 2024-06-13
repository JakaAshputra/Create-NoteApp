import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import CustomButton from '../components/customButton';
import CustomTextInput from '../components/customTextInput';

const EditNote = ({ setCurrentPage, noteList, setNoteList }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  // Function to update a note
  const updateNote = (id, newTitle, newDesc) => {
    const updatedNoteList = noteList.map(note => {
      if (note.id === id) {
        return { ...note, title: newTitle, desc: newDesc };
      }
      return note;
    });
    setNoteList(updatedNoteList);
  };

  // Function to delete a note
  const deleteNote = id => {
    const updatedNoteList = noteList.filter(note => note.id !== id);
    setNoteList(updatedNoteList);
    setCurrentPage('home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Edit Note</Text>
      <CustomTextInput
        text={title}
        onChange={setTitle}
        label="Title"
        placeholder="Title"
        numberOfLines={1}
        multiline={false}
      />
      <CustomTextInput
        text={desc}
        onChange={setDesc}
        label="Description"
        placeholder="Description"
        numberOfLines={4}
        multiline={true}
      />
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#247881"
          color="#fff"
          text="Save"
          width={100}
          onPress={() => {
            // Assuming you have the id of the note being edited
            // Update the note with the new title and description
            updateNote(noteId, title, desc);
            setCurrentPage('home');
          }}
        />
      </View>
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#d82148"
          color="#fff"
          text="Delete"
          width={100}
          onPress={() => {
            // Assuming you have the id of the note being edited
            // Delete the note
            deleteNote(noteId);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
  },
  pageTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: '#203239',
  },
  spacerTop: {
    marginTop: 30,
  },
});

export default EditNote;
