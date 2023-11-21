import Image from 'next/image'
import ToDoContainer from '../components/ui/ToDoContainer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      

      <div className="relative flex place-items-center">
       <ToDoContainer/>
       
      </div>

      
    </main>
  )
}
