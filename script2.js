function abrirTela(id, btn) {
    // Esconde todas as visualizações
    document.querySelectorAll('.view').forEach(v => v.classList.add('oculto'));
    
    // Mostra a selecionada
    const target = document.getElementById('view-' + id);
    if(target) target.classList.remove('oculto');

    // Atualiza o menu lateral
    if(btn) {
        document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
        btn.classList.add('active');
    }
}

function resgatar(btn) {
    btn.innerText = "Resgatado";
    btn.classList.add('resgatado');
    btn.disabled = true;
}

// Carregar nome do usuário do localStorage se existir
document.addEventListener("DOMContentLoaded", () => {
    const nome = localStorage.getItem("usuarioNome") || "Lucas Oliveira";
    document.getElementById("nomeUsuario").innerText = nome;
});