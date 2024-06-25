function generatePassword(length, options) {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()-_=+';
    
    let charset = '';
    
    if (options.lowercase) {
        charset += lowercaseChars;
    }
    if (options.uppercase) {
        charset += uppercaseChars;
    }
    if (options.numbers) {
        charset += numberChars;
    }
    if (options.specialChars) {
        charset += specialChars;
    }
    
    if (charset.length === 0) {
        return 'Selecione pelo menos uma opção para gerar a senha.';
    }
    
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

document.addEventListener("DOMContentLoaded", function() {
    const generateBtn = document.getElementById("generate-btn");
    const passwordField = document.getElementById("password");
    const optionsForm = document.getElementById("password-options");

    generateBtn.addEventListener("click", function() {
        const options = {
            lowercase: optionsForm.elements.lowercase.checked,
            uppercase: optionsForm.elements.uppercase.checked,
            numbers: optionsForm.elements.numbers.checked,
            specialChars: optionsForm.elements.specialChars.checked
        };
        const passwordLength = Math.floor(Math.random() * 11) + 4; 
        const generatedPassword = generatePassword(passwordLength, options);
        passwordField.value = generatedPassword;
    });
});
document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;

    var mensagemEnvio = document.getElementById('mensagem-envio');
    var sucessoMsg = '<div class="mensagem-sucesso">Mensagem enviada com sucesso. Entraremos em contato em breve!</div>';
    var erroMsg = '<div class="mensagem-erro">Houve um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.</div>';

    setTimeout(function() {
        if (nome && email && mensagem) {
            mensagemEnvio.innerHTML = sucessoMsg;
            document.getElementById('form-contato').reset(); 
        } else {
            mensagemEnvio.innerHTML = erroMsg;
        }
        mensagemEnvio.style.display = 'block';
    }, 1000);
});