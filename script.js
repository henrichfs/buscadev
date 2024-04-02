async function search() {
    const username = document.getElementById("search-input").value;
    const apiUrl = `https://api.github.com/users/${username}`
    const response = await fetch(apiUrl)
    const data = await response.json();

    if(!response.ok) {
        document.getElementById("not-found").style.display = "block"
    } else {
        document.getElementById("not-found").style.display = "none"
        showData()
    }

    function showData() {
        document.getElementById("icon").src = data.avatar_url
        document.getElementById("user").innerText = data.name
        document.getElementById("username").innerText = data.login
        document.getElementById("company").innerText = data.company
        document.getElementById("location").innerText = data.location
        document.getElementById("github-link").href = data.html_url
        document.getElementById("github-link").innerText = data.html_url.split("/").pop()
        document.getElementById("gist-link").href = `https://gist.github.com/${username}`
        document.getElementById("gist-link").innerText = `https://gist.github.com/${username}`.split("/").pop()
        document.getElementById("blog-link").href = data.blog
        document.getElementById("twitter-link").href = "https://twitter.com/" + data.twitter_username
        document.getElementById("followers").innerText = data.followers
        document.getElementById("following").innerText = data.following
        document.getElementById("repos").innerText = data.public_repos
        document.getElementById("gists").innerText = data.public_gists
        document.getElementById("bio").innerText = data.bio

        if (data.company == null) {
            document.getElementById("company").innerText = "Não Informado"
        }

        if (data.location == null) {
            document.getElementById("location").innerText = "Não Informado"
        }

        if (data.twitter_username == null) {
            document.getElementById("twitter-link").innerText = "Não Informado"
            document.getElementById("twitter-link").href = ""
        } else {
            document.getElementById("twitter-link").innerText = data.twitter_username
        }

        if (data.blog == "") {
            document.getElementById("blog-link").innerText = "Não Informado"
        } else {
            document.getElementById("blog-link").innerText = "Website"
        }

        if (data.bio == null) {
            document.getElementById("bio").innerText = "Bio Vazia"
        }
    }
}