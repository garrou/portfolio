import App from './App.svelte';
import config from '../config/config.json';
import colors from '../config/colors.json';

const app = new App({
	target: document.body,
	props: {
		apiKey: config.api_key,
		username: config.username,
		colors: colors
	}
});

export default app;