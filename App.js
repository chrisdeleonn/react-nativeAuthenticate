import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { TextInput, Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./src/styles/styles";

export default function App() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<View style={styles.container}>
			<Image source={require("./assets/bb.png")} style={styles.bgImage} />

			<StatusBar style="auto" />
			<View style={styles.inputView}>
				<TextInput
					style={styles.TextInput}
					placeholder="Email"
					placeholderTextColor="#003f5c"
					onChangeText={(email) => setEmail(email)}
				/>
			</View>

			<View style={styles.inputView}>
				<TextInput
					style={styles.TextInput}
					placeholder="Password"
					placeholderTextColor="#003f5c"
					secureTextEntry={true}
					onChangeText={(password) => setPassword(password)}
				/>
			</View>

			<TouchableOpacity>
				<Text style={styles.forgot_Btn}>Forgot Password?</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.login_Btn}>
				<Text style={styles.loginText}>LOGIN</Text>
			</TouchableOpacity>
		</View>
	);
}
