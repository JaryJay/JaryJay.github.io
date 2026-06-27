export interface Experience {
	title: string;
	company: string;
	time: string;
	location: string;
	description: string;
	/** Optional URL for the company logo image. */
	logoUrl?: string;
}

export const experiences: Experience[] = [
	{
		title: 'Deep Learning Software Engineering Intern',
		company: 'NVIDIA',
		time: 'Summer 2026',
		location: 'Santa Clara, CA',
		description: "Built evaluation harness CLI to A/B test adversarial agents. Currently analyzing GPU kernel host code for automotive safety.",
	},
	{
		title: 'Deep Learning Compiler Development Intern',
		company: 'Huawei',
		time: 'Fall 2025',
		location: 'Markham, ON',
		description:
			'Engineered a differential testing infrastructure to test ML compiler output against PyTorch. Wrote fuzz tester to procedurally generate & compile MLIR modules.',
	},
	{
		title: 'Software Engineering Intern',
		company: 'ETHGlobal',
		time: 'Winter 2025',
		location: 'Toronto, ON',
		description: 'Built a GitHub integration with TypeScript used by 6,400+ developers.',
	},
	{
		title: 'Software Developer Intern',
		company: 'LavaReach (now acquired)',
		time: 'Summer 2024',
		location: 'Toronto, ON',
		description:
			'I was the first software intern at an early-stage B2B sales research AI startup based in Toronto.',
	},
	{
		title: 'Full-stack Developer Intern',
		company: 'Nokia',
		time: 'Summer 2022',
		location: 'Remote',
		description:
			"Maintained an order-tracking system, built with Vue, for Nokia's hardware R&D teams.",
	},
];
