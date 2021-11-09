class Project {

    /**
     * @param {json} json 
     */
    constructor(json) {
        this.name = json['name'];
        this.description = json['description'];
        this.htmlUrl = json['html_url'];
        this.url = json['url'];
        this.language = json['language'];
        this.topics = json['topics'];
        this.createdAt = new Date(json['created_at']);
        this.updatedAt = new Date(json['updated_at']);
    }
}

module.exports = Project;