'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'))

app.post('/submit', (req, res) => {
    const person = req.body.fullName
    const music = req.body.music
    const language = req.body.fav_language
    const drink = req.body.drink
    const email = req.body.email
    const message = req.body.message
    console.log(music.length)
    res.send(`
    ${htmlTop}
    <h3>Hi, ${person}!</h3>
    <p>Thank you for reaching out! I definitely apprecite you answering and I will keep in mind that you like ${drink}. I will also keep it noted that your favorite programming language is ${language} it's a great language! I also love to listen to ${music}  when I am coding!
    </p>
    <p>Thank you for the amazing message! It is greatly appreciated here is what we received:</p>
    <p> ${message}</p>
    <p> If I have any questions I will reply back to the email: ${email}</p>
    <p> Thanks again!</P>
    ${htmlBottom}
    `);
});

app.listen(PORT, ()=> {
    console.log(`Server listening on port ${PORT}...`);
});

let htmlTop = `<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">        
        <meta name="robots" content="noindex">
        <title>Jeremy Quihano</title>
        <link rel="icon" type="image/x-icon" href="favicon.ico">
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="main.css">
    </head>
    <body>
        <header>
            <h1>
                <img src="android-chrome-192x192.png" alt="Favicon">
                Jeremy Quihano
            </h1>
        </header>
        <nav>
            <a href="index.html">Home</a>
            <a href="contact.html">Contact</a>
            <a href="gallery.html">Gallery</a>
        </nav>
        <main>
        <section>
            <h2>
                Response
            </h2>`

let htmlBottom = `        </main>
<footer>
    <p>&copy; 2023 Jeremy Quihano</p>
</footer>
<script src=main.js" async defer></script>
</body>
</html>`