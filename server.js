const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.send('Hello World! My first Dockersized DevOps web application is running.')
});

function add(a, b) {
	return a + b;
}

if (require.main === module) {
	app.listen(PORT, () => {
		console.log('Server running on port ${PORT}');
	});
}

module.exports = { add };

