const users = [
    {name:"Prashant", age:21},
    {name:"Rahul", age:22}
];

const container = document.getElementById("container");

users.forEach(user=>{

    container.innerHTML += `
        <div class="card">
            <h2>${user.name}</h2>
            <p>${user.age}</p>
        </div>
    `;

});