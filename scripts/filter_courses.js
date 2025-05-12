document.addEventListener("DOMContentLoaded", () => {
    // Select filter buttons
    const filterButtons = document.querySelectorAll('.button-container button');
    const allCoursesButton = document.querySelector('.button-container button:nth-child(1)');
    const wddCoursesButton = document.querySelector('.button-container button:nth-child(2)');
    const cseCoursesButton = document.querySelector('.button-container button:nth-child(3)');

    // Select course buttons and credit elements
    const courseButtons = document.querySelectorAll('.button-container__courses button');
    const creditsCountElement = document.getElementById('credits_count');
    const creditsCompletedElement = document.getElementById('credits_completed');

    // Function to remove the "active" class from all buttons
    const resetActiveButtons = () => {
        filterButtons.forEach(button => button.classList.remove('active'));
    };

    // Function to update the credits
    const updateCredits = (filteredCourses) => {
        const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
        const completedCredits = filteredCourses
            .filter(course => course.completed)
            .reduce((sum, course) => sum + course.credits, 0);

        creditsCountElement.textContent = `The total of course listed below is ${totalCredits} credits.`;
        creditsCompletedElement.textContent = `You have ${completedCredits} credits completed.`;
    };

    // Function to display filtered courses
    const filterCourses = (subject = null) => {
        const filteredCourses = subject
            ? courses.filter(course => course.subject === subject)
            : courses;

        updateCredits(filteredCourses);

        courseButtons.forEach(button => {
            const courseNumber = button.getAttribute('data-course-number');
            const course = courses.find(course => course.number == courseNumber);

            if (!subject || (course && course.subject === subject)) {
                button.style.display = 'block'; // Show the button
            } else {
                button.style.display = 'none'; // Hide the button
            }
        });
    };

    // Add click events to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            resetActiveButtons(); // Remove the "active" class from all buttons
            button.classList.add('active'); // Add the "active" class to the clicked button

            // Apply the filter based on the button text
            if (button === allCoursesButton) {
                filterCourses(); // Show all courses
            } else if (button === wddCoursesButton) {
                filterCourses('WDD'); // Filter WDD courses
            } else if (button === cseCoursesButton) {
                filterCourses('CSE'); // Filter CSE courses
            }
        });
    });

    // Initialize with all courses displayed
    filterCourses();
});