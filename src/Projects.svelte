<script>
    export let projects;
</script>

<div class="row align-items-md-stretch mt-2">
    {#each projects as project}
        <div class="col-md-4 mb-4">
            <div class="h-100 p-5 text-white bg-dark rounded">
                <h2>{project.name}</h2>
                <p class="fw-bold text-muted fs-5">{project.language}</p>
                <p>{project.description}</p>
                <p>{project.createdAt}</p>
        
                {#if project.topics}
                    <p>
                        {#each project.topics as topic}
                            <span class="badge rounded-pill bg-dark">{ topic }</span>
                        {/each}
                    </p>
                {/if}
                <a href="{project.htmlUrl}" class="btn btn-outline-light"><i class="bi bi-github"></i></a>

                {#if project.homepage}
                    <a href="{project.homepage}" class="btn btn-outline-light"><i class="bi bi-link-45deg"></i></a>
                {/if}
            </div>
        </div>
    {/each}
</div>