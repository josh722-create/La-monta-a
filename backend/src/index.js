import express from 'express'
import cors from 'cors'
import { pool } from './db.js'

const app = express()
app.use(cors())
app.use(express.json())



app.get("/api/terapeutas/featured", async (req, res) => {
  try {
    const { rows } = await pool.query(`
      SELECT
        id,
        "Nombre" AS nombre,
        "Apellido_paterno" AS apellido_paterno,
        "Apellido_materno" AS apellido_materno,
        "Formación" AS formacion,
        "Semblanza" AS semblanza
      FROM public.la_montania_registro_terapeuta
      ORDER BY id ASC
      LIMIT 6
    `);

    res.json(rows);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "DB_ERROR" });
  }
});



app.get("/api/terapeutas", async (req, res) => {
  try {
    const q = (req.query.q ?? "").toString().trim();
    const limit = Math.min(parseInt(req.query.limit ?? "20", 10), 50);
    const cursor = req.query.cursor ? Number(req.query.cursor) : null;

    const params = [];
    let where = "WHERE 1=1";

    if (q) {
      params.push(q);
      where += `
        AND (
          "Nombre" ILIKE '%' || $${params.length} || '%' OR
          "Apellido_paterno" ILIKE '%' || $${params.length} || '%' OR
          "Apellido_materno" ILIKE '%' || $${params.length} || '%' OR
          "Ciudad" ILIKE '%' || $${params.length} || '%'
        )
      `;
    }

    if (cursor) {
      params.push(cursor);
      where += ` AND id > $${params.length} `;
    }

    params.push(limit);

    const { rows } = await pool.query(
      `
      SELECT
        id,
        "Nombre" AS nombre,
        "Apellido_paterno" AS apellido_paterno,
        "Apellido_materno" AS apellido_materno,
        "Ciudad" AS ciudad,
        "País" AS pais,
        "Modalidad" AS modalidad,
        "Idiomas_terapeuta" AS idiomas,
        "Formación" AS formacion,
        "Paquete / tradicional" AS paquete
      FROM public.la_montania_registro_terapeuta
      ${where}
      ORDER BY id ASC
      LIMIT $${params.length}
      `,
      params
    );

    const nextCursor = rows.length ? rows[rows.length - 1].id : null;
    res.json({ data: rows, nextCursor });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "DB_ERROR" });
  }
});


app.get("/api/terapeutas/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isFinite(id)) return res.status(400).json({ error: "BAD_ID" });

    const { rows } = await pool.query(
      `
      SELECT
        id,
        "Nombre" AS nombre,
        "Apellido_paterno" AS apellido_paterno,
        "Apellido_materno" AS apellido_materno,
        "Ciudad" AS ciudad,
        "País" AS pais,
        "Modalidad" AS modalidad,
        "Idiomas_terapeuta" AS idiomas,
        "Formación" AS formacion,
        "Cédula_profesional_formación" AS cedula_formacion,
        "Enfoque_terapéutico" AS enfoque,
        "Semblanza" AS semblanza,
        "Población_que_atiende" AS poblacion_atiende,
        "Población_que_no_atiende" AS poblacion_no_atiende,
        "Maestría" AS maestria,
        "Cédula_profesional_maestría" AS cedula_maestria,
        "Escuela_procedencia_formación" AS escuela_formacion,
        "Escuela_procedencia_maestría" AS escuela_maestria,
        "Paquete / tradicional" AS paquete
      FROM public.la_montania_registro_terapeuta
      WHERE id = $1
      LIMIT 1
      `,
      [id]
    );

    if (!rows.length) return res.status(404).json({ error: "NOT_FOUND" });

    res.json(rows[0]);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "DB_ERROR" });
  }
});


app.listen(3001, () => {
  console.log('API corriendo en http://localhost:3001')
})
