const fs = require('fs');

const filePath = 'c:\\Users\\SIUM\\Desktop\\Portfolio\\index.html';
let content = fs.readFileSync(filePath, 'utf-8');

// Swap desktop nav
content = content.replace(
`                <li><a href="#landing" class="navbar__link" data-i18n="nav_home">Home</a></li>
                <li><a href="#about" class="navbar__link" data-i18n="nav_about">About</a></li>
                <li><a href="#projects" class="navbar__link" data-i18n="nav_projects">Projects</a></li>`,
`                <li><a href="#landing" class="navbar__link" data-i18n="nav_home">Home</a></li>
                <li><a href="#projects" class="navbar__link" data-i18n="nav_projects">Projects</a></li>
                <li><a href="#about" class="navbar__link" data-i18n="nav_about">About</a></li>`
);

// Swap mobile nav
content = content.replace(
`        <a href="#landing" class="mobile-menu-link" onclick="Portfolio.toggleMobileMenu()" data-i18n="nav_home">Home</a>
        <a href="#about" class="mobile-menu-link" onclick="Portfolio.toggleMobileMenu()" data-i18n="nav_about">About</a>
        <a href="#projects" class="mobile-menu-link" onclick="Portfolio.toggleMobileMenu()"
            data-i18n="nav_projects">Projects</a>`,
`        <a href="#landing" class="mobile-menu-link" onclick="Portfolio.toggleMobileMenu()" data-i18n="nav_home">Home</a>
        <a href="#projects" class="mobile-menu-link" onclick="Portfolio.toggleMobileMenu()"
            data-i18n="nav_projects">Projects</a>
        <a href="#about" class="mobile-menu-link" onclick="Portfolio.toggleMobileMenu()" data-i18n="nav_about">About</a>`
);

// Swap sections using regex
const aboutMatch = content.match(/(<section id="about">[\s\S]*?<\/section>)/);
const projectsMatch = content.match(/(<section id="projects">[\s\S]*?<\/section>)/);

if (aboutMatch && projectsMatch) {
    const aboutText = aboutMatch[1];
    const projectsText = projectsMatch[1];
    
    const blockPattern = /<section id="about">[\s\S]*?<\/section>\s*<section id="projects">[\s\S]*?<\/section>/;
    
    content = content.replace(blockPattern, projectsText + '\n\n        ' + aboutText);
    
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log("Success");
} else {
    console.log("Failed to find sections");
}
