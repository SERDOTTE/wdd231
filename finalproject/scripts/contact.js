// contact.js
document.addEventListener('DOMContentLoaded', () => {
    // Confirm button saves date/time to localStorage
    const confirmBtn = document.querySelector('.confirm');
    if (confirmBtn) {
        confirmBtn.addEventListener('click', function () {
            const dateValue = document.getElementById('date').value;
            const timeValue = document.getElementById('time').value;
            if (dateValue && timeValue) {
                // Saves to localStorage
                localStorage.setItem('confirmedDate', dateValue);
                localStorage.setItem('confirmedTime', timeValue);
                // Updates hidden fields (optional)
                document.getElementById('confirmedDate').value = dateValue;
                document.getElementById('confirmedTime').value = timeValue;
                alert(`Date and time confirmed:\n${dateValue} at ${timeValue}`);
            } else {
                alert('Please select both date and time.');
            }
        });
    }

    // When submitting the form, it shows a success modal with the data
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevents traditional submission

            // Collects all form data
            const formData = {
                name: contactForm.name.value,
                email: contactForm.email.value,
                phone: contactForm.phone.value,
                services: Array.from(contactForm.querySelectorAll('input[name="service"]:checked')).map(cb => cb.value),
                date: localStorage.getItem('confirmedDate') || contactForm.date.value,
                time: localStorage.getItem('confirmedTime') || contactForm.time.value,
                address: contactForm.address.value,
                number: contactForm.number.value,
                neighborhood: contactForm.neighborhood.value,
                city: contactForm.city.value
            };
            // Saves to localStorage
            localStorage.setItem('lastContactSubmission', JSON.stringify(formData));

            // Builds HTML for the data
            let html = '<ul>';
            for (const key in formData) {
                html += `<li><strong>${key}:</strong> ${Array.isArray(formData[key]) ? formData[key].join(', ') : formData[key]}</li>`;
            }
            html += '</ul>';
            document.getElementById('success-modal-data').innerHTML = html;

            // Displays the modal
            const modal = document.getElementById('success-modal');
            modal.style.display = 'flex';

            // Button to close the modal
            document.getElementById('close-modal-btn').onclick = function() {
                document.getElementById('success-modal').style.display = 'none';
            };
        });
    }
});