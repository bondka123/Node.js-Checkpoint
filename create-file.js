const fs = require('fs');

fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) {
    return console.error('Erreur lors de la création du fichier :', err);
  }
  console.log('Fichier welcome.txt créé avec succès !');
});
