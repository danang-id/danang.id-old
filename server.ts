import path from "path"
import express from "express"

const port = process.env.PORT || 8000
const app = express()

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));
app.get('/ping', function (req, res) {
	return res.send('pong');
});
app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);
