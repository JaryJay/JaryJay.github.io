<script lang="ts">
	import LineDecoration from '../../components/LineDecoration.svelte';
	import { projects } from './project';
	import ProjectCard from './ProjectCard.svelte';
</script>

<section class="home-section text-stone-700 space-y-1 md:space-y-4">
	<div class="flex gap-4 items-center">
		<h2 class="section-label">Projects</h2>
		<!-- <ArrowButton>More</ArrowButton> -->
	</div>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</section>
<LineDecoration class="absolute transform rotate-2" />
