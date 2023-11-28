// env.d.ts
declare global {
    namespace NodeJS {
      interface ProcessEnv {
        URL_BACK: string;
        // Agrega aquí otras variables de entorno si las necesitas
      }
    }
  }
  