const nomeField = document.querySelector('#nome');
const data_nascimentoField = document.querySelector('#data_nascimento');
const generoField = document.querySelector('#genero');
const Nome_maeField = document.querySelector('#Nome_mae');
const cpfField = document.querySelector('#cpf');
const emailField = document.querySelector('#email');
const telefone_fixoField = document.querySelector('#telefone_fixo');
const telefone_celularField = document.querySelector('#telefone_celular');
const cepField = document.querySelector('#cep');
const enderecoField = document.querySelector('#endereco');
const estadoField = document.querySelector('#estado');
const complementoField = document.querySelector('#complemento');
const usiarioField = document.querySelector('#usuario');
const senhaField = document.querySelector('#senha');
const confirmar_senhaField = document.querySelector('#confirmar_senha');


form.addEventListener('submit', (event) => {

    let errors = []});

    
    if (nameField.value.trim() === '' || nameField.value.trim().length < 15 || nameField.value.trim().length > 80 ) {
        errors.push('O nome deve ter entre 15 e 80 caracteres.');
        
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailField.value.trim())) {
        errors.push('Por favor, insira um e-mail válido.');
    }

    
    if (senhaFieldField.value.trim().length < 8) {
        errors.push('A senha deve ter pelo menos 8 caracteres.');
    }
    
    if (senhaField.value.trim() !== confirmar_senhaField.value.trim()) {
        errors.push('As senhas não coincidem.');
    }
    
    const cpfRegex = /^\d{11}$/;
    if (!cpfRegex.test(cpfField.value.trim())) {
        errors.push('O CPF deve ter 11 dígitos.');
    }
    
    const phoneRegex = /^\d{10,11}$/;
    if (!phoneRegex.test(telefone_fixoField.value.trim())) {
        errors.push('O telefone fixo deve ter 10 ou 11 dígitos.');
    }
    if (!phoneRegex.test(telefone_celularField.value.trim())) {
        errors.push('O telefone celular deve ter 10 ou 11 dígitos.');
    }
    
    const dateOfBirth = new Date(data_nascimentoField.value);
    const today = new Date();
    if (isNaN(dateOfBirth.getTime()) || dateOfBirth >= today) {
        errors.push('A data de nascimento deve ser uma data válida e anterior a hoje.');
    }
    if (generoField.value === '') {
        errors.push('O gênero é obrigatório.');

    }
    const cepRegex = /^\d{8}$/;
    if (!cepRegex.test(cepField.value.trim())) {
        errors.push('O CEP deve ter 8 dígitos.');
        MessageEvent = 'O CEP deve ter 8 dígitos.';
    }

    
    if (enderecoField.value.trim() === '') {
        errors.push('O endereço é obrigatório.');
    }
    
    if (estadoField.value.trim() === '') {
        errors.push('O estado é obrigatório.');
    }
    
    if (complementoField.value.trim() === '') {
        errors.push('O complemento é obrigatório.');
    } 
    
    if (usiarioField.value.trim() === '') {
        errors.push('O usuário é obrigatório.');
        const usuárioRegex = /^[a-zA-Z]{6}$/;
        if (!usuárioRegex.test(usiarioField.value.trim())) {
            errors.push('O usuário deve ter 6 letras.');
        }
    }
    
    if (senhaField.value.trim() === '') {
        errors.push('A senha é obrigatória.');
        const senhaRegex = /^[a-zA-Z 0-9]{8}$/;
        if (!senhaRegex.test(senhaField.value.trim())) {
            errors.push('A senha deve ter 8 letras e números.');
        }
    }
    
    if (confirmar_senhaField.value.trim() === '') {
        errors.push('A confirmação da senha é obrigatória.');
        const confirmar_senhaRegex = /^[a-zA-Z 0-9]{8}$/;
        if (!confirmar_senhaRegex.test(confirmar_senhaField.value.trim())) {
            errors.push('A confirmação da senha deve ter 8 letras e números.');
        }
    }
    
    if (senhaField.value.trim() !== confirmar_senhaField.value.trim()) {
        errors.push('As senhas não coincidem.');
    }
    
    if (errors.length > 0) {
        event.preventDefault();
        alert(errors.join('\n'));
        

    } else {
        alert('Formulário enviado com sucesso!');
        mensageEvent = 'Formulário enviado com sucesso!';
        form.submit();
    }

    