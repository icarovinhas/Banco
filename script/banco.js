function consultar() {
    const codigoBanco = document.getElementById('idnumbanco').value;

    if (!codigoBanco) {
        alert('Por favor, insira um código de banco.');
        return;
    }

    fetch(`https://brasilapi.com.br/api/banks/v1/${codigoBanco}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Banco não encontrado.');
            }
            return response.json();
        })
        .then(data => {
            const tabelaCorpo = document.getElementById('tabela-corpo');
            tabelaCorpo.innerHTML = ''; // Limpa o conteúdo anterior

            const itens = [
                { item: 'Código', valor: data.code },
                { item: 'Nome', valor: data.name },
                { item: 'Nome Completo', valor: data.fullName },
                { item: 'ISPB', valor: data.ispb }
            ];

            itens.forEach(i => {
                const tr = document.createElement('tr');
                const tdItem = document.createElement('td');
                const tdValor = document.createElement('td');
                tdItem.textContent = i.item;
                tdValor.textContent = i.valor;
                tr.appendChild(tdItem);
                tr.appendChild(tdValor);
                tabelaCorpo.appendChild(tr);
            });
        })
        .catch(error => {
            alert('Erro: ' + error.message);
        });
}