// src/pages/TerapeutaDetalle.jsx
import "../style/TherapistDetail.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";

function TerapeutaDetalle() {
  useEffect(() => {
    document.title = "Terapeutas | Psicoterapia La Montaña";
  }, []);
  return (
    <>
      <Header />

      <section className="therapist-detail-section">
        <div className="therapist-detail-inner">
          {/* Tarjeta principal */}
          <div className="therapist-detail-card">
            <div className="therapist-detail-image-wrapper">
              <img
                src="/src/assets/t1.png" // usa la misma foto que en las tarjetas
                alt="Foto de Luis Fernando Tellez"
              />
            </div>

            <div className="therapist-detail-info">
              <div className="therapist-detail-header">
                <h1>Luis Fernando Tellez</h1>

                <span className="therapist-detail-verified">
                  ✓
                </span>
              </div>

              <div className="therapist-detail-meta">
                <div>
                  <p>
                    <span className="meta-label">Cédula:</span>{" "}
                    13126839
                  </p>
                  <p>
                    <span className="meta-label">Enfoque:</span>{" "}
                    Terapia Sistémico-Racional
                  </p>
                </div>
                <div>
                  <p>
                    <span className="meta-label">
                      Años de experiencia:
                    </span>{" "}
                    6
                  </p>
                  <p>
                    <span className="meta-label">Ubicación:</span>{" "}
                    Querétaro, México.
                  </p>
                </div>
              </div>

              <div className="therapist-detail-block">
                <p className="block-label">Experiencia en:</p>
                <div className="block-box">
                  Conflictos de pareja, Mejora de comunicación, Toma de
                  decisiones, Manejo de emociones, Cambio de estilo de
                  vida, Resolución de conflictos.
                </div>
              </div>

              <div className="therapist-detail-block">
                <p className="block-label">Idiomas:</p>
                <div className="block-box">
                  Español, Inglés.
                </div>
              </div>
            </div>
          </div>

          {/* CTA inferior */}
          <div className="therapist-detail-cta">
            <h2>¿Listo para comenzar tu proceso?</h2>
            <p>
              Para agendar tu primera sesión en línea llena el
              formulario y te ayudaremos a encontrar al terapeuta que
              mejor se adapte a tus necesidades.
            </p>
            <button className="therapist-detail-cta-button">
              Agenda tu sesión en línea
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default TerapeutaDetalle;
