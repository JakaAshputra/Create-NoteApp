import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import CustomButton from '../components/customButton';
import CustomTextInput from '../components/customTextInput';

const EditNote = ({ setCurrentPage, editCurrentNote, currentNote }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  
  // console.log(currentNote);
  useEffect(() => {
    setTitle(currentNote.title);
    setDesc(currentNote.desc);
  }, [currentNote]);

  console.log(EditNote);
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Edit Note</Text>
      <CustomTextInput
        text={title}
        onChange={setTitle}
        label="Judul"
        placeholder="Judul"
        numberOfLines={1}
        multiline={false}
        value={title}
      />
      <CustomTextInput
        text={desc}
        onChange={setDesc}
        label="Description"
        placeholder="Description"
        numberOfLines={4}
        multiline={true}
        value={desc}
      />
      <View style={styles.spacerTop}>
                <CustomButton
                    backgroundColor="#247881"
                    color="#fff"
                    text="Simpan"
                    width="1005"
                    onPress={() => {
                      editCurrentNote({
                        id: currentNote.id,
                        title: title,
                        desc: desc,
                      });
                      setCurrentPage('home');
                    }}
                    disabled={title === ""} 
                />
            </View>
            <View style={styles.spacerTop}>
                <CustomButton
                    backgroundColor="#DDDDDD"
                    color="#203239"
                    text="Kembali ke Home"
                    width="1005"
                    onPress={() => setCurrentPage('home')}
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
})
export default EditNote;
