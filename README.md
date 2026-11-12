# ITAlumni-Workspace

# 🌟 Platform Favorites & Networking Module

<div align="center">

![Badge Estado](https://img.shields.io/badge/Estado-En%20Desarrollo-brightgreen)
![Badge Lenguaje](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![Badge Estilos](https://img.shields.io/badge/Tailwind_CSS-38Bdf8?style=flat&logo=tailwind-css&logoColor=white)
![Badge CMS/Web](https://img.shields.io/badge/WordPress-21759B?style=flat&logo=wordpress&logoColor=white)

_Un módulo centralizado, modular y altamente performante para la gestión de favoritos en tiempo real (Usuarios, Ofertas de Empleo y Esdeveniments)._

</div>

---

## 🚀 Sobre el Proyecto

Este proyecto forma parte de una plataforma web modular desarrollada con estándares limpios de arquitectura BEM. Su objetivo principal es ofrecer una **sincronización de estado en tiempo real con `localStorage`**, permitiendo a los usuarios gestionar de forma fluida sus elementos favoritos (networking, vacantes de trabajo y eventos) acompañados de barras laterales interactivas, contadores dinámicos y experiencias personalizadas.

---

## 🛠️ Tecnologías y Herramientas

Las principales tecnologías y metodologías implementadas en el desarrollo:

| Categoría                | Tecnología / Herramienta             | Icono / Símbolo |
| :----------------------- | :----------------------------------- | :-------------- |
| **Lógica**               | TypeScript / JavaScript Modular      | 💻              |
| **Estilos**              | CSS / Metodología BEM & Tailwind CSS | 🎨              |
| **Entorno Web**          | WordPress & Desarrollo Frontend      | 🌐              |
| **Control de Versiones** | Git & GitHub                         | 🐙              |

---

## 📂 Arquitectura y Módulos

El sistema está estructurado mediante componentes reutilizables y prefijos específicos para garantizar que los estilos y la lógica permanezcan perfectamente aislados:

- 👥 **`fav-users-*`** $\rightarrow$ Módulo de gestión y visualización de red de contactos y perfiles preferidos.
- 💼 **`fav-jobs-*`** $\rightarrow$ Módulo enfocado en ofertas de empleo, seguimiento de candidaturas y alertas laborales.
- 📅 **`fav-events-*`** $\rightarrow$ Módulo dedicado a la organización, filtrado y guardado de eventos y entradas tecnológicas.

---

## ⚙️ Características Principales

- 🔄 **Sincronización en Tiempo Real:** Mecanismo recursivo integrado en el servicio de almacenamiento para actualizar la interfaz y los contadores (`badges`) instantáneamente al marcar o desmarcar favoritos.
- 📱 **Diseño 100% Responsivo:** Adaptado mediante Grid y Flexbox para ofrecer una experiencia óptima tanto en dispositivos móviles como en pantallas de escritorio grandes (1400px+).
- 🌐 **Soporte Multidioma (Catalán/Español):** Interfaces adaptadas con terminología nativa y accesible (`aria-labels`).
- 📦 **Servicio de Almacenamiento Centralizado (`storageService`):** Lógica desacoplada para manejar la persistencia de datos en el navegador de forma segura.

---

## 💻 Instalación y Ejecución local

Si deseas clonar y probar el proyecto en tu entorno local, sigue estos pasos:

1. Clona el repositorio:
    ```bash
    git clone [https://github.com/tu-usuario/nombre-del-repositorio.git](https://github.com/tu-usuario/nombre-del-repositorio.git)
    ```
