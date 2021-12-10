class ActivityModel {

    /**
     * @param {json} json 
     */
    constructor(json) {
        this.login = json['actor']['login'];
        this.repo = json['repo']['name'];
        this.repoUrl = "https://github.com/" + this.repo;
        this.date = new Date(json['created_at']).toLocaleDateString();
    }
}

module.exports = ActivityModel;