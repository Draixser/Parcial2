import './styles.css';
import React from 'react';
import Proyectos from './componentes/Proyectos';

const Portfolio = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="profile-picture">
          <img
            src="https://scontent.fpei2-1.fna.fbcdn.net/v/t39.30808-6/293362704_5353663334672916_899890907412020431_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=4ltBqInNUj4Q7kNvgHJFAP3&_nc_ht=scontent.fpei2-1.fna&_nc_gid=ALhJrWjYz8Rh7Kq4gGEjsGt&oh=00_AYA3LjgQUsrUoerIPEdD03ieVOXcT4RBlQZBEwux2Zhrbw&oe=67051646"
            alt="/public/roa.png"
          />
        </div>
        <div className="profile-info">
          <h1>David Santiago Roa Mayor</h1>
          <p>@David.Roa</p>
          <div className="social-links">
            <a href="https://www.instagram.com/_davidroa_/">Instagram</a>
            <a href="https://www.youtube.com/@davidsantiagoroamayor6863">YouTube</a>
            <a href="https://github.com/Draixser">GitHub</a>
          </div>
        </div>
      </div>
      <div className="details">
        <div className="left">
          <p>2+ años de experiencia</p>
        </div>
        <div className="right">
          <p>10 aplicaciones creadas</p>
        </div>
        <div className="left">
          <p>2M+ seguidores</p>
        </div>
      </div>
      
      <div className="bio">
        <p>
          Soy estudiante de la UAO, actualmente estoy haciendo la carrera de
          ingeniería Multimedia, y aquí podrás encontrar información acerca de mí.
        </p>
        <p>Habilidades Duras:
          Programación: Conocimientos en lenguajes como JavaScript, HTML, CSS, y Python.
          Diseño Gráfico: Manejo de software como Adobe Photoshop, Illustrator y After Effects.
          Desarrollo Web: Habilidades en diseño y desarrollo de sitios web, tanto front-end como back-end.
          Animación: Conocimientos en técnicas de animación 2D y 3D, usando software como Blender o Maya.
          Producción de Video: Edición y producción de video con herramientas como Premiere Pro o Final Cut Pro.
          Modelado 3D: Habilidades en la creación de modelos 3D para juegos o simulaciones.

        </p>
       
      </div>
      <div className="bio">  <p>Habilidades Blandas:
          Comunicación: Capacidad para expresar ideas claramente y trabajar en equipo.
          Creatividad: Innovación y pensamiento fuera de la caja para resolver problemas.
          Adaptabilidad: Flexibilidad para aprender nuevas herramientas y tecnologías rápidamente.
          Trabajo en Equipo: Colaboración efectiva con otros profesionales de diferentes disciplinas.
          Gestión del Tiempo: Habilidad para priorizar tareas y cumplir plazos.
          Pensamiento Crítico: Capacidad para analizar problemas y tomar decisiones informadas.</p></div>
      <div className="community">
        <h2>Comunidad</h2>
        <ul>
          <li>
            <a href="https://www.youtube.com/@davidsantiagoroamayor6863">
              Cursos gratis
            </a>{' '}
            - Consulta mis tutoriales para aprender programación
          </li>
          <li>
            <a href="https://www.twitch.tv/draixser">Twitch</a> - Transmisiones sobre
            programación de lunes a viernes
          </li>
        </ul>
      </div>
      <div className="community">
        <Proyectos />
      </div>
      <div className="card">
        <img
          src="https://th.bing.com/th/id/OIP.o-wNqCyhGc3XpFMfCCFpigAAAA?rs=1&pid=ImgDetMain"
          height="100"
          className="JavaLogo"
          alt="JavaLogo"
        />
      </div>
    </div>
  );
};

export default Portfolio;
