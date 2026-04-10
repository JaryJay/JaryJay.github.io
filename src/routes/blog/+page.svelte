<script lang="ts">
	import FadeIn from '$lib/components/FadeIn.svelte';
	import VerticalSection from "@/lib/components/VerticalSection.svelte";
	import { blogPosts } from "$lib/blogPosts";
	import { kebabCase } from "$lib/kebabCase";
</script>

<svelte:head>
	<title>Jay's Blog</title>
	<meta name="description" content="Welcome to Jay's blog page!" />
</svelte:head>

<VerticalSection>
	<h3 class="section-label">Blog</h3>
	<div class="flex flex-col gap-4">
		{#each blogPosts as post, i}
			<FadeIn delay={i * 80}>
				<a href={`/blog/${kebabCase(post.slug)}`} class="group block rounded-lg border border-border px-4 py-3 transition-all duration-150 hover:border-primary hover:bg-muted/30 hover:-translate-y-0.5 cursor-pointer">
					<div class="flex items-start justify-between gap-4">
						<h4 class="text-base font-semibold sm:text-lg group-hover:text-primary transition-colors">
							{post.title}
						</h4>
						<time class="text-muted-foreground text-xs sm:text-sm whitespace-nowrap pt-1">
							{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
						</time>
					</div>
					<p class="text-muted-foreground text-sm sm:text-base mt-1 line-clamp-2">{post.excerpt}</p>
				</a>
			</FadeIn>
		{/each}
	</div>
</VerticalSection>
