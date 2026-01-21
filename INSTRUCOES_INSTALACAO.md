# 🎨 Portfólio Rayanny - Guia Completo de Instalação

## ⚠️ ANTES DE COMEÇAR

Você precisa instalar o **Node.js** no seu computador. O projeto depende dele para funcionar.

## 1️⃣ INSTALAÇÃO DO NODE.JS

### Passo 1: Baixe o Node.js

1. Acesse: **https://nodejs.org/**
2. Clique em "Download LTS" (versão recomendada)
3. Execute o instalador
4. Siga todos os passos da instalação (deixe as opções padrão)
5. Reinicie o computador após a instalação

### Passo 2: Verificar se foi instalado

Abra PowerShell (ou qualquer terminal) e execute:

```powershell
node --version
npm --version
```

Você deve ver versões exibidas. Se funcionar, está tudo certo! ✅

## 2️⃣ RODAR O PROJETO REACT

### Passo 1: Abra o PowerShell/Terminal

- Navegue até a pasta do projeto:

```powershell
cd "c:\Users\Gustavo\Documents\AAAIMPORTANTE\PROGRAMACAO\rayray"
```

### Passo 2: Instale as dependências

```powershell
npm install
```

⏳ Isso pode levar alguns minutos na primeira vez...

### Passo 3: Inicie o servidor

```powershell
npm start
```

### Passo 4: Acesse no navegador

- Abra o navegador
- Vá para: **http://localhost:3000**
- Pronto! O site deve estar rodando! 🎉

## 🎨 ESTRUTURA DO PROJETO

```
rayray/
├── public/
│   └── index.html          # Arquivo HTML principal
├── src/
│   ├── components/         # Componentes React
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   ├── Contact.js
│   │   ├── Footer.js
│   │   └── AnimatedBackground.js
│   ├── App.js             # Componente principal
│   ├── index.js           # Entrada da aplicação
│   └── index.css          # Estilos globais
├── package.json           # Configuração do projeto
└── README.md             # Documentação
```

## 🌍 CARACTERÍSTICAS DO SITE

✅ **Responsivo** - Funciona em celular, tablet e desktop
✅ **Tema Claro/Escuro** - Botão para alternar temas
✅ **Animações** - Fundo com formas coloridas animadas
✅ **Seções Completas**:

- Home/Hero
- Sobre Mim
- Habilidades
- Projetos
- Contato
- Rodapé

## 📝 PERSONALIZAÇÕES IMPORTANTES

### Alterar Informações Pessoais

**Email:**

- Abra: `src/components/Contact.js`
- Procure por: `rayanny@example.com`
- Altere para seu email

**Telefone:**

- Abra: `src/components/Contact.js`
- Procure por: `(11) 99999-9999`
- Altere para seu telefone

**Redes Sociais:**

- Abra: `src/components/Contact.js`
- Procure por `href="#"`
- Adicione seus links

**Adicionar Projetos:**

- Abra: `src/components/Projects.js`
- Procure pelo array `projects`
- Adicione novos objetos com seus projetos

## 🎯 CORES PRINCIPAIS

As cores padrão são:

- **Roxo Principal**: `#4f46e5`
- **Rosa Destaque**: `#ec4899`
- **Azul Claro**: `#06b6d4`
- **Laranja**: `#f59e0b`

Para alterar todas as cores, procure por esses códigos nos arquivos `.css` e substitua.

## 🚀 BUILD PARA PRODUÇÃO

Quando quiser publicar online:

```powershell
npm run build
```

Isso cria uma pasta `build/` com a versão otimizada do site.

## ⚙️ TROUBLESHOOTING

### Erro: "npm is not recognized"

- Node.js não está instalado
- Solução: Reinstale o Node.js e reinicie o computador

### Porta 3000 já está em uso

- Outra aplicação está usando a porta
- Solução: Execute `npm start` novamente ou feche outras aplicações

### Arquivo não atualiza

- Salve o arquivo (Ctrl+S)
- O navegador deve atualizar automaticamente
- Se não atualizar: Pressione Ctrl+Shift+Delete para limpar cache

## 📞 PRÓXIMOS PASSOS

1. ✅ Instale o Node.js
2. ✅ Rode o projeto com `npm start`
3. ✅ Personalize as informações
4. ✅ Teste no navegador
5. ✅ Deploy online (GitHub Pages, Vercel, Netlify, etc.)

## 💡 DICAS IMPORTANTES

- O tema é salvo automaticamente no navegador
- As animações rodam suavemente em todos os navegadores modernos
- Sempre faça `npm install` antes de usar o projeto
- Mantenha o Node.js e npm atualizados

---

**Sucesso! 🚀 Seu portfólio está pronto!**

Dúvidas? Entre em contato!
