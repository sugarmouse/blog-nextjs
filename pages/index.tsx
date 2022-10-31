import Image from 'next/image'
import png from 'assets/images/1.png'


export default function Home() {
  return (
    <>
      <h2>Index page</h2>
      <Image src={png} alt="vercel logo pic" width={200}/>
    </>
  )
}
