# API de Pastéis

Bem-vindo à API de Pastéis! Aqui você encontrará todas as informações necessárias para interagir com esta deliciosa API de criação e gerenciamento de pastéis.

## Documentação Swagger

Para explorar e entender os endpoints disponíveis, você pode acessar a documentação Swagger em [http://localhost:8080/api-docs](http://localhost:8080/api-docs). Lá, você encontrará detalhes sobre como utilizar cada rota, os parâmetros necessários e as respostas esperadas.

## Endpoints

### 1. Cadastro de Pastel

- **Rota:** `/create`
- **Método:** `POST`
- **Descrição:** Cadastra um novo pastel.
- **Parâmetros de Requisição:**
  - `pastel_type` (string): Tipo de pastel.
  - `pastel_price` (number): Preço do pastel.
- **Respostas:**
  - `201 Created`: Pastel cadastrado com sucesso.
  - `400 Product Already Exists`: Produto já cadastrado.
  - `500 Internal Server Error`: Erro interno do servidor.

### 2. Busca de Pastel pelo ID

- **Rota:** `/{id}`
- **Método:** `GET`
- **Descrição:** Busca um pastel pelo ID.
- **Parâmetros de Requisição:**
  - `id` (path): ID do pastel.
- **Respostas:**
  - `200 OK`: Pastel encontrado com sucesso.

### 3. Busca de Todos os Pasteis Cadastrados

- **Rota:** `/`
- **Método:** `GET`
- **Descrição:** Busca todos os pasteis cadastrados.
- **Respostas:**
  - `200 OK`: Lista de todos os pasteis cadastrados.

### 4. Deletar Pastel pelo ID

- **Rota:** `/delete/{id}`
- **Método:** `DELETE`
- **Descrição:** Deleta um pastel pelo ID.
- **Parâmetros de Requisição:**
  - `id` (path): ID do pastel.
- **Respostas:**
  - `200 OK`: Pastel deletado com sucesso.

### 5. Atualização de Dados do Pastel pelo ID

- **Rota:** `/update/{id}`
- **Método:** `PUT`
- **Descrição:** Atualiza os dados de um pastel pelo ID.
- **Parâmetros de Requisição:**
  - `id` (path): ID do pastel.
- **Parâmetros de Requisição:**
  - `pastel_type` (string): Novo tipo de pastel.
  - `pastel_price` (number): Novo preço do pastel.
- **Respostas:**
  - `200 OK`: Dados do pastel atualizados com sucesso.

## Esquema do Pastel

O objeto Pastel possui as seguintes propriedades:

- `pastel_type` (string): Tipo do pastel.
- `pastel_price` (number): Preço do pastel.

## Executando Localmente

Certifique-se de ter um ambiente Node.js configurado. Para instalar as dependências, execute:

```bash
npm install
```

Em seguida, inicie o servidor com o seguinte comando:

```bash
npm start
```

Agora, você pode acessar a documentação Swagger em [http://localhost:8080/api-docs](http://localhost:8080/api-docs) e começar a interagir com a API de Pastéis. Bom apetite!
