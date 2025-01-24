document.addEventListener("DOMContentLoaded", () => {
  // Select the menu button and navigation list
  const menuBtn = document.querySelector(".openbtn");
  const navList = document.getElementById("mySidepanel");

  if (menuBtn && navList) {
      // Toggle function
      menuBtn.addEventListener("click", () => {
          navList.classList.toggle("active"); // Toggle the 'active' class
      });
  }
});
