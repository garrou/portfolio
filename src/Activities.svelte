<script>
    export let activities;
</script>

<table class="table table-dark">
    <thead>
        <tr>
            <th>Repo</th>
            <th>Date</th>
        </tr>
    </thead>
    <tbody>
        {#each activities as activity}
            <tr>
                <td>
                    <a class="text-white" href={activity.link}>{activity.repo}</a>
                </td>
                <td>{activity.date}</td>
            </tr>
        {/each}
    </tbody>   
</table>