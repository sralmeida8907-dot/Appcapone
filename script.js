document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formAgendamento');
    const mensagemSucesso = document.getElementById('mensagemSucesso');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede que a página recarregue

        // 1. Coleta de todos os dados
        const nome = document.getElementById('nomeCliente').value;
        const data = document.getElementById('data').value;
        const hora = document.getElementById('hora').value;
        const servico = document.getElementById('servico').value;

        // CAMPOS DO PLANO
        const totalCortes = parseInt(document.getElementById('totalCortes').value);
        const cortesUsados = parseInt(document.getElementById('cortesUsados').value);
        const diasRestantes = parseInt(document.getElementById('diasRestantes').value);


        // 2. Processamento Simulado (O coração da lógica)

        // Lógica simples: Se o serviço for 'corte', a gente decrementa o uso
        let novosCortesUsados = cortesUsados;
        let mensagemAdicional = "";

        if (servico === 'corte' || servico === 'completo') {
            // Simula que um corte foi usado
            novosCortesUsados = cortesUsados + 1;

            // Verifica se o plano foi estourado
            if (novosCortesUsados > totalCortes) {
                mensagemAdicional = "⚠️ ALERTA: O plano de cortes foi excedido! Faltam cortes!";
            }
        }

        // 3. Preparação da Mensagem de Sucesso
        let confirmacao = `✅ Agendamento de ${nome} confirmado para ${data} às ${hora} (${servico}).`;

        // Se houver alerta de plano, adicionamos ele
        if (mensagemAdicional) {
             confirmacao += ` ${mensagemAdicional}`;
        }

        // 4. Visualizar no Console (Isso é o que você vê no código do seu computador)
        console.log("=========================================");
        console.log("--- REGISTRO DE PLANO ATUALIZADO ---");
        console.log(`Cliente: ${nome}`);
        console.log(`Novo Status: Cortes Usados -> ${novosCortesUsados} / Total: ${totalCortes}`);
        console.log(`Dias Restantes: ${diasRestantes}`);
        console.log("=========================================");


        // 5. Mostrar feedback visual para o usuário na tela
        mensagemSucesso.innerHTML = confirmacao;
        mensagemSucesso.style.display = 'block';

        // Opcional: Limpar o formulário após o sucesso
        form.reset();
    });
});
