import React from 'react';
import Layout from '../components/Layout/Layout';
import Login from '../components/Auth/Login';

const LoginPage: React.FC = () => {
    return (
        <Layout>
            <Login />
        </Layout>
    );
};

export default LoginPage;
