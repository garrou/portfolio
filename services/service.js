const axios = require('axios');
const Project = require('../models/Project');
const User = require('../models/User');
const config = require('../config/config.json');

module.exports.home = async (req, res) => {
    const now = new Date();
    const limit = new Date(1900 + now.getYear() - 1, now.getMonth(), now.getDate());
    const resp = await axios(`https://api.github.com/users/1-irdA/repos?q=github+api=${config.api}`);
    const projects = resp.data.filter(project => new Date(project['created_at']) >= limit)
                            .filter(project => project.name != '1-irdA')
                            .map(project => new Project(project))
                            .sort((a, b) => b.createdAt - a.createdAt);
    res.render('index', {
        projects: projects
    });
}

module.exports.project = async (req, res) => {
    const name = req.params.name;
    const resp = await axios(`https://api.github.com/repos/1-irdA/${name}?q=github+api=${config.api}`);
    const project = new Project(resp.data);
    res.render('project', {
        project: project
    });
}