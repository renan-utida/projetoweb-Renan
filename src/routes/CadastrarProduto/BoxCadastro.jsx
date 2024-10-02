import { SectionCadastrarProduto } from "./cadastro-styled"

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const BoxCadastro=()=>{

    // Hook- useParams - serve para receber da rota ou gerar o código
    let { id } = useParams();

    // Hook - useState - Manipula o estado da variável
    const [produto, setProduto] = useState({
        id,
        imagemUrl: '',
        modelo: '',
        descricao: '',
        tipo: '',
        preco: ''
    });

    // Hook- useNavigate - Redireciona para outro componente
    const navigate = useNavigate();

    // Criando a função handleChange
    // spred(...) - pega o valor novo e junta com os valores já cadastrados dentro de um array ou objeto
    // evento target - captura o que foi digitado em um campo input
    const handleChange = (e) => {
        setProduto({ ...produto, [e.target.name]: e.target.value });
    };

    // Criando a variável método para criar e alterar
    let metodo = "post";
    if (id) {
        metodo = 'put';
    }

    // Criando a função handleSubmit
    const handleSubmit = (e) => {
        // Previne que ocorra qualquer modificação no form ex. load
        e.preventDefault();
        fetch(`http://localhost:5003/produtos/${id ? id : ''}`, {
            method: metodo,
            headers: {
                'Content-type': 'application/json',
            },
            // Prepara para receber os dados em JSON
            body: JSON.stringify(produto),
        })
        .then(() => {
            alert("Novo produto cadastrado!");
            navigate("/produtos");
        });
    };

    // Hook- useEffect - realiza o efeito colateral, ele carrega os produtos cadastrados
    useEffect(() => {
        if (id) {
        fetch(`http://localhost:5003/produtos/${id}`)
            .then((resp) => {
            return resp.json();
            })
            .then((data) => {
            setProduto(data);
            });
        }
    }, [id]);


    return(
        <SectionCadastrarProduto className="produto">
            <h1>Cadastrar Produto</h1>
            <form onSubmit={handleSubmit}>
                <span>Imagem</span>
                <input
                    type="text"
                    name="imagemUrl"
                    value={produto.imagemUrl}
                    placeholder="Digite o URL da imagem do produto"
                    onChange={handleChange}
                    required
                />

                <span>Modelo</span>
                <input
                    type="text"
                    name="modelo"
                    value={produto.modelo}
                    placeholder="Digite o modelo do produto"
                    onChange={handleChange}
                    required
                />

                <span>Descrição</span>
                <input
                    type="text"
                    name="descricao"
                    value={produto.descricao}
                    placeholder="Digite a descrição do produto"
                    onChange={handleChange}
                    required
                />

                <span>Tipo</span>
                <select
                    name="tipo"
                    value={produto.tipo}
                    onChange={handleChange}
                    required
                >
                    <option value="">Selecione o tipo</option>
                    <option value="Hatch">Hatch</option>
                    <option value="SUV">SUV</option>
                    <option value="Sedã">Sedan</option>
                </select>

                <span>Preço</span>
                <input
                    type="number"
                    name="preco"
                    value={produto.preco}
                    placeholder="Digite o preço do produto"
                    onChange={handleChange}
                    required
                />

                <button type="submit">Cadastrar Produto</button>
            </form>
        </SectionCadastrarProduto>
    )
}

export default BoxCadastro

