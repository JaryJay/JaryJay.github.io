<script lang="ts">
	import LineDecoration from '$lib/components/LineDecoration.svelte';
	import { projects } from '$lib/projects';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import VerticalSection from '$lib/components/VerticalSection.svelte';
	import DynamicGrid from '$lib/components/DynamicGrid.svelte';
</script>

<svelte:head>
	<title>Jay's Projects</title>
	<meta name="description" content="Welcome to Jay's projects page!" />
</svelte:head>

<VerticalSection>
	<h2 class="section-label">Projects</h2>
	<DynamicGrid>
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	</DynamicGrid>
</VerticalSection>
<LineDecoration class="absolute transform rotate-2" />
