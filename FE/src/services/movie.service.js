import createApiClient from './api.service';

class MovieService {
    constructor (baseUrl = '/api/movies'){
        this.api = createApiClient(baseUrl);
    }
    async getAll(){
        return  (await this.api.get("/")).data;
    }
    async getOnePost(slug) {
        return (await this.api.get(`/${slug}`)).data;
    }
    async addPost(data) {
        return (await this.api.post("/", data)).data;
    }
    async deletePost(slug) {
        return (await this.api.delete(`/${slug}`)).data;
    }
    async updatePost(id, data) {
        return (await this.api.put(`/${id}/edit`, data)).data;
    }
    async logIn(data){
        return (await this.api.post(`/signin`, data)).data;
    }
}

export default new MovieService();