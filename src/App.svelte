<script>
	import Project from './Project.svelte';
	import { onMount } from 'svelte';
	import ProjectModel from '../models/ProjectModel';

	export let apiKey;
	export let username;

	let projects = [];

	onMount(async () => {
		const res = await fetch(`https://api.github.com/users/${username}/repos`, {
			'headers': {
                'Authorization': apiKey
            }
		});
		projects = (await res.json())
					.map((json) => new ProjectModel(json))
					.sort((a, b) => b.createdAt - a.createdAt)
					.filter(project => project.name != username);
	});
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

		<p class="fs-5">Certains de mes projets</p>

		<div class="row align-items-md-stretch mt-2">
			{#each projects as project}
				<Project project={ project } />
			{/each}
		</div>
	</div>
</main>