
const generateButton = () => {
    fetch('https://randomuser.me/api/?results=1')
        .then(res => res.json())
        .then(data => displayUsers(data.results))
}

const displayUsers = users => {
    console.log(users[0])
    const userContainer = document.getElementById('user-container')
    userContainer.innerHTML = ''
    for (const user of users) {
        const userDiv = document.createElement('div')
        userDiv.innerHTML = `
            <img class = "rounded mx-auto d-block img-fluid" src = "${user.picture.large}">
            <h4> Name: ${user.name.title} ${user.name.first} ${user.name.last} </h4>
            <h6> Gender: ${user.gender} </h6>
            <h6> Email: ${user.email} </h6>
            <h6> Phone: ${user.phone} </h6>
            <h6> Location: ${user.location.city}, ${user.location.street.name} ${user.location.street.number}, ${user.location.state}, ${user.location.country} </h6>
        `
        userContainer.appendChild(userDiv)
    }
}