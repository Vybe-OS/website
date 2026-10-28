import { mount } from 'svelte';
import './styles/styles.css';
import './styles/about.css';
import './styles/downloads.css';
import App from './App.svelte';

export default mount(App, { target: document.getElementById('app') });
