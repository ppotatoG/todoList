import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import Header from './Header';
import Modal from './Modal';
import Todo from './Todo';
import Done from './Done';

import './style.css';

const rootNode = document.querySelector('.wrap');

ReactDOMClient.createRoot(rootNode).render(
    <>
        <Header/>
        <Modal/>
        <Todo/>
        <Done/>
    </>
);