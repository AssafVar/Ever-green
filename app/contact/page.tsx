"use client";

import WithAuth from '@/components/auth/AuthChecker';
import Layout from '@/components/layout/layout';
import React from 'react';



const ContactPage: React.FC = () => {

    return (
        <WithAuth>
            <Layout>
            <div>
                <h1>
                    Contact page
                </h1>
            </div>
            </Layout>
        </WithAuth>
    )
}

export default ContactPage;