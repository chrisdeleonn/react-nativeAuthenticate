import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	bgImage: {
		width: 400,
		height: 350,
		marginBottom: 40,
	},
	TextInput: {
		height: 50,
		flex: 1,
		padding: 10,
		marginLeft: 20,
	},
	inputView: {
		backgroundColor: "#FFC0CB",
		borderRadius: 30,
		height: 45,
		marginBottom: 20,
		alignItems: "center",
		width: "70%",
	},
	forgot_Btn: {
		height: 30,
		marginBottom: 30,
	},
	login_Btn: {
		width: "80%",
		borderRadius: 25,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		marginTop: 40,
		backgroundColor: "#FF1493",
	},
});

export default styles;
