<script>
	import Activities from './Activities.svelte';
	import Projects from './Projects.svelte';
	import { onMount } from 'svelte';
	import ActivityModel from '../models/ActivityModel';
	import ProjectModel from '../models/ProjectModel';

	export let apiKey;
	export let username;

	const repoUrl = `https://api.github.com/users/${username}/repos?per_page=100&sort=created`;
	const activitiesUrl = `https://api.github.com/users/${username}/events/public?per_page=10`;

	let projects = [];
	let activities = [];
	let isAllLoaded = false;

	onMount(loadLessRepo);
	onMount(loadActivities);

	async function loadProjects() {
		if (isAllLoaded) {
			loadLessRepo();
		} else {
			loadAllRepo();
		}
	}

	async function loadLessRepo() {
		const res = await fetch(repoUrl, {
			'headers': {
                'Authorization': apiKey
            }
		});
		isAllLoaded = false;
		projects = (await res.json())
					.map((json) => new ProjectModel(json))
					.slice(0, 3);
	}

	async function loadAllRepo() {
		const res = await fetch(repoUrl, {
			'headers': {
                'Authorization': apiKey
            }
		});
		isAllLoaded = true;
		projects = (await res.json())
					.map((json) => new ProjectModel(json))
					.filter(project => project.name != username);	
	}

	async function loadActivities() {
		const res = await fetch(activitiesUrl, {
			'headers': {
                'Authorization': apiKey
            }
		}); 
		activities = (await res.json())
					.map((json) => new ActivityModel(json));
	}
</script>

<main>
	<div class="container py-4">
        <header class="pb-3 mb-4 border-bottom">
          <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
            <span class="fs-4">Adrien GARROUSTE</span>
          </a>
        </header>
    
        <div class="mb-4 bg-light rounded-3">
          <div class="container-fluid">
              <div class="row">
                <div class="col-md-4">
                    <img src="profile.jpg" class="img-fluid" alt="profil">
                </div>
                <div class="col-md-8">
                  <h1 class="display-5 fw-bold">Développeur</h1>
                  <p class="col-md-8 fs-5">
                      Étudiant en M1 MIAGE à l'université Paul Sabatier à Toulouse.
					  Passionné par l'informatique, je réalise des projets personnels durant mon temps libre.
                  </p>
				  <a href="https://github.com/1-irdA"><i class="bi bi-github fs-2 text-dark me-2"></i></a>
				  <a href="https://fr.linkedin.com/in/adrien-garrouste-7b747117b"><i class="bi bi-linkedin fs-2 text-dark"></i></a>
                </div>
              </div>
          </div>
        </div>

		<p class="fs-5">Activités récentes</p>

		<Activities activities={activities} />

		<p class="fs-5">Projets</p>

		<Projects projects={projects} />

		<div class="text-center">
			<button class="btn btn-dark mb-2" on:click={loadProjects}>
				{#if isAllLoaded}
					<i class="bi bi-dash-lg">&nbsp;Voir moins</i>
				{:else}
					<i class="bi bi-plus-lg">&nbsp;Voir plus</i>
				{/if}
			</button>
		</div>
	</div>
</main>