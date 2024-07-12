'use client'
import { useState } from "react";
import styles from '../styles/Login.module.css';
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
    WELCOME HOME
    </div>
  );
};

export default LoginPage;