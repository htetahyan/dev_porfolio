import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='h-screen w-screen p-4 grid items-center justify-center lg:p-8'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}