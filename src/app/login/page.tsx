import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <LoginForm />
        </div>
    );
}
