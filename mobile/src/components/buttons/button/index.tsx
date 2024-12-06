import {
  View,
  Text,
  TouchableOpacityProps,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";

type StyleKeys =
  | "loading"
  | "return"
  | "enter"
  | "forgotYourPassword"
  | "register"
  | "confirm"
  | "cancel"
  | "cancelModal"
  | "save"
  | "delet"
  | "editarPerf"
  | "editClient";

type ButtonProps = TouchableOpacityProps & {
  title?: string;
  className: StyleKeys;
};

export default function Button({ title, className, ...rest }: ButtonProps) {
  let styleText;

  if (className === "forgotYourPassword") {
    styleText = { ...styles.forgotText };
  } else if (className === "register") {
    styleText = { ...styles.forgotText };
  } else if (className === "delet") {
    styleText = { ...styles.deletButtonText };
  } else if (className === "cancel") {
    styleText = { ...styles.textCancel };
  } else if (className === "editClient") {
    styleText = { ...styles.editClientButton };
  } else {
    styleText = { ...styles.buttonText };
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles[className], styles.button]} {...rest}>
        <Text style={styleText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
