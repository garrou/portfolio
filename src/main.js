import App from './App.svelte';
import config from '../config/config.json';

const app = new App({
	target: document.body,
	props: {
		apiKey: config.api_key,
		username: config.username
	}
});

export default app;