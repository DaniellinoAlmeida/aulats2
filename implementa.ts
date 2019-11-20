///<influence path="pessoa.ts"/>
///<influence path="cliente.ts"/>
///<influence path="funcionario.ts"/>
///<influence path="banco.ts"/>

namespace empresa{
    let banco = new Banco();
    banco.setNome("Bradesco");
    banco.setCodBanco(33);

    let cliente = new Cliente();
    cliente.setNome("João");
    cliente.setCodCliente(1);
    cliente.setCpf("000.000.000-00");
    cliente.setIdade(30);
    cliente.setCredito(2000);
    cliente.setBanco(banco);

    let cliente2 = new Cliente();
    cliente2.setNome("Maria");
    cliente2.setCodCliente(2);
    cliente2.setCpf("111.000.000-11");
    cliente2.setIdade(40);
    cliente2.setCredito(3000);
    cliente.setBanco(banco);

    document.getElementById("nome").textContent = cliente.getNome();
    document.getElementById("idade").textContent = cliente.getIdade().toString();
    document.getElementById("cpf").textContent = cliente.getCpf();
    document.getElementById("codigo").textContent = cliente.getCodCliente().toString();
    document.getElementById("credito").textContent = cliente.getCredito().toString();
    document.getElementById("banco").textContent = cliente.getBanco().getNome();


    banco.addCliente(cliente);
    banco.addCliente(cliente2);

    //Trecho inserido para exemplificar a implementação das tabelas
    let tabela = document.getElementById("tabela");

    let conteudo = " <tr> <th>Clientes</th> <th>Banco</th> </tr>";
    banco.getClientes().forEach(element => {
        conteudo += "<tr> <td>"+element.getNome()+"</td><td>"+element.getBanco().getNome()+"</td> </tr>";
    })
    tabela.innerHTML = conteudo;
}