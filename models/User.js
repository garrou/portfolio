class User {

    /**
     * @param {json} json 
     */
    constructor(json) {
        this.login = json['login'];
        this.name = json['name'];
        this.avater = json['avatar_url'];
        this.page = json['html_url'];
        this.repo = json['subscriptions_url'];
        this.location = json['location'];
    }

}   

module.exports = User;