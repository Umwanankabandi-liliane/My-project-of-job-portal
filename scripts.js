// Function to show the home page
function showHomePage() {
    alert("Home Page clicked");
}

// Function to show the candidate page
function showCandidatePage() {
    alert("Candidate Page clicked");
}

// Function to show internship page
function showInternshipPage() {
    alert("Internship Page clicked");
}

// Function to show the employer page
function showEmployerPage() {
    alert("Employer Page clicked");
}

// Function to show the Create Account page
function showCreateAccount() {
    document.getElementById('createAccountForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
}

// Function to show the Login page
function showLoginPage() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('createAccountForm').style.display = 'none';
}

// Function to create an account
function createAccount() {
    const username = document.getElementById('createUsername').value;
    const password = document.getElementById('createPassword').value;
    const email = document.getElementById('createEmail').value;
    alert(`Account created for ${username}`);
}

// Function to log in
function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    alert(`Logged in as ${username}`);
}

// Function to search for jobs (For now, it just logs the search term)
function searchJobs() {
    const searchTerm = document.getElementById('jobSearch').value;
    alert(`Searching for jobs related to: ${searchTerm}`);
}

// Function to submit a job posting
function submitJob() {
    const jobTitle = document.getElementById('jobTitle').value;
    const companyName = document.getElementById('companyName').value;
    const jobDescription = document.getElementById('jobDescription').value;
    alert(`Job posted: ${jobTitle} at ${companyName}`);
}
