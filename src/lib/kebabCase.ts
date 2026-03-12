export function kebabCase(str: string) {
	return str.toLowerCase().replace(/ /g, '-').toLocaleLowerCase();
}
