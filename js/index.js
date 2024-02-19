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
    document.querySelectorAll('section.portfolio, section.especialidades, .especialidades .especialidades-box, h2.titles').forEach(section => {
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