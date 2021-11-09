const axios = require('axios');
const Project = require('../models/Project');
const config = require('../config/config.json');

module.exports.home = async (req, res) => {
    const now = new Date();
    const limit = new Date(1900 + now.getYear(), now.getMonth(), 1);
    let projects = [];

    try {
        const response = await axios(`https://api.github.com/users/${config.username}/repos`, {
            'headers': {
                'Authorization': config.api_key
            }
        });
        projects = response.data.filter(project => new Date(project['created_at']) >= limit)
                                .map(project => new Project(project))
                                .sort((a, b) => b.createdAt - a.createdAt);
    } catch (err) {
        console.log(err);
    }
    
    res.render('index', {
        projects: projects,
        all: false
    });
}

module.exports.projects = async (req, res) => {
    let projects = [];

    try {
        const response = await axios(`https://api.github.com/users/${config.username}/repos`, {
            'headers': {
                'Authorization': config.api_key
            }
        });
        projects = response.data.map(project => new Project(project))
                                .filter(project => project.name != config.username)
                                .sort((a, b) => b.createdAt - a.createdAt);
    } catch (err) {
        console.log(err);
    }
    
    res.render('index', {
        projects: projects,
        all: true
    });
}