import './styles.css';
import React from 'react';

const Portfolio = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="profile-picture">
          <img
            src="https://scontent.fclo1-4.fna.fbcdn.net/v/t39.30808-6/293362704_5353663334672916_899890907412020431_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHdtrDivAlfRfDvSyxHvf2XwFH54xjLq-fAUfnjGMur51lJ9-c-1vQSX-cu-FPa9L2HSEwhnXMwbncTxdkl_meJ&_nc_ohc=heAiuSvLF8oQ7kNvgF5mcHk&_nc_ht=scontent.fclo1-4.fna&oh=00_AYA9tzkKgTOAtdDQWcLD28hB1H4nPs8LSDNc6q32k2OegA&oe=66CDB746"
            alt="Foto de perfil"
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
      <div className="next-stream">
        <h2>Próximo directo</h2>
        <p>Viernes, 23 de Agosto a las 07:00 | Zona horaria: Bogotá</p>
      </div>
      <div className="bio">
        <p>
          Soy estudiante de la UAO, actualmente estoy haciendo la carrera de
          ingeniería Multimedia, y aquí podrás encontrar información acerca de mí.
        </p>
      </div>
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
        <h2>Proyectos</h2>
        <ul>
          <li>
            <a href="https://github.com/Draixser/Clase-1-web">Primera clase de Web</a>
          </li>
          <li>
            <a href="https://github.com/Draixser/Clase2">Segunda clase de Web</a>
          </li>
          <li>
            <a href="https://github.com/edwinmgallego/clase-practica-css-jueves/tree/main/DavidRoa2215926">
              Tercera clase de Web
            </a>
          </li>
        </ul>
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
