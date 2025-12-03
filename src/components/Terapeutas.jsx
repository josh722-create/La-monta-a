import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "../style/terapeutas.css";
import { Link } from "react-router-dom";

const data = [
  {
    slug: "mariana-soto",
    img: "/src/assets/t1.png",
    nombre: "Dra. Mariana Soto",
    rol: "Especialista en terapia individual y manejo emocional",
    texto:
      "Mariana acompaña a personas que buscan reconectar con su bienestar interior, manejar ansiedad y fortalecer autoestima.",
  },
  {
    slug: "daniel-herrera",
    img: "/src/assets/t1.png",
    nombre: "Mtro. Daniel Herrera",
    rol: "Psicoterapeuta de pareja y comunicación emocional",
    texto:
      "Daniel ayuda a parejas a reconstruir la confianza, mejorar la comunicación y gestionar conflictos desde la empatía. Su práctica se basa en la terapia sistémica y emocionalmente enfocada.",
  },
  {
    slug: "luis-martinez",
    img: "/src/assets/t1.png",
    nombre: "Lic. Luis Martínez",
    rol: "Psicólogo familiar y desarrollo de vínculos saludables",
    texto:
      "Luis trabaja con familias que buscan mejorar la dinámica en casa, fortalecer la relación entre padres e hijos y generar espacios de diálogo.",
  },
];


function Terapeutas() {
  return (
    <section className="terapeutas-section">
      <div className="terapeutas-container">
        <Splide
          options={{
            type: "loop",
            perPage: 3,
            perMove: 1,
            gap: "0rem",
            padding: "0rem",
            focus: "center",
            pagination: true,
            arrows: true,
            speed: 800,
            easing: "ease",
            autoplay: true,
            interval: 3000,
            pauseOnHover: true,
            pauseOnFocus: false,
            pauseOnTouch: false,
            waitForTransition: true,
            breakpoints: {
              1100: { perPage: 2 },
              768: { perPage: 1 },
            },
          }}
          aria-label="Nuestros terapeutas"
        >
          {data.map((t, index) => (
            <SplideSlide key={index}>
              <Link
                to={`/terapeutas/${t.slug}`}   // 👈 abre la ficha
                className="card"
              >
                <img src={t.img} className="card-img" alt={t.nombre} />

                <div className="card-content">
                  <h3>{t.nombre}</h3>
                  <h4>{t.rol}</h4>
                  <p>{t.texto}</p>
                </div>
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}

export default Terapeutas;
