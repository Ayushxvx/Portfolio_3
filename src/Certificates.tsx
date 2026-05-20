import { useState } from "react"

export default function Certificates(){

    const [currentIndex,setCurrentIndex] = useState(0);

    const certificates = [
        {"url":'/1.jpg',"alt":"Certificate 1"},
        {"url":'/2.jpg',"alt":"Certificate 2"},
        {"url":'/3.jpg',"alt":"Certificate 3"},
        {"url":'/4.jpg',"alt":"Certificate 4"},
        {"url":'/5.jpg',"alt":"Certificate 5"},
        {"url":'/6.jpg',"alt":"Certificate 6"},
        {"url":'/7.jpg',"alt":"Certificate 7"},
        {"url":'/8.jpg',"alt":"Certificate 8"},
        {"url":'/9.jpg',"alt":"Certificate 9"},
        {"url":'/10.jpg',"alt":"Certificate 10"},
        {"url":'/11.jpg',"alt":"Certificate 11"},
        {"url":'/12.jpg',"alt":"Certificate 12"},
        {"url":'/13.jpg',"alt":"Certificate 13"},
        {"url":'/14.jpg',"alt":"Certificate 14"},
    ] 

    const decrement = () =>{
        if(currentIndex==0){
            setCurrentIndex(13);
        }else{
           setCurrentIndex((value)=>value-1)
    }
}

    const increment = () =>{
        if(currentIndex==13){
            setCurrentIndex(0);
        }else{
            setCurrentIndex((value)=>value+1)
        }

    }

    return(
        <>
        <div id="certificates" className="border-2 border-gray-800 border-solid rounded-lg bg-transparent backdrop-blur-md p-2 m-2 sm:w-8/12 md:w-6/12 mx-auto">
            <h1 className="text-cyan-700 font-serif text-2xl text-center p-2 m-2 underline underline-offset-6">
            Certificates
            </h1>
        <img alt={certificates[currentIndex].alt} src={certificates[currentIndex].url} className="p-2 m-2 rounded-lg mx-auto block w-11/12"  />
        <div className="flex justify-evenly items-center p-2 m-2 ">
            <button className="border-gray-700 border-2 border-solid rounded-lg p-2 m-2 text-gray-500 hover:text-white cursor-pointer transition-all transition-ease transition-500 bg-gradient-to-r from-purple-800 to-black" onClick={decrement}>
                Previous
            </button>
            <button className="border-gray-700 border-2 border-solid rounded-lg p-2 m-2 text-gray-500 hover:text-white cursor-pointer transition-all transition-ease transition-500 bg-gradient-to-r from-blue-800 to-black" onClick={increment}>
                Next
            </button>
            </div> 
        </div>
        </>
    )
}