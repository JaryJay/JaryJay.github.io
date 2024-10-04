<script lang="ts">
	import { mediaQuery } from 'svelte-legos';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import * as Drawer from '$lib/components/ui/drawer/index.js';
	import { Button } from '$lib/components/ui/button/index.js';

	export let open = false;
	const isDesktop = mediaQuery('(min-width: 768px)');
</script>

{#if $isDesktop}
	<Dialog.Root bind:open>
		<Dialog.Content class="sm:max-w-[425px]">
			<slot />
		</Dialog.Content>
	</Dialog.Root>
{:else}
	<Drawer.Root bind:open>
		<Drawer.Content>
			<slot name="header">
				<Drawer.Header class="text-left">
					<Drawer.Title>Edit profile</Drawer.Title>
					<Drawer.Description>
						Make changes to your profile here. Click save when you're done.
					</Drawer.Description>
				</Drawer.Header>
			</slot>
			<slot />
			<slot name="footer">
				<Drawer.Footer class="pt-2">
					<Drawer.Close asChild let:builder>
						<Button variant="outline" builders={[builder]}>Close</Button>
					</Drawer.Close>
				</Drawer.Footer>
			</slot>
		</Drawer.Content>
	</Drawer.Root>
{/if}
