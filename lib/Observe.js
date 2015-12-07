export default async function Observe(fragments, scope) {
	const keys = Object.keys(fragments);
	const values = await Promise.all(keys.map(k => fragments[k]));

	return values.forEach((fragment, index) => scope[keys[index]] = fragment);
}
