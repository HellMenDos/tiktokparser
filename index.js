const readline = require('readline-sync');
const { exec } = require("child_process");


list= ['hastag','user','trend','music']

const param = readline.keyInSelect(list, 'Parsing');



switch (list[param]) {

case 'hastag':
	const tag = readline.question("Тэг по которму парсить");
	const am = readline.question("Какое количество парсить");

	exec(`tiktok-scraper hashtag ${tag} -d -n  ${am}`, (error, stdout, stderr) => {
		exec(`rm -rf ${tag}`, (error, stdout, stderr) => {
			exec(`mv '#'${tag}  ${tag}`, (error, stdout, stderr) => {
			if (error) {
				console.log(error)
			}

			console.log(stdout)
			console.log(stderr)
	
			})
		})
	})
break;

case 'user':
	const username = readline.question("Пользователь по которому парсить");
	const am = readline.question("Какое количество парсить");

	exec(`tiktok-scraper user ${username} -d -n  ${am}`, (error, stdout, stderr) => {
		exec(`rm -rf ${tag}`, (error, stdout, stderr) => {
			exec(`mv '#'${tag}  ${tag}`, (error, stdout, stderr) => {
			if (error) {
				console.log(error)
			}

			console.log(stdout)
			console.log(stderr)
	
			})
		})
	})
break;

case 'trend':
	const am = readline.question("Какое количество парсить");

	exec(`tiktok-scraper trend -d -n  ${am}`, (error, stdout, stderr) => {
		exec(`rm -rf ${tag}`, (error, stdout, stderr) => {
			exec(`mv '#'${tag}  ${tag}`, (error, stdout, stderr) => {
			if (error) {
				console.log(error)
			}

			console.log(stdout)
			console.log(stderr)
	
			})
		})
	})
break;


case 'music':
	const musid = readline.question("id музыкальной композиции");
	const am = readline.question("Какое количество парсить");

	exec(`tiktok-scraper music ${musid} -n  ${am}`, (error, stdout, stderr) => {
		exec(`rm -rf ${tag}`, (error, stdout, stderr) => {
			exec(`mv '#'${tag}  ${tag}`, (error, stdout, stderr) => {
			if (error) {
				console.log(error)
			}

			console.log(stdout)
			console.log(stderr)
	
			})
		})
	})
break;

}
