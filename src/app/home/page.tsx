import React from 'react'
import { Button } from "@/components/ui/button"

const Home = () => {
    return (
        <main className='flex justify-center items-center h-full flex-col gap-4'>
            <div>
                Home
            </div>
            <button className="bg-purple-500 py-3 px-7 rounded my-4 hover:bg-purple-700"> click me </button>
            <Button>Click me</Button>
            <Button className='bg-blue-700 font-bold' >Click me</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="destructive" size="lg" >Destructive</Button>
            <Button variant="custom" >Custom</Button>
        </main>
    )
}

export default Home
