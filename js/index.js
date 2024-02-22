function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex';
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none';
}
//Start darkMode
function toggleDarkMode() {
    document.body.classList.toggle('dark');
    document.querySelectorAll('section.portfolio,.top-portfolio .txt-top-portfolio h1,.top-portfolio .txt-top-portfolio h2,.top-portfolio .txt-top-portfolio p, section.especialidades, .especialidades .especialidades-box,.aboutMe .txt-aboutMe h2,.aboutMe .txt-aboutMe h2 span,.aboutMe .txt-aboutMe p, h2.titles,form input,form textarea').forEach(section => {
        section.classList.toggle('dark');
    });
}
//darkMode outside sideBar
const chk = document.getElementById('chk');
chk.addEventListener('change', toggleDarkMode);

//darkMode in sideBar
const chkSideBar = document.getElementById('chkSideBar');
chkSideBar.addEventListener('change', toggleDarkMode);

//End darkMode