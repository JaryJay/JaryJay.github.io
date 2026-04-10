<button
	class="bg-stone-500 hover:bg-stone-400 pl-3 pr-1 py-[2px] rounded-full flex gap-1 items-center text-sm text-stone-200 hover:text-stone-100 group transition-colors"
>
	<slot />
	<span
		class="iconify size-4 sm:size-5 md:size-6 text-stone-200 group-hover:text-stone-100 transition-colors"
		data-icon="mdi:keyboard-arrow-right"
		data-inline="false"
	/>
</button>
