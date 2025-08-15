# Padrões de Projeto em Node.js com TypeScript

Este projeto é um estudo e aplicação prática de Padrões de Projeto (Design Patterns) e conceitos de Arquitetura Limpa (Clean Architecture) em um ambiente Node.js com TypeScript. Foi desenvolvido durante o curso **[Padrões de projeto com TypeScript: aprimorando uma API com arquitetura limpa](https://cursos.alura.com.br/course/padroes-projeto-typescript-api-arquitetura-limpa)** da Alura, explorando como estruturar uma aplicação robusta, manutenível e escalável.

## 🎯 Objetivo

O principal objetivo é demonstrar a implementação de padrões de projeto e arquiteturais comuns no desenvolvimento de software, utilizando uma API REST como caso de uso.

---

## 🚀 Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Express**: Framework para construção de APIs REST.
- **MongoDB**: Banco de dados NoSQL orientado a documentos.
- **tsc-watch**: Ferramenta para compilar e reiniciar o servidor automaticamente em modo de desenvolvimento.
- **ESLint**: Linter para garantir a qualidade e a padronização do código.

---

## 🏛️ Arquitetura e Padrões de Projeto

A estrutura do projeto é fortemente inspirada na **Clean Architecture**, proposta por Robert C. Martin (Uncle Bob), visando a separação de responsabilidades, independência de frameworks e alta testabilidade.

### Padrões Explorados

Durante o desenvolvimento, foram abordados diversos padrões, incluindo:

- **Singleton**: Garante que uma classe tenha apenas uma instância e fornece um ponto de acesso global a ela. Utilizado, por exemplo, na conexão com o banco de dados.
- **Adapter**: Converte a interface de uma classe em outra que o cliente espera, permitindo que classes com interfaces incompatíveis trabalhem juntas.
- **Facade**: Fornece uma interface unificada e simplificada para um conjunto de interfaces em um subsistema.
- **Template Method**: Define o esqueleto de um algoritmo em uma operação, adiando a implementação de alguns passos para as subclasses.

#### Exemplo de Template Method

```typescript
abstract class CoffeePreparation {
  // Template method
  public execute(): void {
    this.boilWater();
    this.prepareCoffee();
    this.serveCoffee();
  }

  // Método abstrato a ser implementado pelas subclasses
  protected abstract prepareCoffee(): void;

  // Métodos concretos (Hooks)
  protected boilWater(): void {
    console.log("Fervendo a água...");
  }
  protected serveCoffee(): void {
    console.log("Servindo o café...");
  }
}

class ExpressCoffeePreparation extends CoffeePreparation {
  protected prepareCoffee(): void {
    console.log("Preparando café expresso...");
  }
}
```

---

## 📂 Estrutura do Projeto

A organização das pastas segue os princípios da Clean Architecture:

- `src/`: Código-fonte da aplicação.
  - `core/`: Contém as regras de negócio e entidades centrais (camada mais interna).
  - `adapters/`: Adaptadores que conectam as camadas, como os casos de uso e as apresentações (controllers).
  - `external/`: Implementações concretas de dependências externas (ex: cliente do MongoDB, frameworks).
  - `main/`: Composição da aplicação, onde as dependências são injetadas e o servidor é iniciado.
- `dist/`: Código TypeScript transpilado para JavaScript.

---

## ⚙️ Como Executar

### Pré-requisitos

- Node.js (versão >= 20.0.0)
- npm ou Yarn
- Docker e Docker Compose

### Configuração do Ambiente

O projeto utiliza o MongoDB como banco de dados. A maneira mais simples de configurar o ambiente é usando o Docker Compose.

#### Opção 1: Docker Compose (Recomendado)

Na raiz do projeto, execute o seguinte comando para iniciar o serviço do MongoDB em segundo plano:

```bash
# Inicia o serviço do MongoDB definido no docker-compose.yml
docker-compose up -d
```
A variável de ambiente `MONGO_URL` para a aplicação deverá ser `mongodb://localhost:27017/clean-architecture`.

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/Junior743/alura-ts-design-patterns-and-clean-arch.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```

### Execução

Para iniciar o servidor em modo de desenvolvimento com recarregamento automático, execute:
```bash
npm start
```

A API estará disponível em `http://localhost:3000` (ou na porta definida pela variável de ambiente `PORT`). A conexão com o MongoDB pode ser configurada pela variável `MONGO_URL`.

---
