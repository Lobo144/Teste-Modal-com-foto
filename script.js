// script.js

/*
document.addEventListener('DOMContentLoaded', () => {
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modal = document.getElementById('documentModal');
    const fileInput = document.getElementById('fileInput');
    const previewArea = document.getElementById('previewArea');

    openModalBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        previewArea.innerHTML = ''; // Limpa a área de pré-visualização
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            previewArea.innerHTML = ''; // Limpa a área de pré-visualização
        }
    });

    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const fileType = file.type;
                let preview;

                console.log(fileType)
                AQUI A PARTE IMPORTANTE DO MODAL 😎 PEGUEI 3 IMAGENS QUE ACHEI LEGAL PRA USAR AQUI, SÓ NÃO IMPLEMENTEI FIQUEI COM MEDO DE COMER BOSTA 🤓
                if (fileType.startsWith('image/')) {
                    preview = `<img src="${e.target.result}" alt="Documento Adicionado">`;
                } else if (fileType === 'application/pdf') {
                    preview = `<div class="icon">📄</div>`; // Aqui você pode usar uma imagem de ícone de PDF
                } else if (fileType === 'application/msword' || fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
                    preview = `<div class="icon">📄</div>`; // Aqui você pode usar uma imagem de ícone de DOC
                } else {
                    preview = `<div class="icon">📄</div>`; // Para outros tipos de documentos
                }

                previewArea.innerHTML = preview;
            };
            reader.readAsDataURL(file);
        }
    });
});
*/ 
const modal = document.getElementById("editModal");

// Obtém o botão que abre o modal
const openModalBtn = document.getElementById("openModalBtn");

// Obtém o <span> que fecha o modal
const closeModalSpan = document.querySelector(".close");

// Definições para o nome do documento e email
const documentNameElement = document.getElementById("documentName");
const docTitleInput = document.getElementById("docTitle");
const docContentTextarea = document.getElementById("docContent");
const userEmailInput = document.getElementById("userEmail");

// Simulação de dados do documento
const documentData = {
    name: " Documento de teste",
    title: "Título do Documento",
    content: "Conteúdo do Documento",
    userEmail: "usuario@example.com"
};

// Quando o usuário clica no botão, abre o modal
openModalBtn.onclick = function() {
    // Preenche o modal com os dados do documento
    documentNameElement.textContent = documentData.name;
    docTitleInput.value = documentData.title;
    docContentTextarea.value = documentData.content;
    userEmailInput.value = documentData.userEmail;

    modal.style.display = "block";
}

// Quando o usuário clica no <span> (x), fecha o modal
closeModalSpan.onclick = function() {
    modal.style.display = "none";
}

// Quando o usuário clica fora do conteúdo do modal, fecha o modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

