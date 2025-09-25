function submitData(name, email) {
  // data we want to send
  const formData = {
    name: name,
    email: email,
  };

  // configuration object
  const configObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  // send POST request and return it
  return fetch("http://localhost:3000/users", configObject)
    .then(function (response) {
      return response.json(); // parse response
    })
    .then(function (object) {
      // append the new id to the DOM
      const body = document.querySelector("body");
      const p = document.createElement("p");
      p.textContent = `New User ID: ${object.id}`;
      body.appendChild(p);
    })
    .catch(function (error) {
      // handle errors and show them in DOM
      const body = document.querySelector("body");
      const p = document.createElement("p");
      p.textContent = `Error: ${error.message}`;
      body.appendChild(p);
    });
}

