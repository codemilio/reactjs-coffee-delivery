import { Coffee, Timer } from '@phosphor-icons/react'
import headerImg from './assets/header.png'
import { Badge } from './components/Badge'

function App() {
  return (
    <main className="flex-1 h-screen bg-base-100">
      <div className="flex flex-col gap-y-16 mx-40">
        <header className="flex gap-x-14">
          <div className="flex flex-col gap-y-4">
            <h1 className="font-title text-5xl font-black leading-[130%]">
              Encontre o café perfeito para qualquer hora do dia.{' '}
            </h1>
            <span className="font-roboto text-xl">
              Com o Coffee Delivery você recebe seu café onde estiver a qualquer
              hora.
            </span>
            <div className="flex flex-row gap-x-10">
              <Badge
                label="Compras Simples e seguras"
                className="bg-primary-900"
              >
                <Timer size={16} />
              </Badge>
              <Badge
                label="Entrega rápida e rastread"
                className="bg-secondary-500"
              >
                <Timer size={16} />
              </Badge>
            </div>
            <div className="flex flex-row gap-x-10">
              <Badge label="Embalagem térmica" className="bg-primary-100">
                <Timer size={16} />
              </Badge>
              <Badge label="Café feito na hora" className="bg-base-700">
                <Coffee size={16} weight="fill" />
              </Badge>
            </div>
          </div>
          <img src={headerImg} alt="Descrição da imagem" />
        </header>
        <section>
          <h2 className="font-title text-4xl font-black"> Nossos cafés </h2>
        </section>
      </div>
    </main>
  )
}

export default App
