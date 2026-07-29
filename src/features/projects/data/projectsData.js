import novapay1 from "../../../assets/novapayImg/novapay1.png";
import novapay2 from "../../../assets/novapayImg/novapay2.png";
import novapay3 from "../../../assets/novapayImg/novapay3.png";
import novapay4 from "../../../assets/novapayImg/novapay4.png";

export const projects = [
  {
    id: 1,
    title: "NovaPay - Sistema Bancario",
    description: "Una aplicación basada en una arquitectura de microservicios orientada a transacciones bancarias seguras y eficientes.",
    longDescription: "NovaPay es una plataforma bancaria moderna construida sobre una arquitectura de microservicios. Cuenta con módulos de autenticación, transferencias, pagos, administración de cuentas y notificaciones en tiempo real. Desarrollada con un enfoque en seguridad, escalabilidad y una experiencia de usuario fluida tanto en web como en dispositivos móviles.",
    tags: ["React", "JavaScript", "Node.js", "PostgreSQL", "Docker", "Microservicios", "EXPO", ".NET", "C#"],
    github: "https://github.com/marcss-bnajera/NovaPay",
    demo: null,
    image: novapay1,
    gallery: [novapay1, novapay2, novapay3, novapay4]
  },
  // TIP: Agrega más proyectos aquí con el siguiente formato:
  // {
  //   id: 2,
  //   title: "Nombre del Proyecto",
  //   description: "Descripción breve del proyecto, qué hace y qué tecnologías usaste.",
  //   tags: ["React", "Node.js", "MongoDB"],
  //   github: "https://github.com/tu-usuario/nombre-del-proyecto",
  //   demo: "https://tu-demo.com",
  //   image: "/src/assets/images/projects/nombre-del-proyecto.png"
  // },
  // {
  //   id: 3,
  //   title: "Otro Proyecto",
  //   description: "Descripción del proyecto.",
  //   tags: ["Python", "Django", "PostgreSQL"],
  //   github: "https://github.com/tu-usuario/otro-proyecto",
  //   demo: null,
  //   image: null
  // },
];
