# Projeto Car Shop

# Sobre
Este projeto foi desenvolvido durante o Módulo 3 - Back-End do curso de Desenvolvimento Web da Trybe.

Nele, foi construída uma API para  para gerenciar uma concessionária de veículos,que permite fazer cadastro de novos veículos (carros e motos), editá-los e listá-los. Algumas dos endpoints requerem validação de dados para que a requisição tenha sucesso. O banco de dados utilizado foi o MongoDB através do framework Mongoose, e a linguagem utilizada foi o Typescrypt. Foram desenvolvidos testes unitários para os métodos implementados.

Os arquivos desenvolvidos por mim estão na pasta src. Os demais foram desenvolvidos pelo time da Trybe.

## Descrição dos endpoints:
<table>
  <thead>
    <tr>
      <th>Método HTTP</th>
      <th>Endpoint</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>GET</td>
      <td>/cars</td>
      <td>Lista todos os carros registrados no banco de dados</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/cars/:id</td>
      <td>Retorna o carro cuja id corresponde ao parâmetro informado</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/cars</td>
      <td>Cria um novo carro com as informações dadas no corpo da requisição</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td>/cars/:id</td>
      <td>Edita informações do carro cuja id corresponde ao parâmetro informado</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/motorcycles</td>
      <td>Lista todas as motos registradas no banco de dados</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/motorcycles/:id</td>
      <td>Retorna a moto cuja id corresponde ao parâmetro informado</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/motorcycles</td>
      <td>Cria uma nova moto com as informações dadas no corpo da requisição</td>
    </tr>
    <tr>
      <td>PUT</td>
      <td>/motorcycles/:id</td>
      <td>Edita informações da moto cuja id corresponde ao parâmetro informado</td>
    </tr>
  </tbody>
</table>

## Tecnologias usadas

> Back-End
Docker, docker-compose, Node.js, MongoDB, Mongoose, Typescript, Mocha, sinon-chai.

## Instalando Dependências

### Usando o Docker

1. Clone este repositório em su máquina, e em seguida suba o container:
```bash
docker-compose up -d
``` 
- Serão inicializados os containers car_shop e car_shop_db.
- Atenção: o db roda na porta padrão do MongoDB(27017). Portanto, pause outros containers que porventura já estejam rodando nesta porta antes de iniciar este.

2. Dentro do diretório do projeto, execute o conteiner:
```bash
docker exec -it car_shop bash
``` 
- As credencias de acesso ao banco de dados estão definidas no arquivo docker-compose.yml.

3. Agora instale as dependências dentro do container:
```bash
npm install
``` 
### Rodando localmente

 - É necessário ter o ```node``` (versão 16 ou superior) instalado em sua máquina.
 
 1. Clone este repositório em su máquina, e em seguida instale as dependências:
 ```bash
npm install
```
### Para inicializar o servidor
- Faça isso dentro do conatiner, se estiver o utilizando.
```bash
npm run debug
``` 
