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
		date: '2024-01-15',
		excerpt:
			'Practical tips on defining what "good" time management means for you, analyzing the gap, and putting systems in place to close it.',
	},
];