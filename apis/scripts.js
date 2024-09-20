const form = document.getElementById('form');
const username = document.getElementById('username');
const card = document.getElementById('profile-card');
const profilePicture = document.getElementById('profile-picture');
const profileName = document.getElementById('profile-name');
const profileUsername = document.getElementById('profile-username');
const profileBio = document.getElementById('profile-bio');
const profileFollowers = document.getElementById('profile-followers');
const profileFollowing = document.getElementById('profile-following');
const profileLink = document.getElementById('profile-link');
const darkModeToggle = document.getElementById('dark-mode-toggle');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const usernameValue = username.value.trim();
    
    if (usernameValue) {
        const xhr = new XMLHttpRequest();
        const url = `https://api.github.com/users/${usernameValue}`;
        
        xhr.open('GET', url);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const data = JSON.parse(xhr.responseText);
                    profilePicture.src = data.avatar_url;
                    profileName.textContent = data.name || 'No Name Available';
                    profileUsername.textContent = `@${data.login}`;
                    profileBio.textContent = data.bio || 'No Bio Available';
                    profileFollowers.textContent = `Followers: ${data.followers}`;
                    profileFollowing.textContent = `Following: ${data.following}`;
                    profileLink.href = data.html_url;
                    profileLink.textContent = 'Visit GitHub Profile';
                    card.style.display = 'block';
                } else {
                    alert('User not found');
                    card.style.display = 'none';
                }
            }
        };
        xhr.send();
    } else {
        alert('Please enter a username');
    }
    username.value = '';
});

// Dark mode toggle
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('form').classList.toggle('dark-mode');
    document.querySelectorAll('input[type="text"], input[type="submit"]').forEach(input => {
        input.classList.toggle('dark-mode');
    });
    document.querySelector('.card').classList.toggle('dark-mode');
    document.querySelectorAll('.card-left, .card-right').forEach(div => {
        div.classList.toggle('dark-mode');
    });
    document.querySelector('.btn').classList.toggle('dark-mode');
});
