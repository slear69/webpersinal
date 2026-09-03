const hobbies = document.getElementById('hobbies');
const about = document.getElementById('about');
const projects = document.getElementById('projects');
const account = document.getElementById('account');
const aboutContent = document.getElementById('about-content');
const mainContent = document.getElementById('main-content');
const projectsContent = document.getElementById('projects-content');
const accountContent = document.getElementById('account-content');
const back = document.getElementById('back');
function abouts() 
{
  about.addEventListener('click', () => {
    aboutContent.style.display = 'block';
    mainContent.style.display = 'none';
  });
  projects.addEventListener('click', () => {
    projectsContent.style.display = 'block';
    mainContent.style.display = 'none';
  });
  account.addEventListener('click', () => {
    accountContent.style.display = 'block';
    mainContent.style.display = 'none';
  });
  back.addEventListener('click', () => {
    mainContent.style.display = 'block';
    aboutContent.style.display = 'none';
    projectsContent.style.display = 'none';
    accountContent.style.display = 'none';
  });
  document.getElementById("account").addEventListener("click", function () {
    window.location.href = "https://stardance.hackclub.com/@Slear69_githud/projects";
  });
}
abouts();