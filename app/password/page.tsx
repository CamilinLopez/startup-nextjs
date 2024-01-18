export default function page() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-28 bg-dark">
      <h1 className="text-2xl font-bold">Contraseña de administrador</h1>
      <form className="flex flex-col gap-4">
        <input className="text-base font-medium" type="password"/>
        <button className="rounded-md bg-black p-1 text-base font-medium leading-relaxed shadow-signUp transition duration-300 hover:bg-dark/50 sm:text-lg sm:leading-relaxed">
          Ingresar
        </button>
      </form>
    </div>
  );
}
