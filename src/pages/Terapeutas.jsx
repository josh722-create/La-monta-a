
import "../style/TherapistsSection.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";   
import { useEffect } from "react";
const therapists = [
  {
    slug: "luis-fernando-tellez",
    name: "Luis Fernando Tellez",
    role: "Terapia Sistémico - Racional",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    imageSrc: "/src/assets/t1.png",
    imageAlt: "Foto de Luis Fernando Tellez",
  },
  {
    slug: "luis-martinez",
    name: "Lic. Luis Martínez",
    role: "Terapia psicoanalítica",
    description:
      "Dinámica familiar, Relación entre padres e hijos, Límites y crianza, Comunicación en familia, Procesos emocionales.",
    imageSrc: "/src/assets/t1.png",
    imageAlt: "Foto de Luis Martínez",
  },
  {
    slug: "mariana-soto",
    name: "Dra. Mariana Soto",
    role: "Terapia Narrativa",
    description:
      "Ansiedad, Autoestima, Bienestar emocional, Reconexión personal, Control de pensamientos, Pérdidas y duelo.",
    imageSrc: "/src/assets/t1.png",
    imageAlt: "Foto de Mariana Soto",
  },
  {
    slug: "placeholder-1",
    name: "Full name",
    role: "Job title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    imageSrc: "/src/assets/t1.png",
    imageAlt: "Foto de terapeuta",
  },
  {
    slug: "placeholder-2",
    name: "Full name",
    role: "Job title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    imageSrc: "/src/assets/t1.png",
    imageAlt: "Foto de terapeuta",
  },
  {
    slug: "placeholder-3",
    name: "Full name",
    role: "Job title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    imageSrc: "/src/assets/t1.png",
    imageAlt: "Foto de terapeuta",
  },
  {
    slug: "placeholder-4",
    name: "Full name",
    role: "Job title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    imageSrc: "/src/assets/t1.png",
    imageAlt: "Foto de terapeuta",
  },
];


function Terapeutas() {
  useEffect(() => {
    document.title = "Terapeutas | Psicoterapia La Montaña";
  }, []);
  return (
    <>
      <Header />

      <section className="therapists-section">
        <div className="therapists-inner">
          {/* Título y texto superior */}
          <header className="therapists-header">
            <h2>Nuestro equipo de terapeutas</h2>
            <p>
              Nuestros especialistas son{" "}
              <strong>psicoterapeutas titulados</strong> con grados en
              diferentes áreas de especialidades. Su compromiso incluye una{" "}
              <strong>permanente actualización</strong> a través de seminarios y
              estudios continuos. ¡Conócelos!
            </p>
          </header>

          {/* Tarjetas de personas */}
          <div className="therapists-grid">
            {therapists.map((t) => (
              <Link
                key={t.slug}
                to={`/terapeutas/${t.slug}`}   // 👈 aquí abrirás la vista del terapeuta
                className="therapist-card-link"
              >
                <article className="therapist-card">
                  <div className="therapist-image-wrapper">
                    <img src={t.imageSrc} alt={t.imageAlt} />
                  </div>
                  <div className="therapist-body">
                    <h3 className="therapist-name">{t.name}</h3>
                    <p className="therapist-role">{t.role}</p>
                    <p className="therapist-description">{t.description}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* CTA inferior */}
          <div className="therapists-cta">
            <h3>¿Listo para comenzar tu proceso?</h3>
            <p>
              Para agendar tu primera sesión en línea llena el formulario y te
              ayudaremos a encontrar al terapeuta que mejor se adapte a tus
              necesidades.
            </p>
            <button className="therapists-cta-button">
              Agenda tu sesión en línea
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Terapeutas;
