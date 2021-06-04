const fetcher = (
	...args: [input: RequestInfo, init?: RequestInit | undefined]
) => fetch(...args).then((response) => response.json());

export default fetcher;
