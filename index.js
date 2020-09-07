const onGreet = () => {
  const username = document.getElementById('username').value
  fetch(`http://localhost:8009/?username=${username}`)
    .then(response => {
      console.log(response.json())
    })
    .catch(error => console.error(error))
}
