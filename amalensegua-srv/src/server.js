const express = require("express");
const morgan = require("morgan");
const mssql = require("mssql");
const cors = require("cors");
const { auth } = require('express-openid-connect');
const { request } = require("express");
require('dotenv').config();

const app = express();
const port = 4000;

//require("./database/connection")
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  auth({
    auth0Logout: true,
    authRequired: false,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    secret: process.env.SECRET,
    idpLogout: true,
  })
);


const sqlConfig = {
  user: "srv_amalensegua",
  password: "989976",
  server: "192.168.1.3",
  database: "amalensegua",
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res)=>{
  res.send(req.oidc.isAuthenticated() ? 'logueado':'deslogueado')
})

app.get("/profile", (req, res)=>{
  res.send(req.oidc.user)
})

app.get("/api/estudiantes", async (req, res) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = pool
      .request()
      .query("SELECT * FROM [amalensegua].[dbo].[admon_estudiante]");
    const notAsyncResultset = await result;

    let cleanArray = notAsyncResultset.recordset.map((ele) => {
      return ele;
    });

    res.send(cleanArray);
  } catch (error) {
    console.error(error);
  }
});

app.get("/api/estado_estudiante", async (req, res) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = pool
      .request()
      .query("SELECT * FROM admon_estudiante WHERE estado=1;");
    const notAsyncResultset = await result;

    let cleanArray = notAsyncResultset.recordset.map((ele) => {
      return ele;
    });

    res.send(cleanArray);
  } catch (error) {
    console.error(error);
  }
});

app.get("/api/roles", async (req, res) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = pool
      .request()
      .query("SELECT * FROM [amalensegua].[dbo].[admon_role]");
    const notAsyncResultset = await result;

    let cleanArray = notAsyncResultset.recordset.map((ele) => {
      return ele;
    });

    res.send(cleanArray);
  } catch (error) {
    console.error(error);
  }
});

app.get("/api/role_leccion", async (req, res) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = pool
      .request()
      .query(
        "SELECT al.*,rl.* FROM piv_role_leccion rl INNER JOIN admon_leccion al ON al.id=rl.id WHERE id_role=8;"
      );
    const notAsyncResultset = await result;

    let cleanArray = notAsyncResultset.recordset.map((ele) => {
      return ele;
    });

    res.send(cleanArray);
  } catch (error) {
    console.error(error);
  }
});

app.get("/api/clase", async (req, res) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = pool
      .request()
      .query("SELECT * FROM [amalensegua].[dbo].[admon_clase]");
    const notAsyncResultset = await result;

    let cleanArray = notAsyncResultset.recordset.map((ele) => {
      return ele;
    });

    res.send(cleanArray);
  } catch (error) {
    console.error(error);
  }
});

app.get("/api/leccion_clase", async (req, res) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = pool
      .request()
      .query("SELECT * FROM admon_clase WHERE id_leccion=1;");
    const notAsyncResultset = await result;

    let cleanArray = notAsyncResultset.recordset.map((ele) => {
      return ele;
    });

    res.send(cleanArray);
  } catch (error) {
    console.error(error);
  }
});

app.get("/api/leccion", async (req, res) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = pool
      .request()
      .query("SELECT * FROM [amalensegua].[dbo].[admon_leccion]");
    const notAsyncResultset = await result;

    let cleanArray = notAsyncResultset.recordset.map((ele) => {
      return ele;
    });

    res.send(cleanArray);
  } catch (error) {
    console.error(error);
  }
});

app.get("/api/krn_leccion", async (req, res) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = pool
      .request()
      .query("SELECT * FROM [amalensegua].[dbo].[krn_leccion]");
    const notAsyncResultset = await result;

    let cleanArray = notAsyncResultset.recordset.map((ele) => {
      return ele;
    });

    res.send(cleanArray);
  } catch (error) {
    console.error(error);
  }
});


