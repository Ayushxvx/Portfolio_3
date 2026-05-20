export default function Header(){
    return (
        <nav className="flex justify-evenly items-center backdrop-blur-sm border-2 border-solid border-white rounded-lg rounded-lg p-2 m-2">
            <div className="text-gray-300 hover:text-white transition-all transition-ease hover:underline underline-offset-4 transition-500">
                <a href="#home">Home</a>
            </div>
            <div className="text-gray-300 hover:text-white transition-all transition-ease hover:underline underline-offset-4 transition-500">
                <a href="#certificates">Certificates</a>
            </div>
           <div className="text-gray-300 hover:text-white transition-all transition-ease hover:underline underline-offset-4 transition-500">
                <a href="#journey">Journey</a>
            </div>
            <div className="text-gray-300 hover:text-white transition-all transition-ease hover:underline underline-offset-4 transition-500">
                <a href="#projects">Projects</a>
            </div>
            <div className="text-gray-300 hover:text-white transition-all transition-ease hover:underline underline-offset-4 transition-500">
                <a href="#contact">Contact</a>
            </div>
        </nav>
    )
}