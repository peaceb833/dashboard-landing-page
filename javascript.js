const transactionButtons = document.querySelectorAll('.transactions button');
  const transactionDetails = document.querySelectorAll('.transactions-details');

  transactionButtons.forEach(button => {
    button.addEventListener('click', () => {
      transactionButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      const filter = button.textContent.toLowerCase();
      transactionDetails.forEach(detail => {
        detail.style.display = (filter === 'all' || detail.classList.contains(filter)) ? 'flex' : 'none';
      });
    });
  });

  const cardIcons = document.querySelectorAll('.cardss');
cardIcons.forEach(icon => {
  icon.addEventListener('mouseover', () => {
    icon.style.transform = 'scale(1.1)';
  });

  icon.addEventListener('mouseout', () => {
    icon.style.transform = 'scale(1)';
  });
});
    const modal = document.querySelector('.modal');
    const addCardButton = document.querySelector('.card-btn');
    addCardButton.addEventListener('click', () => {
    modal.style.display = 'block'; // Display the modalw a form/modal to add new card details
    });

    const bellIcon = document.querySelector('.fa-bell');
    bellIcon.addEventListener('click', () => {
        notificationDropdown.classList.toggle('active');
      // Show a notification dropdown with recent alerts/messages
    });


    const navLinks = document.querySelectorAll('nav ul li');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(item => item.classList.remove('active'));
    link.classList.add('active');
  });
});
const themeSwitcher = document.querySelector('.theme-switcher');
const body = document.body;

themeSwitcher.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  const isDarkMode = body.classList.contains('dark-theme');
  localStorage.setItem('darkMode', isDarkMode);
});

// const slideshowImages = document.querySelectorAll('.slideshow img');
// let currentSlide = 0;

// function showSlide(slideIndex) {
//   slideshowImages.forEach(image => image.style.display = 'none');
//   slideshowImages[slideIndex].style.display = 'block';
// }

// function nextSlide() {
//   currentSlide = (currentSlide + 1) % slideshowImages.length;
//   showSlide(currentSlide);
// }

// setInterval(nextSlide, 5000); // Auto advance every 5 seconds

//  function setCurrentDate() {
//     const currentDate = new Date();
//     const year = currentDate.getFullYear();
//     const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
//     const day = currentDate.getDate().toString().padStart(2, '0');
//     const formattedDate = `${year}-${month}-${day}`;

//     const dateInput = document.getElementById('dateInput');
//     dateInput.value = formattedDate;
//  }

//   // Call the function to set the current date when the page loads
//   setCurrentDate();



