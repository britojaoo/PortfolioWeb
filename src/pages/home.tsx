
const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center flex-col text-center px-4">
      <h2 className="text-4xl font-bold mb-4">Olá, eu sou João Brito 👋</h2>
      <p className="text-lg max-w-xl">
        Desenvolvedor apaixonado por tecnologia, criando aplicações web modernas com React, Vite, Vue e TypeScript.
      </p>
      <a
        href="https://github.com/britojaoo"
        target="_blank"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Veja meu GitHub
      </a>
    </section>
  )
}

export default Home
