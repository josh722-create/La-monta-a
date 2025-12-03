import "../style/beneficios.css";

function Beneficios() {
  return (
    <section className="beneficios-section">
  <div className="beneficios-bg-line"></div>

  <div className="beneficios-container">
    <img src="/src/assets/curva3.png" className="beneficios-line" alt="" />

    <div className="beneficios-left">
      <h2>
        Descubre los beneficios que tendrás por ser consultante de La Montaña
      </h2>

      <button className="beneficios-btn">Agenda tu sesión en línea</button>
    </div>

    <div className="beneficios-right">
      <ul>
        <li>
          <img src="/src/assets/Curso_bienvenida.png" alt="icono" />
          <div>
            <h3>Curso de bienvenida</h3>
            <p>
              Después de tu primera sesión, tendrás acceso a un <strong className="highlight-green">curso digital</strong> diseñado para acompañarte en tus primeros pasos.
            </p>
          </div>
        </li>

        <li>
          <img src="/src/assets/Acceso_biblioteca.png" alt="icono" />
          <div>
            <h3>Acceso a la biblioteca completa</h3>
            <p>
              Al finalizar tu quinta sesión, podrás acceder a nuestra biblioteca de recursos y cursos digitales.
            </p>
          </div>
        </li>

        <li>
          <img src="/src/assets/Beneficios_preferenciales.png" alt="icono" />
          <div>
            <h3>Beneficios preferenciales</h3>
            <p>
              Obtén tarifas especiales en todos los servicios y materiales exclusivos.
            </p>
          </div>
        </li>

        <li>
          <img src="/src/assets/Preventas_exclusivas.png" alt="icono" />
          <div>
            <h3>Preventas exclusivas</h3>
            <p>
              Disfruta de acceso prioritario a nuevas experiencias y cursos.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</section>

  );
}

export default Beneficios;
