import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#684AE8",
    marginBottom: 10,
    width: "90%",
    marginLeft: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    margin: 15,
  },
  content: {
    flex: 3,
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#666",
    marginBottom: 10,
  },
  email: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  dob: {
    fontSize: 12,
    color: "#999",
  },
  divider: {
    height: "100%",
    backgroundColor: "#684AE8",
    width: 1.5,
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
    margin: 5,
  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: -1,
    color: "#000",
  },
  textDel: {
    fontSize: 20,
    color: "#000",
    margin: 20,
    marginTop: 0,
    textAlign: "center",
    marginBottom: 20,
    padding: 10,
    fontWeight: "500",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  cancelButton: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: "#7104FF",
    marginRight: 70, // Espaçamento entre este botão e o próximo
  },
  deleteButton: {
    backgroundColor: "#F44336",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  cancelButtonText: {
    color: "#7104FF",
    fontSize: 16,
    fontWeight: "bold",
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  inputContainer: {
    width: "100%",
  },
  saveButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  saveButton: {
    backgroundColor: "#7104FF",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
});
export default styles;