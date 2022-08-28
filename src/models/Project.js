class Project {

    /**
     * @param {json} json 
     * @param {colors} json
     */
    constructor(json, colors) {
        this.name = json['name'];
        this.description = json['description'] == null ? '' : json['description'];
        this.htmlUrl = json['html_url'];
        this.language = json['language'];
        this.color = colors[json['language']];
    }
}

module.exports = Project;