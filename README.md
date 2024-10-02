# Portafolio en React con Vite

## Descripción

Este proyecto es una página web de portafolio creada con **React** y **Vite**. La aplicación muestra diferentes proyectos y cuenta con una sección de contacto. El objetivo principal es ofrecer una plataforma sencilla y rápida para presentar trabajos personales de una manera profesional.

## Funcionalidades

- **Página de Inicio**: Contiene una introducción y una breve descripción del portafolio.
- **Proyectos**: Muestra una lista de proyectos realizados con detalles básicos.
- **Contacto**: Incluye un formulario para que los usuarios se puedan comunicar.
- **Navegación**: La aplicación utiliza `react-router-dom` para moverse entre las secciones.

## Tecnologías

- **React**: Para crear la interfaz de usuario.
- **Vite**: Como herramienta de desarrollo y empaquetado.
- **CSS**: Para la estilización básica de la página.

## Instalación

Sigue estos pasos para ejecutar el proyecto localmente:

1. Clona este repositorio:

    ```bash
    git clone https://github.com/usuario/portafolio-react-vite.git
    ```

2. Entra en el directorio del proyecto:

    ```bash
    cd portafolio-react-vite
    ```

3. Instala las dependencias:

    ```bash
    npm install
    ```

4. Inicia el servidor de desarrollo:

    ```bash
    npm run dev
    ```

    La aplicación estará disponible en `http://localhost:5173`.

## Estructura del Proyecto

```bash
portafolio-react-vite/
│
├── public/             # Archivos públicos como el index.html
├── src/                # Código fuente del proyecto
│   ├── components/     # Componentes reutilizables
│   ├── pages/          # Páginas principales
│   ├── App.jsx         # Componente principal
│   ├── main.jsx        # Punto de entrada de la aplicación
├── package.json        # Dependencias y scripts del proyecto
└── README.md           # Documentación del proyecto
