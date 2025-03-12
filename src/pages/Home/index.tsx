import { View, StyleSheet, Text, ScrollView } from "react-native";
import LittleLemonHeaderfrom from "../../../components/Header";
import { useState, useEffect } from "react";
import InputForms from "../../../components/input";
import Button from "../../../components/button";

function Home() {
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      <LittleLemonHeaderfrom />

      {/* Area do formulario */}
      <View style={[styles.forms]}>
        {/* Area dos input */}
        <View style={styles.imputArea}>
          <InputForms placeholder="Digite seu email:" onChangeText={setName} />
          <InputForms placeholder="Digite sua senha:" secureTextEntry={true} />
          <Button title="Log in" />
        </View>
        {/* Termina area inputs */}

        {/* Area botoes e links */}
      </View>
      {/* Termina area dos forms */}
      <View style={styles.botoesArea}>
        <Button title="Cadastrar" />
      </View>
      {/* <ScrollView style={showComments && styles.commentHub}>
        {showComments &&
          comments.map((comment) => {
            <Text>Total de comentarios</Text>;
            return comment;
          })}
      </ScrollView> */}
    </View>
  );
}

export default Home;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  forms: {
    // borderWidth: 1,
    flex: 2,
    width: "100%",
    gap: 8,
    alignItems: "center",
    justifyContent: "flex-end",
    // paddingVertical: 40,
  },

  label: {
    fontSize: 16,
    fontWeight: "bold",
  },

  // button: {
  //   borderWidth: 1,
  //   paddingVertical: 10,
  //   paddingHorizontal: 32,
  //   borderColor: "Black",
  //   borderRadius: 10,
  //   width: 140,
  //   alignItems: "center",
  // },

  commentHub: {
    flex: 1,
    width: "100%",
    backgroundColor: "lightblue",
    zIndex: 1,
  },

  imputArea: {
    flex: 2,
    // borderWidth: 1,
    gap: 26,

    justifyContent: "center",
  },

  botoesArea: {
    // justifyContent: "space-between",
    // borderWidth: 1,
    // flex: 1,
    alignItems: "center",
    paddingBottom: 45,
  },

  // cadastrarButton: {},
});

{
  /* <Button onPress={toggle} title="show comments" /> */
}
