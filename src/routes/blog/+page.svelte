<script lang="ts">
	import DynamicGrid from "$lib/components/DynamicGrid.svelte";
	import { blogPosts } from "$lib/blogPosts";
	import { kebabCase } from "$lib/kebabCase";
</script>

<svelte:head>
	<title>Jay's Blog</title>
	<meta name="description" content="Welcome to Jay's blog page!" />
</svelte:head>

<h3 class="section-label">Blog</h3>
<p>This blog post is still under construction. It is half-baked. You have been warned.</p>
<DynamicGrid>
	{#each blogPosts as post}
			<a href={`/blog/${kebabCase(post.slug)}`} class="text-primary underline">{post.title}</a>
	{/each}
</DynamicGrid>