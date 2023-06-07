import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-gray-900 container mx-auto text-center rounded">
      <h1 className='text-yellow-400 text-xl font-bold'>Cripto Converter</h1>

      <div className='flex gap-2 p-4'>
        <input className='border-2 rounded-lg p-2' type="text" placeholder='1 BTC'/>
        <input className='border-2 rounded-lg p-2' type="text" placeholder='27263 USD'/>
      </div>

    </main>
  )
}
