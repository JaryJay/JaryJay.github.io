export interface BlogPost {
	title: string;
	slug: string;
	date: string;
	excerpt: string;
}

export const blogPosts: BlogPost[] = [
	{
		title: 'How to Actually Manage Your Time Better',
		slug: 'time-management',
		date: '2024-10-03',
		excerpt: 'Analyzing the gap between your status quo and your goal, and putting systems in place to close it.',
	},
];
