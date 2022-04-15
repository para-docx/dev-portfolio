import Navbar from '../components/nav/Navbar'
import Center from '../components/Center'
import Image from 'next/image'


export default function Home() {
  return (

    <div>
      <Navbar />
      <div className="bg-image">
      <Image src="/animecode.jpg" width="500" height="500" layout="fill" blur="true" />
      </div>
      <div class="main-text">
        <Center />
      </div>
    </div>
  )
}
