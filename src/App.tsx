import { Timer } from '@phosphor-icons/react'
import headerImg from './assets/header.png'
import { Badge } from './components/Badge'

function App() {
  return (
    <main className='flex-1 h-screen bg-base-100'>
      <div className="mx-40">
        <header className="flex gap-x-14">
          <div className="flex flex-col gap-y-4">
            <h1 className="font-title text-5xl font-black leading-[130%]">
              Encontre o café perfeito para qualquer hora do dia.{' '}
            </h1>
            <span className="font-roboto text-xl">
              Com o Coffee Delivery você recebe seu café onde estiver a qualquer
              hora.
            </span>
						<Badge label='Teste'>
							<Timer size={16} />
						</Badge>
          </div>
          <img src={headerImg} alt="Descrição da imagem" />
        </header>
      </div>
    </main>
  )
}

export default App
