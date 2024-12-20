import React, { useState } from "react";
import { Text, View, Button, Modal, TouchableOpacity } from "react-native";
import styles from "./styles";
import ButtonCircle from "../../buttons/buttonCircle";
import InputAdd from "../../inputs/inputAdd";

type Data = {
  id: string;
  title: string;
  username: string;
  createdAt: string;
};

type CardProps = {
  data: Data;
};

export default function Card({ data }: CardProps) {
  const handleEdit = () => {
    console.log("Editar cliente", data.id);
  };
  const [visibleModalDel, setVisibleModalDel] = useState(false);
  const [visibleModalEdit, setVisibleModalEdit] = useState(false);

  // Função para abrir a modal
  const handleOpenModal = () => {
    setVisibleModalDel(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.email}>{data.username}</Text>
        <Text style={styles.dob}>
          {new Date(data.createdAt).toLocaleDateString()}
        </Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            title="Editar"
            className="editClient"
            onPress={() => setVisibleModalEdit(true)}
            color="#7104FF"
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Inativar"
            className="delet"
            onPress={handleOpenModal}
            color="#F44336"
          />
        </View>

        {/* Modal inativar perfil */}
        <Modal
          visible={visibleModalDel}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setVisibleModalDel(false)} // Fecha a modal
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <View
                style={{
                  alignItems: "center",
                  flexDirection: "row",
                  margin: 30,
                  marginRight: 150,
                }}
              >
                <ButtonCircle
                  className="return"
                  iconName="arrow-left"
                  onPress={() => setVisibleModalDel(false)} // Fecha a modal ao pressionar o ícone de voltar
                />
                <Text style={styles.modalTitle}>Inativar usuário</Text>
              </View>

              <Text style={styles.textDel}>
                Tem certeza que deseja inativar este usuário?
              </Text>

              {/* Botões */}
              <View style={styles.buttonRow}>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => setVisibleModalDel(false)}
                >
                  <Text style={styles.cancelButtonText}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => setVisibleModalDel(false)}
                >
                  <Text style={styles.deleteButtonText}>Inativar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        {/* Modal editar perfil */}
        <Modal
          visible={visibleModalEdit}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setVisibleModalEdit(false)} // Fecha a modal
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <View
                style={{
                  alignItems: "center",
                  flexDirection: "row",
                  margin: 30,
                  marginRight: 180,
                }}
              >
                <ButtonCircle
                  className="return"
                  iconName="arrow-left"
                  onPress={() => setVisibleModalEdit(false)} // Fecha a modal ao pressionar o ícone de voltar
                />
                <Text style={styles.modalTitle}>Editar perfil</Text>
              </View>

              {/* Input para o nome */}
              <View style={styles.inputContainer}>
                <InputAdd
                  iconName="user"
                  placeHolder="Nome completo"
                  defaultValue=""
                />
              </View>

              {/* Input para o email */}
              <View style={styles.inputContainer}>
                <InputAdd
                  iconName="envelope"
                  placeHolder="E-mail"
                  defaultValue=""
                />
              </View>

              {/* Input para confirmar email */}
              <View style={styles.inputContainer}>
                <InputAdd
                  iconName="envelope"
                  placeHolder="E-mail de confirmação"
                  defaultValue=""
                />
              </View>

              {/* Input para data de nascimento */}
              <View style={styles.inputContainer}>
                <InputAdd
                  iconName="calendar"
                  placeHolder="Data de Nascimento"
                  defaultValue=""
                />
              </View>

              {/* Input para a senha */}
              <View style={styles.inputContainer}>
                <InputAdd iconName="lock" placeHolder="Senha" defaultValue="" />
              </View>

              {/* Botões */}
              <View style={styles.buttonRow}>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => setVisibleModalEdit(false)}
                >
                  <Text style={styles.cancelButtonText}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.saveButton}
                  onPress={() => setVisibleModalEdit(false)}
                >
                  <Text style={styles.saveButtonText}>Salvar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}
