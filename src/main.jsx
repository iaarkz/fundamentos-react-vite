import './index.css';
import { createRoot } from 'react-dom/client';
import React from 'react';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
	<div>
		<Primeiro />
		<ComParametro
			titulo='segundo componente'
			subtitulo='daora pessual'
			aluno='João'
			nota={9.3}
		/>
		<ComParametro aluno='Maria' nota={3.3} />
	</div>
);