app.get("/api/diff_krnleccion", async (req, res) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = pool
      .request()
      .query(
        "SELECT (DATEDIFF(MINUTE,(CAST(hora_inicio AS datetime)),(CAST(hora_final AS datetime)))) AS 'diff' FROM krn_leccion WHERE id_estudiante=3 AND estado=1;"
      );
    const notAsyncResultset = await result;

    let cleanArray = notAsyncResultset.recordset.map((ele) => {
      return ele;
    });

    res.send(cleanArray);
  } catch (error) {
    console.error(error);
  }
});

app.get("/api/total_krnleccion", async (req, res) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = pool
      .request()
      .query(
        "SELECT SUM((DATEDIFF(MINUTE,(CAST(hora_inicio AS datetime)),(CAST(hora_final AS datetime))))) AS 'total' FROM krn_leccion WHERE id_estudiante=3 AND estado=1 AND id_adleccion=4;"
      );
    const notAsyncResultset = await result;

    let cleanArray = notAsyncResultset.recordset.map((ele) => {
      return ele;
    });

    res.send(cleanArray);
  } catch (error) {
    console.error(error);
  }
});

app.get("/api/prom_krnleccion", async (req, res) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = pool
      .request()
      .query(
        "SELECT AVG((DATEDIFF(MINUTE,(CAST(hora_inicio AS datetime)),(CAST(hora_final AS datetime))))) AS 'prom' FROM krn_leccion WHERE id_estudiante=3 AND estado=1;"
      );
    const notAsyncResultset = await result;

    let cleanArray = notAsyncResultset.recordset.map((ele) => {
      return ele;
    });

    res.send(cleanArray);
  } catch (error) {
    console.error(error);
  }
});

app.get("/api/estado_krnleccion", async (req, res) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = pool
      .request()
      .query(
        "SELECT * FROM krn_leccion WHERE id_estudiante=3 AND estado=1 AND id_adleccion=4;"
      );
    const notAsyncResultset = await result;

    let cleanArray = notAsyncResultset.recordset.map((ele) => {
      return ele;
    });

    res.send(cleanArray);
  } catch (error) {
    console.error(error);
  }
});

app.get("/api/examen", async (req, res) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = pool
      .request()
      .query("SELECT * FROM [amalensegua].[dbo].[admon_examen]");
    const notAsyncResultset = await result;

    let cleanArray = notAsyncResultset.recordset.map((ele) => {
      return ele;
    });

    res.send(cleanArray);
  } catch (error) {
    console.error(error);
  }
});

app.get("/api/krn_examen", async (req, res) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = pool
      .request()
      .query("SELECT * FROM [amalensegua].[dbo].[krn_examen]");
    const notAsyncResultset = await result;

    let cleanArray = notAsyncResultset.recordset.map((ele) => {
      return ele;
    });

    res.send(cleanArray);
  } catch (error) {
    console.error(error);
  }
});

app.get("/api/estado_krn_examen", async (req, res) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = pool
      .request()
      .query("SELECT * FROM krn_examen WHERE estado=0 AND id_estudiante=1;");
    const notAsyncResultset = await result;

    let cleanArray = notAsyncResultset.recordset.map((ele) => {
      return ele;
    });

    res.send(cleanArray);
  } catch (error) {
    console.error(error);
  }
});

app.get("/api/estatus_krn_examen", async (req, res) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = pool
      .request()
      .query("SELECT * FROM krn_examen WHERE estado=0 AND id_estudiante=1;");
    const notAsyncResultset = await result;

    let cleanArray = notAsyncResultset.recordset.map((ele) => {
      return ele;
    });

    res.send(cleanArray);
  } catch (error) {
    console.error(error);
  }
});

app.get("/api/evento_auditoria", async (req, res) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = pool
      .request()
      .query("SELECT * FROM [amalensegua].[dbo].[admon_evento_auditoria]");
    const notAsyncResultset = await result;

    let cleanArray = notAsyncResultset.recordset.map((ele) => {
      return ele;
    });

    res.send(cleanArray);
  } catch (error) {
    console.error(error);
  }
});

