# 🎨 Guia de Customização do Portfólio

## 📋 Arquivos Principais para Editar

### 1. `src/components/Hero.js` - Seção Principal

```javascript
// Mude o seu nome e profissão aqui
<h1 className="hero-title">Olá! Eu sou <span>SEU NOME</span></h1>
<p className="hero-subtitle">Estudante de Contabilidade | Sua descrição</p>

// Mude o emoji
<span className="icon">👩‍💼</span>
```

### 2. `src/components/About.js` - Sobre Você

- Altere o nome e histórico pessoal
- Mude as estatísticas (número de projetos, etc)

### 3. `src/components/Skills.js` - Habilidades

```javascript
const skillCategories = [
  {
    title: "Seu Tema",
    icon: <FaIcon />,
    skills: ["Habilidade 1", "Habilidade 2"],
  },
];
```

### 4. `src/components/Projects.js` - Projetos

```javascript
const projects = [
  {
    title: "Seu Projeto",
    description: "Descrição do projeto",
    tags: ["Tag1", "Tag2"],
    link: "https://seu-link.com",
    github: "https://github.com/seu-repo",
  },
];
```

### 5. `src/components/Contact.js` - Contato

```javascript
// Mude para seus dados
<a href="mailto:seu-email@example.com">seu-email@example.com</a>
<a href="tel:+5511999999999">(11) 99999-9999</a>

// Redes sociais
<a href="https://linkedin.com/in/seu-perfil">LinkedIn</a>
```

### 6. `src/components/Header.js` - Logo

```javascript
<span className="logo-letter">R</span>  {/* Primeira letra do nome */}
<span className="logo-text">ayanny</span> {/* Resto do nome */}
```

## 🎨 Customizar Cores

Localize e altere estes códigos em todos os arquivos `.css`:

```css
/* Roxo Principal - ALTERE PARA SUA COR */
color: #4f46e5;
background: #4f46e5;

/* Rosa Secundária - ALTERE PARA SUA COR */
color: #ec4899;
background: #ec4899;
```

### Paletas de Cores Sugeridas:

**Tema Profissional (Azul)**

- Principal: `#0066cc`
- Secundária: `#00ccff`

**Tema Moderno (Roxo)**

- Principal: `#7c3aed`
- Secundária: `#ec4899`

**Tema Natureza (Verde)**

- Principal: `#059669`
- Secundária: `#10b981`

**Tema Energia (Laranja)**

- Principal: `#ea580c`
- Secundária: `#f97316`

## 🖼️ Adicionar Foto de Perfil

1. Salve uma foto em `public/profile.jpg`
2. No `src/components/Hero.js`, altere:

```javascript
// De:
<span className="icon">👩‍💼</span>

// Para:
<img src="/profile.jpg" alt="Perfil" className="profile-image" />
```

3. Adicione ao `src/components/Hero.css`:

```css
.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
```

## 📱 Alterar Ícones

Os ícones vêm da biblioteca `react-icons`. Opções disponíveis:

```javascript
// Importar diferentes ícones:
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { AiOutlinePhone } from 'react-icons/ai';
import { BiMapPin } from 'react-icons/bi';
import { RiMedalFill } from 'react-icons/ri';

// Usar assim:
<FaLinkedin /> // Ícone do LinkedIn
<RiMedalFill /> // Ícone de medalha
```

Veja mais em: https://react-icons.github.io/react-icons/

## 🌈 Alterar Animações do Fundo

No `src/components/AnimatedBackground.css`, mude:

```css
/* Velocidade das animações */
animation: float-orb-1 15s ease-in-out infinite;
           {deixar menor = mais rápido}

/* Tamanho dos orbs */
.orb-1 {
  width: 400px;  /* Aumentar para maior */
  height: 400px;
}

/* Opacidade (transparência) */
opacity: 0.6; /* 0 = invisível, 1 = sólido */
```

## 🔗 Integrar Formulário de Contato

Para que o formulário realmente envie emails:

**Opção 1: EmailJS (Recomendado)**

1. Vá em: https://www.emailjs.com/
2. Crie uma conta grátis
3. Adicione a biblioteca:

```bash
npm install @emailjs/browser
```

4. No `src/components/Contact.js`, adicione:

```javascript
import emailjs from "@emailjs/browser";

// No handleSubmit:
emailjs.send("SERVICE_ID", "TEMPLATE_ID", formData, "PUBLIC_KEY").then(() => {
  setSubmitted(true);
});
```

**Opção 2: Formspree**

1. Vá em: https://formspree.io/
2. Crie uma conta
3. Altere o formulário:

```javascript
<form action="https://formspree.io/f/SEU_ID" method="POST">
```

## 📊 Adicionar Mais Seções

Para adicionar uma nova seção:

1. Crie um novo arquivo: `src/components/NovaSecao.js`
2. Crie o CSS correspondente: `src/components/NovaSecao.css`
3. Importe no `src/App.js`:

```javascript
import NovaSecao from "./components/NovaSecao";

// E use em App:
<NovaSecao isDarkMode={isDarkMode} />;
```

## 💾 Salvar Alterações

**Importante:** Sempre que editar:

1. Pressione `Ctrl+S` para salvar
2. O navegador deve atualizar automaticamente
3. Se não atualizar, pressione `F5`

## 🚀 Deploy

Quando tudo estiver pronto:

```bash
npm run build
```

Upload a pasta `build/` para:

- **Vercel**: https://vercel.com
- **Netlify**: https://netlify.com
- **GitHub Pages**: github.com
- **Heroku**: heroku.com

## 📚 Recursos Úteis

- **React Docs**: https://react.dev
- **CSS Animation**: https://developer.mozilla.org/pt-BR/docs/Web/CSS/animation
- **Tailwind Colors**: https://tailwindcss.com/docs/customizing-colors
- **Font Awesome Icons**: https://fontawesome.com

---

**Divirta-se customizando! 🎉**
