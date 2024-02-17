const express = require('express');
const app = express();
const fs = require('fs');

app.set('view engine', 'ejs');
// app.set('public', path.join(__dirname, 'public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/proiect.html');
});
//!!!!!!!!!!!!!!!!!!!!!!
/*
app.get('/404', (req, res) => {
  // res.sendFile(__dirname + '/404.ejs');
  res.render('/404');
});     */
//!!!!!!!!!!!!!!!!!!!!!

app.get('/adresa', function(req,res){
  res.render('adresa',{title:'Adresa', continut:'pagina generata cu EJS'});});

app.get('/signup', (req, res) => {
  res.sendFile(__dirname + '/public/creazacont.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/logare.html');
  });

app.post('/signup', (req, res) => {
  const email = req.body.email;
  const password = req.body.parola;
    console.log(email);
  const user = { email, password };
  fs.readFile('clienti.json', (err, data) => {
    let users = [];
    if (err) {
        console.error(err);
        res.send('Eroare la citirea fișierului de utilizatori.');
        return;
    }
    users = JSON.parse(data);
    const exista = users.find(user => user.email === email);
    if (exista) {
        res.send('Există deja un cont cu acest email!');
        return;
    }
    else{
    users.push(user);
    fs.writeFile('clienti.json', JSON.stringify(users), (err) => {
      if (err) {
        console.error(err);
        res.send('Eroare la înregistrarea utilizatorului.');
      } else {
        res.send('Contul a fost creat cu succes!');
      }
    });
    }
  });
});

app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.parola;
    
    fs.readFile('clienti.json', (err, data) => {
        if (err) {
          console.error(err);
          res.send('Eroare la citirea fișierului de utilizatori.');
          return;
        }
    
        const users = JSON.parse(data);
        const user = users.find(u => u.email === email && u.password === password);
    
        if (user) {
          res.send('Logare reușită!');
        } else {
          res.send('Adresa de email sau parola incorectă!');
        }
      });

  });

  app.use(function(req,res){

    res.redirect("404.html");
    
    });

app.listen(3000, () => {
  console.log('Serverul ascultă pe portul 3000');
});
