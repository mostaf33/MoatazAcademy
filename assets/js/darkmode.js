const toggleBtn =document.getElementById("toggleBtn");
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('darkmode');
if(document.body.classList.contains('darkmode')){
    toggleBtn.textContent = "Light Mode";
}else{
    toggleBtn.textContent = "Dark Mode";
}
});
