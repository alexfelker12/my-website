import Link from 'next/link'
import './globals.css'

export default function HomePage() {
  return (
    <div className='p-4 block w-full'>
      Welcome!

      <div className={`m-4 w-20 h-10 bg-sky-500 hover:bg-sky-300 flex justify-center place-items-center cursor-pointer rounded transition-all duration-150`}>button</div>

      {/* <div className="p-4 w-full h-96 flex flex-wrap">
        {['300', '400', '500', '600', '700', '800', '900'].map(colval => {
          return <div className={`m-4 w-20 h-10 bg-pink-${colval} hover:bg-sky-${colval+100} flex justify-center place-items-center cursor-pointer rounded`}>button</div>
        })}
      </div> */}
    </div>
  )
}