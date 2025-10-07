// Function to hide error message
function hideError() {
    const errorMessage = document.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.classList.remove('show');
        // Hide after animation
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 300);
    }
}

// Function to show error message
function showError() {
    const errorMessage = document.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.style.display = 'block';
        errorMessage.classList.add('show');
    }
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