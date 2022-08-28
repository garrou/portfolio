<script>
    export let project;
</script>

<div class="col-md-4 mb-5">
    <div class="h-50 text-black rounded">
        <i class="bi bi-journal-code fs-4"></i>
        <a href="{project.htmlUrl}" class="text text-primary">{project.name}</a>

        {#if project.description}
            <p class="mt-2">{project.description}</p>
        {/if}

        {#if project.language}
            <p>
                <span class="color-badge" style="background-color: {project.color}"></span>
                {project.language}
            </p>
        {/if}
    </div>
</div>
