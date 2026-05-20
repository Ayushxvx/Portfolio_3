import { Typewriter } from "react-simple-typewriter"

export default function Home(){
    return(
        <>
        <div id="home" className="bg-transparent backdrop-blur-md rounded-2xl border-2 border-solid border-gray-800 p-2 m-2 font-mono sm:w-8/12 md:w-6/12 mx-auto">
        <h1 className="text-center text-gray-200 p-2 m-2 text-2xl">
        Hi, I am Ayush Verma
        </h1>
        <h2 className="text-white text-center p-2 m-2">
        <span className="text-cyan-600">
        <Typewriter words={["AI/ML Developer","Software Developer","Full Stack Developer","Frontend Developer","Backend developer"]}
        loop={true}
        cursor
        cursorStyle="_"
        typeSpeed={60}
        deleteSpeed={30}
        delaySpeed={1200}
        />
        </span>
        </h2>
        <h1 className="text-cyan-700 block text-center font-serif text-xl underline underline-offset-6">
                Skills
        </h1>
        <h2 className="text-white text-center p-2 m-2 grid grid-cols-3 md:grid-cols-4  justify-evenly items-center ">
        <span className="bg-gradient-to-r from-purple-900 via-blue-900 to-black rounded-full p-2 m-2 text-gray-200 border-2 border-solid border-cyan-800 text-sm">
        AI/ML
        </span>
        <span className="bg-gradient-to-r from-blue-900 via-purple-900 to-black rounded-full p-2 m-2 text-gray-200 border-2 border-solid border-cyan-800 text-sm">
        Python
        </span>
        <span className="bg-gradient-to-r from-purple-900 via-blue-900 to-black rounded-full p-2 m-2 text-gray-200 border-2 border-solid border-cyan-800 text-sm">
        Java
        </span>
        <span className="bg-gradient-to-r from-blue-900 via-purple-900 to-black rounded-full p-2 m-2 text-gray-200 border-2 border-solid border-cyan-800 text-sm">
        HTML5
        </span>
        <span className="bg-gradient-to-r from-purple-900 via-blue-900 to-black rounded-full p-2 m-2 text-gray-200 border-2 border-solid border-cyan-800 text-sm">
        CSS
        </span>
        <span className="bg-gradient-to-r from-blue-900 via-purple-900 to-black rounded-full p-2 m-2 text-gray-200 border-2 border-solid border-cyan-800 text-sm">
        Tailwind
        </span>
        <span className="bg-gradient-to-r from-purple-900 via-blue-900 to-black rounded-full p-2 m-2 text-gray-200 border-2 border-solid border-cyan-800 text-sm">
        React
        </span>
        <span className="bg-gradient-to-r from-blue-900 via-purple-900 to-black rounded-full p-2 m-2 text-gray-200 border-2 border-solid border-cyan-800 text-sm">
        Angular
        </span>
        <span className="bg-gradient-to-r from-purple-900 via-blue-900 to-black rounded-full p-2 m-2 text-gray-200 border-2 border-solid border-cyan-800 text-sm">
        Spring Boot
        </span>
        <span className="bg-gradient-to-r from-blue-900 via-purple-900 to-black rounded-full p-2 m-2 text-gray-200 border-2 border-solid border-cyan-800 text-sm">
        Django
        </span>
        <span className="bg-gradient-to-r from-purple-900 via-blue-900 to-black rounded-full p-2 m-2 text-gray-200 border-2 border-solid border-cyan-800 text-sm">
        Flask
        </span>
        <span className="bg-gradient-to-r from-blue-900 via-purple-900 to-black rounded-full p-2 m-2 text-gray-200 border-2 border-solid border-cyan-800 text-sm">
        Git
        </span>
        </h2>
        </div>
        </>
    )
}