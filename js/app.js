const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".main__profile-name");
const unContainer = document.querySelector(".main__profile-username");
const reposContainer = document.querySelector(".main__profile-repos");
const urlContainer = document.querySelector(".main__profile-url");

const  client_id = "4a98a7ada7b4cb214d4e";
const client_secret = "a80452494fca0a2d8febd685c1cc86b5794a872f";


const fectch = async (user) => {
    const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`);

    const data = await api_call.json();
    return { data } 

};

const showdata = () => {
    fectch(inputValue.value).then((res) => {
        console.log(res);

        nameContainer.innerHTML = `Name: <span class="main__profile-value">${res.data.name}</span>`;
        unContainer.innerHTML = `Username: <span class="main__profile-value">${res.data.login}</span>`;
        reposContainer.innerHTML = `Repository: <span class="main__profile-value">${res.data.public_repos}</span>`;
        urlContainer.innerHTML = `URL: <span class="main__profile-value">${res.data.html_url}</span>`;
    })
};

searchButton.addEventListener("click", () => {
    showdata();
})