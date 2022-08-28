<script>
	import Header from './components/Header.svelte';
	import Intro from './components/Intro.svelte';
	import ProjectCard from './components/ProjectCard.svelte';
	import Project from './models/Project';
	import { onMount } from 'svelte';

	export let apiKey;
	export let username;
	export let colors;

	const repoUrl = `https://api.github.com/users/${username}/repos?per_page=100&sort=created`;
	let projects = [];

	onMount(loadRepo);


	async function loadRepo() {
		const res = await fetch(repoUrl, {
			'headers': {
                'Authorization': apiKey
            }
		});
		projects = (await res.json())
					.map((json) => new Project(json, colors));
	}
</script>

<main>
	<div class="container py-4">
        <Header firstname="Adrien" lastname="GARROUSTE" />
    
        <Intro picture="profile.jpg" title="Développeur" intro="Étudiant en M2 MIAGE à l'université Paul Sabatier à Toulouse.
		Passionné par l'informatique, je réalise des projets personnels durant mon temps libre." />

        <div class="row align-items-md-stretch mt-2">
            {#each projects as project}
		        <ProjectCard project={project} />
            {/each}
        </div>
	</div>
</main>