// src/pages/TerapeutaDetalle.jsx
import "../style/TherapistDetail.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

function TerapeutaDetalle() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [t, setT] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        setError("");
        setLoading(true);

        const res = await fetch(`/api/terapeutas/${id}`, {
          signal: controller.signal,
        });

        if (res.status === 404) throw new Error("NOT_FOUND");
        if (!res.ok) throw new Error("HTTP " + res.status);

        const json = await res.json();
        setT(json);

        const nombreCompleto = [json.nombre, json.apellido_paterno, json.apellido_materno]
          .filter(Boolean)
          .join(" ")
          .replace(/\s+/g, " ")
          .trim();

        document.title = `${nombreCompleto} | Psicoterapia La Montaña`;
      } catch (e) {
        if (e.name !== "AbortError") {
          console.error(e);
          setError(e.message === "NOT_FOUND" ? "Terapeuta no encontrado." : "Cargando..");
        }
      } finally {
        setLoading(false);
      }
    })();

    return () => controller.abort();
  }, [id]);

  const backToList = () => {
    const from = location.state?.from || "/terapeutas";
    const scrollY = location.state?.scrollY;

    navigate(from, { state: { restoreY: scrollY ?? 0 } });
  };

  if (loading) {
    return (
      <>
        <Header />
        <section className="therapist-detail-section">
          <div className="therapist-detail-inner" style={{ display: "flex", justifyContent: "center", padding: "40px 0" }}>
            <div className="spinner" aria-label="Cargando terapeuta" />
          </div>
        </section>
        <Footer />
      </>
    );
  }

  if (error || !t) {
    return (
      <>
        <Header />
        <section className="therapist-detail-section">
          <div className="therapist-detail-inner">
            <p>{error || "Cargando.."}</p>
            <button className="therapist-detail-cta-button" onClick={backToList}>
              Volver a terapeutas
            </button>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  const nombreCompleto = [t.nombre, t.apellido_paterno, t.apellido_materno]
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

  const safe = (v) => {
    const s = (v ?? "").toString().trim();
    if (!s || s.toUpperCase() === "NULL") return "";
    return s;
  };

  // campos
  const cedula = safe(t.cedula_formacion);
  const enfoque = safe(t.enfoque);
  const ubicacion = [safe(t.ciudad), safe(t.pais)].filter(Boolean).join(", ");
  const idiomas = safe(t.idiomas).replace(/\s*,\s*/g, ", ").replace(/,\s*$/, "");
  const experienciaEn = safe(t.poblacion_atiende) || safe(t.formacion) || "";

  return (
    <>
      <Header />

      <section className="therapist-detail-section">
        <div className="therapist-detail-inner">
          {/* Botón volver (opcional) */}
          <button
            onClick={backToList}
            className="therapist-detail-cta-button"
            style={{ marginBottom: 16 }}
          >
            ← Volver
          </button>

          {/* Tarjeta principal */}
          <div className="therapist-detail-card">
            <div className="therapist-detail-image-wrapper">
              <img src="/src/assets/t1.png" alt={`Foto de ${nombreCompleto}`} />
            </div>

            <div className="therapist-detail-info">
              <div className="therapist-detail-header">
                <h1>{nombreCompleto}</h1>
                <span className="therapist-detail-verified">✓</span>
              </div>

              <div className="therapist-detail-meta">
                <div>
                  <p>
                    <span className="meta-label">Cédula:</span>{" "}
                    {cedula || "—"}
                  </p>
                  <p>
                    <span className="meta-label">Enfoque:</span>{" "}
                    {enfoque || "—"}
                  </p>
                </div>
                <div>
                  <p>
                    <span className="meta-label">Modalidad:</span>{" "}
                    {safe(t.modalidad) || "—"}
                  </p>
                  <p>
                    <span className="meta-label">Ubicación:</span>{" "}
                    {ubicacion || "—"}
                  </p>
                </div>
              </div>

              {/* Semblanza */}
              <div className="therapist-detail-block">
                <p className="block-label">Semblanza:</p>
                <div className="block-box">
                  {safe(t.semblanza) || "—"}
                </div>
              </div>

              {/* Experiencia / población */}
              <div className="therapist-detail-block">
                <p className="block-label">Experiencia en:</p>
                <div className="block-box">
                  {experienciaEn || "—"}
                </div>
              </div>

              {/* Idiomas */}
              <div className="therapist-detail-block">
                <p className="block-label">Idiomas:</p>
                <div className="block-box">
                  {idiomas || "—"}
                </div>
              </div>
            </div>
          </div>

          {/* CTA inferior */}
          <div className="therapist-detail-cta">
            <h2>¿Listo para comenzar tu proceso?</h2>
            <p>
              Para agendar tu primera sesión en línea llena el formulario y te
              ayudaremos a encontrar al terapeuta que mejor se adapte a tus
              necesidades.
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
