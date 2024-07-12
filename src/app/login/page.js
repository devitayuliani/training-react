'use client'
import { useState } from "react";
import styles from '../../styles/login.module.css';
import { useRouter } from "next/navigation";




const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault();
    // Replace with actual authentication logic
    if (username === 'user' && password === 'password') {
      router.push('/dashboard'); // Redirect to dashboard if authenticated
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleLogin}>
      <h1 className="text-black text-center">Silahkan Login!</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.input}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />
        <br />
        <div className ="flex justify-center">
        <button type="submit" className= {styles.button}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;