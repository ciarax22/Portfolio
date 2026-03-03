import re

file_path = r'c:\Users\SIUM\Desktop\Portfolio\index.html'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Swap desktop nav
content = content.replace(
'''                <li><a href="#landing" class="navbar__link" data-i18n="nav_home">Home</a></li>
                <li><a href="#about" class="navbar__link" data-i18n="nav_about">About</a></li>
                <li><a href="#projects" class="navbar__link" data-i18n="nav_projects">Projects</a></li>''',
'''                <li><a href="#landing" class="navbar__link" data-i18n="nav_home">Home</a></li>
                <li><a href="#projects" class="navbar__link" data-i18n="nav_projects">Projects</a></li>
                <li><a href="#about" class="navbar__link" data-i18n="nav_about">About</a></li>'''
)

# Swap mobile nav
content = content.replace(
'''        <a href="#landing" class="mobile-menu-link" onclick="Portfolio.toggleMobileMenu()" data-i18n="nav_home">Home</a>
        <a href="#about" class="mobile-menu-link" onclick="Portfolio.toggleMobileMenu()" data-i18n="nav_about">About</a>
        <a href="#projects" class="mobile-menu-link" onclick="Portfolio.toggleMobileMenu()"
            data-i18n="nav_projects">Projects</a>''',
'''        <a href="#landing" class="mobile-menu-link" onclick="Portfolio.toggleMobileMenu()" data-i18n="nav_home">Home</a>
        <a href="#projects" class="mobile-menu-link" onclick="Portfolio.toggleMobileMenu()"
            data-i18n="nav_projects">Projects</a>
        <a href="#about" class="mobile-menu-link" onclick="Portfolio.toggleMobileMenu()" data-i18n="nav_about">About</a>'''
)

# Swap sections using regex
# find <section id="about">...</section>
about_match = re.search(r'(<section id="about">.*?</section>)', content, re.DOTALL)
projects_match = re.search(r'(<section id="projects">.*?</section>)', content, re.DOTALL)

if about_match and projects_match:
    about_text = about_match.group(1)
    projects_text = projects_match.group(1)
    
    # We replace the entire block starting from about to end of projects
    # Find the block containing both
    block_pattern = re.compile(r'<section id="about">.*?</section>\s*<section id="projects">.*?</section>', re.DOTALL)
    
    def replacer(m):
        return projects_text + '\n\n        ' + about_text
    
    new_content, count = block_pattern.subn(replacer, content)
    if count == 1:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("Success")
    else:
        print("Failed to replace sections block. Count:", count)
else:
    print("Failed to find sections")
