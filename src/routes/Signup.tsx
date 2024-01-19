import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const Signup = () => {
	const [ email, setEmail ] = useState<string>('');
	const [ password, setPassword ] = useState<string>('');

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	}
	
	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log('Email:', email);
    console.log('Password:', password);
    // You can add your authentication logic and API calls here
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed up 
				const user = userCredential.user;
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode);
				console.log(errorMessage);
				// ..
			});
  };

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="email">Email</label>
			<input
				type="email"
				name="email"
				id="email"
				value={email}
				onChange={handleEmailChange}
			/>
			<label htmlFor="password">Password</label>
			<input
				type="password"
				name="password"
				id="password"
				value={password}
				onChange={handlePasswordChange}
			/>
			<button type="submit">Sign Up</button>
		</form>
	);
}

export default Signup;