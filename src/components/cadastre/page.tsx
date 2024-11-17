"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Cadastrar() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const router = useRouter();
  
    const handleRegister = async (event: React.FormEvent) => {
      event.preventDefault();
    
      const response = await fetch('https://pi2-fatec.onrender.com/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      });
    
      console.log('Status da resposta:', response.status); // Adicione este log
    
      
    };
  
    return (
      <div>
        <h1>Cadastro de Usuário</h1>
        <form onSubmit={handleRegister}>
          <label>Nome:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          <br />
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <br />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    );
  }