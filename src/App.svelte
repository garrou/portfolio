<script>
	import Intro from "./components/Intro.svelte";
</script>

<main>
	<Intro
		firstname="Adrien"
		lastname="GARROUSTE"
		title="Fullstack developer at Efficy"
		sentences={[
			"Former student in Master MIAGE at Paul Sabatier University in Toulouse.",
			"Master MIAGE equivalent to a Master's level degree in computing, programming, databases design, project management.",
			"Passionate about computer science, I realize side projects during my free time."
		]}
		networks={
			[
				{ name: "Github", url: "https://github.com/garrou" },
				{ name: "Linkedin", url: "https://linkedin.com/in/adriengarrouste" },
				{ name: "Strava", url: "https://strava.com/athletes/87349975" }
			]
		}
	/>
</main>

<style>
	main {
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
</style>