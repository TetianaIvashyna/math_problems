// Function to close modal
function closeModal() {
    const modal = document.getElementById('errorModal');
    if (modal) {
        modal.style.display = 'none';
    }
    focusAnswer();
}

// Function to clear answer input
function clearAnswer() {
    const answerInput = document.querySelector('#answer');
    if (answerInput) {
        answerInput.value = '';
        answerInput.focus();
    }
}

// Function to focus on answer input
function focusAnswer() {
    const answerInput = document.querySelector('#answer');
    if (answerInput) {
        answerInput.focus();
    }
}

// Add smooth transitions and animations
document.addEventListener('DOMContentLoaded', function() {
    // Focus on answer input when page loads
    focusAnswer();
    
    // Add enter key support for form submission
    const answerInput = document.querySelector('#answer');
    if (answerInput) {
        answerInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                document.querySelector('form').submit();
            }
        });
    }
    
    // Add loading state to submit button
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function() {
            const submitButton = document.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.textContent = 'Checking...';
                submitButton.disabled = true;
            }
        });
    }
    
    // Add number input validation
    if (answerInput) {
        answerInput.addEventListener('input', function(e) {
            // Only allow numbers
            e.target.value = e.target.value.replace(/[^0-9]/g, '');
        });
        
        // Close modal when clicking on answer input
        answerInput.addEventListener('focus', function() {
            closeModal();
        });
    }
});

// Function to show success message (for future use)
function showSuccess() {
    // This can be used when implementing success feedback
    console.log('Answer is correct!');
}

// Function to show next problem (for future use)
function showNextProblem() {
    // This can be used when implementing problem progression
    console.log('Moving to next problem...');
}