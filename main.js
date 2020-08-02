const listRepos = async username =>{
	const repos = await fetch(
	`https://api.github.com/users/${username}/repos?type=owner`
	).then(res=> res.json())
		.catch(error=>console.log(error))
		
		console.log("repos",repos)
		
	const markup = repos
		.map(
			repo =>
			`<li>
				<a href="${repo.html_url}">${repo.name}</a>
				(${repo.stargazers_count})
			</li>
			`
		)
		.join('')
		
	const content = document.getElementById('content')
	content.innerHTML = `<ul>${markup}</ul>`
}

listRepos('wengyilun')
