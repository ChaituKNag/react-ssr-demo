const express = require('express');
const app = express();
const React = require('react');
const {renderToString} = require('react-dom/server');
const pretty = require('pretty');

const App = ({ title }) => {
    return (
        <div>The app is ready</div>
    )
}



app.get('*', (req, res) => {
    const renderedHtml = renderToString(<App/>);
    res.send(pretty(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Page is fine</title>
</head>
<body>
  <h1>Hello World</h1>
  <div id="root">${renderedHtml}</div>
</body>
</html>
    `));
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})
