function toggleMenu() {
    let sidebar = document.getElementById("sidebar");
    
    if (sidebar.classList.contains("open")){
        sidebar.classList.remove("open");
    } else {
        sidebar.classList.add("open");
    }
}