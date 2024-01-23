import { useState } from "react";
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
	console.log(auth)
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
    createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed up 
				const user = userCredential.user;
				console.log('user signed in:', user)
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log('error')
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