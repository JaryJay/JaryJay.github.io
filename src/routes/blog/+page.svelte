<script lang="ts">
	import FadeIn from '$lib/components/FadeIn.svelte';
	import VerticalSection from '$lib/components/VerticalSection.svelte';
	import { blogPosts } from '$lib/blogPosts';
	import { kebabCase } from '$lib/kebabCase';
</script>

<svelte:head>
	<title>Jay's Blog</title>
	<meta name="description" content="Welcome to Jay's blog page!" />
</svelte:head>

<VerticalSection>
	<h2 class="section-label">Blog</h2>
	<div class="flex flex-col gap-4">
		{#each blogPosts as post, i}
			<FadeIn delay={i * 80}>
				<a
					href={`/blog/${kebabCase(post.slug)}`}
					class="group block rounded-lg border border-border px-4 py-3 transition-all duration-150 hover:border-brand hover:bg-muted/30 cursor-pointer"
				>
					<div class="flex items-start justify-between gap-4">
						<h3 class="heading-3 group-hover:text-brand transition-colors">
							{post.title}
						</h3>
						<time class="text-muted-foreground text-xs sm:text-sm whitespace-nowrap pt-1">
							{new Date(post.date).toLocaleDateString('en-US', {
								year: 'numeric',
								month: 'short',
								day: 'numeric',
								timeZone: 'UTC',
							})}
						</time>
					</div>
					<p class="text-muted-foreground text-lg leading-7 mt-1 line-clamp-2">{post.excerpt}</p>
				</a>
			</FadeIn>
		{/each}
	</div>
</VerticalSection>
