<script>
    export let activities;
</script>

<table class="table table-dark">
    <thead>
        <tr>
            <th>Utilisateur</th>
            <th>Nom du repository</th>
            <th>Lien du repository</th>
            <th>Date d'activité</th>
        </tr>
    </thead>
    <tbody>
        {#each activities as activity}
            <tr>
                <td>{ activity.login }</td>
                <td>{ activity.repo }</td>
                <td><a class="text-white" href="{ activity.repoUrl }">{ activity.repoUrl }</a></td>
                <td>{ activity.date }</td>
            </tr>
        {/each}
    </tbody>   
</table>