app.get("/api/krn_auditoria", async (req, res) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = pool
      .request()
      .query("SELECT * FROM [amalensegua].[dbo].[krn_auditoria]");
    const notAsyncResultset = await result;

    let cleanArray = notAsyncResultset.recordset.map((ele) => {
      return ele;
    });

    res.send(cleanArray);
  } catch (error) {
    console.error(error);
  }
});


app.get("/api/examenes/nombre/aprobados", async (req, res) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = pool.request()
      .query(`SELECT ke.id AS 'id_examen',ke.estatus,ae.nombre AS 'Nombre_examen',aes.nombre AS 'Nombre_estudiante' FROM krn_examen ke
  INNER JOIN admon_examen ae ON ke.id_examen=ae.id
  INNER JOIN admon_estudiante aes ON ke.id_estudiante=aes.id
  WHERE estatus=1;`);
    const notAsyncResultset = await result;

    let cleanArray = notAsyncResultset.recordset.map((ele) => {
      return ele;
    });

    res.send(cleanArray);
  } catch (error) {
    console.error(error);
  }
});

app.get("/api/examenes/nombre/reprobados", async (req, res) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = pool.request()
      .query(`SELECT ke.id AS 'id_examen',ke.estatus,ae.nombre AS 'Nombre_examen',aes.nombre AS 'Nombre_estudiante' FROM krn_examen ke
  INNER JOIN admon_examen ae ON ke.id_examen=ae.id
  INNER JOIN admon_estudiante aes ON ke.id_estudiante=aes.id
  WHERE estatus=0;`);
    const notAsyncResultset = await result;

    let cleanArray = notAsyncResultset.recordset.map((ele) => {
      return ele;
    });

    res.send(cleanArray);
  } catch (error) {
    console.error(error);
  }
});


app.get("/api/examenes/individual/probados", async (req, res) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = pool.request()
      .query(`SELECT * FROM krn_examen WHERE nota>=7 AND id_estudiante=3;`);
    const notAsyncResultset = await result;

    let cleanArray = notAsyncResultset.recordset.map((ele) => {
      return ele;
    });

    res.send(cleanArray);
  } catch (error) {
    console.error(error);
  }
});


app.get("/api/examenes/individual/reprobados", async (req, res) => {
  try {
    const pool = await mssql.connect(sqlConfig);
    const result = pool.request()
      .query(`SELECT * FROM krn_examen WHERE nota<=6 AND id_estudiante=3;`);
    const notAsyncResultset = await result;

    let cleanArray = notAsyncResultset.recordset.map((ele) => {
      return ele;
    });

    res.send(cleanArray);
  } catch (error) {
    console.error(error);
  }
});








/*app.post("/api/estudiante/id", async (req, res) => {
  try {
    let idEstudiante = id;
    const pool = await mssql.connect(sqlConfig);
    const result = pool.request()
      .query(`SELECT ke.id AS 'id_examen',ke.estatus,ae.nombre AS 'Nombre_examen',aes.nombre AS 'Nombre_estudiante' FROM krn_examen ke
  INNER JOIN admon_examen ae ON ke.id_examen=ae.id
  INNER JOIN admon_estudiante aes ON ke.id_estudiante=aes.id
  WHERE estatus=1;`);
    const notAsyncResultset = await result;

    let cleanArray = notAsyncResultset.recordset.map((ele) => {
      return ele;
    });

    res.send(cleanArray);
  } catch (error) {
    console.error(error);
  }
});*/

app.get("/api/clase", (req, res) => {
  let alumno = {
    name: "Mario",
    edad: 12,
  };
  res.send(alumno);
});

app.listen(port, () => {
  console.log(`hablando con el puerto ${port}`);
});
