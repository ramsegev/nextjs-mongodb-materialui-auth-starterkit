import React from 'react';
import Layout from '../components/Layout/Layout';
import { Typography, Container } from '@mui/material';

export default function Home() {
    return (
        <Layout>
            <Container>
                <Typography variant="h4" component="h1" gutterBottom>
                    Welcome to the Next.js MongoDB Material-UI Auth Starter Kit
                </Typography>
            </Container>
        </Layout>
    );
}
