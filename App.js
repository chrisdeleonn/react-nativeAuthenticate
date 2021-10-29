import React, { useState } from "react";
import { TextInput, Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./src/styles/styles";

export default function App() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	return (
		<View style={styles.inputView}>
			<Image source={require("./assets/bb.png")} style={styles.bgImage} />
			<TextInput
				style={styles.TextInput}
				placeholder="some text here"
				placeholderTextColor="#003f5c"
				onChangeText={(email) => setEmail(email)}
			/>
			<TouchableOpacity>
				<Text style={styles.forgot_button}>Forgot Password?</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.loginBtn}>
				<Text style={styles.loginText}>LOGIN</Text>
			</TouchableOpacity>
		</View>
	);
}
