function showProjectDetails(projectId) {
    const details = {
        proyecto1: {
            title: 'Plataforma de E-commerce',
            description: 'Una tienda online interactiva con diseño responsivo para maximizar la experiencia del usuario.'
        },
        proyecto2: {
            title: 'Blog Multimedia',
            description: 'Un blog innovador con galerías de imágenes y videos para un influencer de viajes.'
        },
        proyecto3: {
            title: 'Portal Educativo',
            description: 'Portal interactivo con cursos dinámicos, foros y herramientas colaborativas para estudiantes.'
        }
    };

    const project = details[projectId];
    if (project) {
        document.getElementById('project-title').innerText = project.title;
        document.getElementById('project-description').innerText = project.description;
        document.querySelector('.project-details').classList.remove('hidden');
    }
}

function closeProjectDetails() {
    document.querySelector('.project-details').classList.add('hidden');
}
