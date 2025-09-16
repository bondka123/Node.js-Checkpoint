const generatePassword = require('generate-password');

function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 10,
  numbers: true,
  symbols: true        
  });

  console.log("Mot de passe généré :", password);
}

generateRandomPassword();
