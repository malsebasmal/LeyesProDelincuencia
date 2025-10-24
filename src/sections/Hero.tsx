import RowDown from "@icons/RowDown"

const Hero = () => {
  return (
    <section className="relative bg-[url('/wave.svg')] bg-no-repeat bg-cover bg-bottom h-dvh flex flex-col justify-between items-center text-center pt-40">
      <div className="flex flex-col justify-center items-center text-center gap-4">
        <h1 className="text-8xl">
          Leyes Pro Delincuencia
        </h1>
        <h2 className="text-5xl">
          Porque tod@s merecen estar informados.
        </h2>
        <div className="w-3xl text-xl">
          <p>
            El congreso de la república ha aprobado una serie de leyes que afectan negativamente a la seguridad ciudadana y a la justicia penal en nuestro país. Estas leyes, conocidas como "leyes pro delincuencia", han generado preocupación entre la población y los expertos en seguridad.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-center pt-10">
          <RowDown className="size-20" />
        </div>
      </div>
    </section>
  )
}

export default Hero