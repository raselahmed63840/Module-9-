document.getElementById('fetch-users-btn').addEventListener('click', fetchUserData);

function fetchUserData() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      const container = document.getElementById('user-container');
      container.innerHTML = ''; // Clear existing data

      users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';

        userCard.innerHTML = `
          <h3>${user.name}</h3>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Phone:</strong> ${user.phone}</p>
          <p><strong>Company:</strong> ${user.company.name}</p>
        `;

        container.appendChild(userCard);
      });
    })
    .catch(error => {
      console.error('Error fetching users:', error);
    });
}
