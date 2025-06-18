const introData = {
    firstname: "Adrien",
    lastname: "GARROUSTE",
    title: "Fullstack developer at Efficy",
    sentences: [
        "Former student in Master MIAGE at Paul Sabatier University in Toulouse.",
        "Master MIAGE equivalent to a Master's level degree in computing, programming, databases design, project management.",
        "Passionate about running and computer science, working on side projects during my free time."
    ],
    networks: [
        { name: "Github", url: "https://github.com/garrou" },
        { name: "RootMe", url: "https://www.root-me.org/ER-280652" },
        { name: "Linkedin", url: "https://linkedin.com/in/adriengarrouste" },
        { name: "Strava", url: "https://strava.com/athletes/87349975" }
    ]
};

function createIntroComponent(data) {
    const container = document.getElementById('app-main');

    container.appendChild(createElement('h1', `${data.firstname} ${data.lastname}`, null));
    container.appendChild(createElement('p', data.title, 'subtitle'));

    const sentencesDiv = createElement('div', null, 'sentences');
    data.sentences.forEach(sentence => sentencesDiv.appendChild(createElement('p', sentence, 'sentence')));
    container.appendChild(sentencesDiv);

    const networksDiv = createElement('div', null, 'networks');
    data.networks.forEach(network => {
        const a = createLinkElement('a', network.url, null);
        a.appendChild(createImageElement(`images/${network.name.toLowerCase()}.svg`, `${network.name} logo`, "icon"));
        networksDiv.appendChild(a);
    });
    container.appendChild(networksDiv);
}

document.addEventListener('DOMContentLoaded', function () {
    createIntroComponent(introData);
});

/**
 * @param {string} tag 
 * @param {string?} textContent 
 * @param {string?} className 
 * @returns {HTMLElement}
 */
function createElement(tag, textContent, className) {
    const element = document.createElement(tag);

    if (textContent) {
        element.textContent = textContent;
    }
    if (className) {
        element.className = className;
    }
    return element;
}

/**
 * @param {string} href
 * @param {string} className 
 * @returns {HTMLElement}
 */
function createLinkElement(href, className) {
    const a = document.createElement('a');
    a.className = className;
    a.href = href;
    a.target = '_blank';
    return a;
}

/**
 * @param {string} src 
 * @param {string} alt 
 * @param {string} className 
 * @returns {HTMLElement}
 */
function createImageElement(src, alt, className) {
    const img = document.createElement('img');
    img.className = className;
    img.src = src;
    img.alt = alt;
    return img;
}