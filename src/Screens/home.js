import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/customButton";

const NoteCard = ({item, setCurrentPage, deleteNote, updateNote}) => (
    <View style={styles.card}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text>{item.desc}</Text>
        <View style={styles.buttons}>
            <CustomButton
                backgroundColor="#FFC300"
                color="#151D3B"
                text="Ubah"
                fontSize={12}
                width={100}
                onPress={({}) => {
                    updateNote(item);
                    setCurrentPage('edit');
                }}
            />
            <CustomButton
                backgroundColor="#d82148"
                color="#fff"
                text="Hapus"
                fontSize={12}
                width={100}
                onPress={() => {
                    deleteNote(item.id);
                }}
            />
        </View>
    </View>
)

const Home = ({noteList, setCurrentPage, deleteNote, updateNote}) => (
    <View style={styles.container}>
        <CustomButton
            backgroundColor="#DDD"
            color="#203239"
            text="Tambahkan Note"
            width="100%"
            onPress={() => {
                setCurrentPage('add');
            }}
        />
        <FlatList
        showsVerticalScrollIndicator={false}
        data={noteList}
        renderItem={({item}) => (
        <NoteCard 
            setCurrentPage={setCurrentPage} 
            item={item} 
            deleteNote={deleteNote}
            updateNote={updateNote}/>
        )}
        keyExtractor={(item) => item.id}
        />
    </View>
)

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 20,
        marginTop: 20,
    },
    card: {
        padding: 10,
        marginVertical: 15,
        borderColor:'#DDD',
        borderWidth: 2,
        borderRadius: 5,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 5,
        color: '#203239',
    },
    buttons: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
})

export default Home