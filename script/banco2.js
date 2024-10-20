const bancos = [
    { codigo: 654, nome: "Banco A.J. RENNER", nomeCompleto: "Banco A.J. RENNER S.A.", ispb: "92874270" },
    { codigo: 246, nome: "Banco ABC Brasil", nomeCompleto: "Banco ABC Brasil S.A.", ispb: "28195667" },
    { codigo: 75, nome: "Banco ABN AMRO", nomeCompleto: "Banco ABN AMRO S.A.", ispb: "3532415" },
    { codigo: 25, nome: "Banco ALFA", nomeCompleto: "Banco ALFA S.A.", ispb: "3323840" },
    { codigo: 213, nome: "Banco ARBI", nomeCompleto: "Banco ARBI S.A.", ispb: "54403563" },
    { codigo: 19, nome: "Banco AZTECA do Brasil", nomeCompleto: "Banco AZTECA do Brasil S.A.", ispb: "9391857" },
    { codigo: 740, nome: "Banco BARCLAYS", nomeCompleto: "Banco BARCLAYS S.A.", ispb: "61146577" },
    { codigo: 107, nome: "Banco BBM", nomeCompleto: "Banco BBM S.A.", ispb: "15114366" },
    { codigo: 96, nome: "Banco BMFBOVESPA", nomeCompleto: "Banco BMFBOVESPA S.A.", ispb: "997185" },
    { codigo: 318, nome: "Banco BMG", nomeCompleto: "Banco BMG S.A.", ispb: "61186680" },
    { codigo: 752, nome: "Banco BNP PARIBAS Brasil", nomeCompleto: "Banco BNP PARIBAS Brasil S.A.", ispb: "1522368" },
    { codigo: 248, nome: "Banco BOA VISTA INTERATLANTICO", nomeCompleto: "Banco BOA VISTA INTERATLANTICO S.A.", ispb: "33485541" },
    { codigo: 218, nome: "Banco BONSUCESSO", nomeCompleto: "Banco BONSUCESSO S.A.", ispb: "71027866" },
    { codigo: 65, nome: "Banco BRACCE", nomeCompleto: "Banco BRACCE S.A.", ispb: "48795256" },
    { codigo: 63, nome: "Banco BRADESCARD", nomeCompleto: "Banco BRADESCARD S.A.", ispb: "4184779" },
    { codigo: 237, nome: "Banco BRADESCO", nomeCompleto: "Banco BRADESCO S.A.", ispb: "60746948" },
    { codigo: 36, nome: "Banco BRADESCO BBI", nomeCompleto: "Banco BRADESCO BBI S.A.", ispb: "60746948" },
    { codigo: 204, nome: "Banco BRADESCO CARTÕES", nomeCompleto: "Banco BRADESCO CARTÕES S.A.", ispb: "59438325" },
    { codigo: 394, nome: "Banco BRADESCO FINANCIAMENTOS", nomeCompleto: "Banco BRADESCO FINANCIAMENTOS S.A.", ispb: "7207996" },
    { codigo: 208, nome: "Banco BTG PACTUAL", nomeCompleto: "Banco BTG PACTUAL S.A.", ispb: "30306294" },
    { codigo: 263, nome: "Banco CACIQUE", nomeCompleto: "Banco CACIQUE S.A.", ispb: "33349358" },
    { codigo: 473, nome: "Banco CAIXA GERAL – Brasil", nomeCompleto: "Banco CAIXA GERAL – Brasil S.A.", ispb: "33466988" },
    { codigo: 412, nome: "Banco CAPITAL", nomeCompleto: "Banco CAPITAL S.A.", ispb: "15173776" },
    { codigo: 40, nome: "Banco CARGILL", nomeCompleto: "Banco CARGILL S.A.", ispb: "3609817" },
    { codigo: 266, nome: "Banco CEDULA", nomeCompleto: "Banco CEDULA S.A.", ispb: "33132044" },
    { codigo: 739, nome: "Banco CETELEM", nomeCompleto: "Banco CETELEM S.A.", ispb: "558456" },
    { codigo: 233, nome: "Banco CIFRA", nomeCompleto: "Banco CIFRA S.A.", ispb: "62421979" },
    { codigo: 745, nome: "Banco CITIBANK", nomeCompleto: "Banco CITIBANK S.A.", ispb: "33479023" },
    { codigo: 241, nome: "Banco CLÁSSICO", nomeCompleto: "Banco CLÁSSICO S.A.", ispb: "31597552" },
    { codigo: 756, nome: "Banco COOPERATIVO do Brasil – Bancoob", nomeCompleto: "Banco COOPERATIVO do Brasil – Bancoob S.A.", ispb: "2038232" },
    { codigo: 748, nome: "Banco COOPERATIVO SICREDI", nomeCompleto: "Banco COOPERATIVO SICREDI S.A.", ispb: "1181521" },
    { codigo: 222, nome: "Banco CREDIT AGRICOLE Brasil", nomeCompleto: "Banco CREDIT AGRICOLE Brasil S.A.", ispb: "75647891" },
    { codigo: 505, nome: "Banco CREDIT SUISSE (Brasil)", nomeCompleto: "Banco CREDIT SUISSE (Brasil) S.A.", ispb: "32062580" },
    { codigo: 3, nome: "Banco da AMAZONIA", nomeCompleto: "Banco da AMAZONIA S.A.", ispb: "4902979" },
    { codigo: 83, nome: "Banco da CHINA Brasil", nomeCompleto: "Banco da CHINA Brasil S.A.", ispb: "10690848" },
    { codigo: 707, nome: "Banco DAYCOVAL", nomeCompleto: "Banco DAYCOVAL S.A.", ispb: "62232889" },
    { codigo: 300, nome: "Banco de LA NACION ARGENTINA", nomeCompleto: "Banco de LA NACION ARGENTINA S.A.", ispb: "33042151" },
    { codigo: 495, nome: "Banco de LA PROVINCIA de BUENOS AIRES", nomeCompleto: "Banco de LA PROVINCIA de BUENOS AIRES S.A.", ispb: "44189447" },
    { codigo: 494, nome: "Banco de LA REPUBLICA ORIENTAL DEL URUGUAY", nomeCompleto: "Banco de LA REPUBLICA ORIENTAL DEL URUGUAY S.A.", ispb: "51938876" },
    { codigo: 456, nome: "Banco de TOKYO MITSUBISHI UFJ Brasil", nomeCompleto: "Banco de TOKYO MITSUBISHI UFJ Brasil S.A.", ispb: "60498557" },
    { codigo: 214, nome: "Banco DIBENS", nomeCompleto: "Banco DIBENS S.A.", ispb: "61199881" },
    { codigo: 1, nome: "Banco do BRASIL", nomeCompleto: "Banco do BRASIL S.A.", ispb: "0" },
    { codigo: 47, nome: "Banco do ESTADO de SERGIPE", nomeCompleto: "Banco do ESTADO de SERGIPE S.A.", ispb: "13009717" },
    { codigo: 37, nome: "Banco do ESTADO do PARA", nomeCompleto: "Banco do ESTADO do PARA S.A.", ispb: "4913711" },
    { codigo: 41, nome: "Banco do ESTADO do RIO GRANDE do SUL (BANRISUL)", nomeCompleto: "Banco do ESTADO do RIO GRANDE do SUL (BANRISUL) S.A.", ispb: "92702067" },
    { codigo: 4, nome: "Banco do NORDESTE do Brasil", nomeCompleto: "Banco do NORDESTE do Brasil S.A.", ispb: "7237373" },
    { codigo: 265, nome: "Banco FATOR", nomeCompleto: "Banco FATOR S.A.", ispb: "33644196" },
    { codigo: 224, nome: "Banco FIBRA", nomeCompleto: "Banco FIBRA S.A.", ispb: "58616418" },
    { codigo: 626, nome: "Banco FICSA", nomeCompleto: "Banco FICSA S.A.", ispb: "61348538" },
    { codigo: 121, nome: "Banco GERADOR", nomeCompleto: "Banco GERADOR S.A.", ispb: "10664513" },
    { codigo: 612, nome: "Banco GUANABARA", nomeCompleto: "Banco GUANABARA S.A.", ispb: "31880826" },
    { codigo: 604, nome: "Banco INDUSTRIAL do Brasil", nomeCompleto: "Banco INDUSTRIAL do Brasil S.A.", ispb: "42272526" },
    { codigo: 653, nome: "Banco INDUSVAL", nomeCompleto: "Banco INDUSVAL S.A.", ispb: "90400888" },
    { codigo: 492, nome: "Banco ING", nomeCompleto: "Banco ING S.A.", ispb: "61342602" },
    { codigo: 341, nome: "ITAÚ UNIBANCO", nomeCompleto: "ITAÚ UNIBANCO S.A.", ispb: "60701190" },
    { codigo: 753, nome: "NOVO Banco CONTINENTAL", nomeCompleto: "NOVO Banco CONTINENTAL S.A.", ispb: "74828799" },
    { codigo: 254, nome: "PARANA Banco", nomeCompleto: "PARANA Banco S.A.", ispb: "14388334" },
    { codigo: 751, nome: "SCOTIABANK Brasil Banco Múltiplo", nomeCompleto: "SCOTIABANK Brasil Banco Múltiplo S.A.", ispb: "29030467" },
    { codigo: 91, nome: "UNICRED Central RS", nomeCompleto: "UNICRED Central RS – Central de Cooperativa de Economia e Crédito Mútuo do Estado do RS", ispb: "1634601" },
    { codigo: 87, nome: "UNICRED Central Santa Catarina", nomeCompleto: "UNICRED Central Santa Catarina S.A.", ispb: "543968" },
    { codigo: 99, nome: "UNIPRIME Central", nomeCompleto: "UNIPRIME Central – Central Interestadual de Cooperativa de Crédito", ispb: "3046391" },
    { codigo: 380, nome: "Banco Picpay", nomeCompleto: "Banco Picpay S.A.", ispb: "22896431" },
    { codigo: 77, nome: "Banco Inter", nomeCompleto: "Banco Inter S.A.", ispb: "00416968" },
    { codigo: 290, nome: "Banco Pagbank", nomeCompleto: "Banco Pagbank S.A. (Pagseguro)", ispb: "08561701" },
    { codigo: 323, nome: "Banco Mercado Pago", nomeCompleto: "Banco Mercado Pago S.A.", ispb: "10573521" },
    { codigo: 260, nome: "Banco Nubank", nomeCompleto: "Banco Nubank S.A. (Nu Pagamentos)", ispb: "18236120" }
];

function consultar() {
    const nomeBanco = document.getElementById('idnumbanco').value.toLowerCase();

    if (!nomeBanco) {
        alert('Por favor, insira o nome do banco.');
        return;
    }

    const bancosFiltrados = bancos.filter(banco =>
        banco.nome.toLowerCase().includes(nomeBanco) || banco.nomeCompleto.toLowerCase().includes(nomeBanco)
    );

    const tabelaCorpo = document.getElementById('tabela-corpo');
    tabelaCorpo.innerHTML = '';

    if (bancosFiltrados.length === 0) {
        alert('Nenhum banco encontrado com esse nome.');
        return;
    }

    bancosFiltrados.forEach(banco => {
        const itens = [
            { item: 'Código', valor: banco.codigo },
            { item: 'Nome', valor: banco.nome },
            { item: 'Nome Completo', valor: banco.nomeCompleto },
            { item: 'ISPB', valor: banco.ispb }
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
    });

    document.getElementById('tabela').style.display = 'block';
}
