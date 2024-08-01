import { config } from '@/config/env.config'
export class ApiServices {
	constructor() {
		this.baseUrl = config.serverUrl
	}
	async uploadPost(formData) {
		return await this.responseHandler(formData, 'POST', '/upload')
	}
	async getAllPosts() {
		return await this.responseHandler(null, 'GET', '/all-posts')
	}
	async getPost(id) {
		return await this.responseHandler(null, 'GET', `/post/${id}`)
	}
	async responseHandler(body, method, endpoint) {
		try {
			const response = await fetch(this.baseUrl + endpoint, {
				method: method,
				body: body ? body : null,
			})
			const responseMessage = await response.json()
			if (!response.ok) throw new Error(responseMessage.error || 'Something went wrong')
			return responseMessage
		} catch (error) {
			throw new Error(error)
		}
	}
}

const apiServices = new ApiServices()

export default apiServices
