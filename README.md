# 🧮 Calculadora de Idade

![Imagem Ilustrativa](preview.jpg)

## 👋 Bem-vindo!

Este é um projeto de **calculadora de idade** que permite calcular sua idade em **anos, meses e dias** de forma precisa e interativa.

---

## 🎯 O Desafio

Construir uma **calculadora de idade funcional e responsiva** com as seguintes funcionalidades:

---

## ✅ Funcionalidades

Os usuários devem ser capazes de:

- ✅ Visualizar a idade em anos, meses e dias após enviar uma data válida  
- ✅ Receber erros de validação se:
  - Qualquer campo estiver vazio  
  - O dia não estiver entre 1-31  
  - O mês não estiver entre 1-12  
  - A data estiver no futuro  
  - A data for inválida (ex: 31/04/1991 - abril tem apenas 30 dias)  
- ✅ Ver o layout otimizado para diferentes tamanhos de tela  
- ✅ Ver estados de hover e foco em todos os elementos interativos  
- 🎁 **Bônus:** Ver os números da idade **animarem** até o valor final  

---

## 🛠 Tecnologias Utilizadas

- **Next.js 14** - Framework React  
- **TypeScript** - Tipagem estática  
- **Tailwind CSS** - Estilização  
- **React Hooks** - Gerenciamento de estado  
- **Responsive Design** - Layout adaptativo  

---

## 🚀 Como Usar

### 🔧 Pré-requisitos

- Node.js 18.0 ou superior  
- npm ou yarn  

### 📥 Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/calculadora-idade.git

# Entre na pasta do projeto
cd calculadora-idade

# Instale as dependências
npm install

# Execute o projeto em desenvolvimento
npm run dev
```
## 📦 Build para Produção
```bash
# Gerar build de produção
npm run build

# Executar em produção
npm start
```
## ⚙️ Como Funciona

1. Digite sua data de nascimento nos campos **Dia**, **Mês** e **Ano**  
2. Clique no botão com a **seta** para calcular  
3. Veja o resultado em **anos, meses e dias** com **animação**  
4. O sistema realiza **validação automática** para datas inválidas ou futuras  

---

## 🔍 Validações Implementadas

- ⚠️ **Campos obrigatórios**  
- ⚠️ **Dia**: deve estar entre **1 e 31**  
- ⚠️ **Mês**: deve estar entre **1 e 12**  
- ⚠️ **Ano**: não pode ser uma data no futuro  
- ⚠️ **Datas inválidas**, como `30 de fevereiro` ou `31 de abril`  
- ⚠️ **Datas no futuro**

## 💙 Desenvolvido com amor usando Next.js e TypeScript

