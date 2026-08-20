# Benitez y Asociados

A modern website for **Benitez y Asociados**, built using Astro and Tailwind CSS.

## 🚀 Technologies Used

- [Astro](https://astro.build/) - Modern Static Site Generator
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS Framework

## 📂 Project Structure

```bash
/
├── public/         # Static assets
│   └── images/
│           └── team/
├── src/
│   ├── assets/    # Page assets
│   ├── components/ # Reusable UI components
│   ├── pages/      # Individual pages
│   └── styles/     # Global styles
├── astro.config.mjs # Astro configuration
├── package.json    # Project dependencies
├── tailwind.config.js # Tailwind CSS configuration
└── tsconfig.json # Typescript configuration
```

## 📦 Requisitos

- Node.js 22.19 o posterior
- npm 9.6.5 o posterior

## 📦 Instalación

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/benitez-y-asociados.git
cd benitez-y-asociados
npm ci
```

## 🔧 Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) (or the port displayed in the terminal) to view the project.

## 🚀 Deployment

El sitio se aloja en: [https://benitezyasoc.com.ar/](https://benitezyasoc.com.ar/)

Genera la versión lista para publicar con:

```bash
npm run build
```

Los archivos estáticos resultantes quedan en `dist/`. El dominio de producción
predeterminado es `https://benitezyasoc.com.ar`; puedes sobrescribirlo con
`SITE_URL` en el entorno de build cuando sea necesario.

## 🛠️ Building for Production

Generate a production build:

```bash
npm run build
```

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

For any inquiries or support, contact **Benitez y Asociados** via their official website.
