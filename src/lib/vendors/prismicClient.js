import * as prismic from "@prismicio/client"

const repositoryName = "m4-svelte-tutorial"

const createClient = (params) => {
	const client = prismic.createClient(repositoryName, params)

	return client
}

export default createClient
