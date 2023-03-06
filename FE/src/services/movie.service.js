import createApiClient from './api.service';

class MovieService {
    constructor (baseUrl = '/api/movies'){
        this.api = createApiClient(baseUrl);
    }
    async getAll(){
        return  (await this.api.get("/")).data;
    }
    async create(data) {
        return (await this.api.post("/", data)).data;
    }
    async delete(slug) {
        return (await this.api.delete(`${slug}`)).data;
    }
    async getOnePost(slug) {
        return (await this.api.get(`/${slug}`)).data;
    }
    async update(id, data) {
        return (await this.api.put(`/${id}/edit`, data)).data;
    }
}

export default new MovieService();