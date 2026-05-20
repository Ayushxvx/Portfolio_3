export default function Projects(){

    const files = [
        {"url":"/face_detection.webp","alt":"Real Time face Detection Model","technologies":["Open CV","Python","Tensorflow"],"github":"https://github.com/Ayushxvx/opencv_face_detection"},
        {"url":'/django_Rest.avif',"alt":"Full Stack blog android app with authentication","technologies":["React Native","DRF","Sqlite"],"github":"https://github.com/Ayushxvx/backend_1"},
        {"url":"/spring_boot.webp","alt":"Full Stack IPL Bidding system with authentication","technologies":["Angular","Spring Boot","Postgresql"],"github":"https://github.com/Ayushxvx/spring_backend"},
        {"url":"/django.jpg","alt":"Event Management App with authentication","technologies":["React","Django","Sqlite","Tailwind CSS"],"github":"https://github.com/Ayushxvx/Event-Horizon-Network"}
    ]


    return(
        <>
        <div id="projects" className="bg-transparent backdrop-blur-md p-2 m-2 sm:w-8/12 md:w-6/12 rounded-lg border-2 border-gray-700 border-solid mx-auto">
        <h1 className="p-2 m-2 text-2xl font-serif text-center text-cyan-700 underline underline-offset-6">
        Projects
        </h1>
        <div className="flex justify-evenly items-center backdrop-blur-xl flex-wrap">
        <div className="border-2 border-solid border-white border-gray-700 rounded-lg p-4 m-2">

        {files.map((value)=>{
            return <>
            <div className="p-2 m-2 border-2 border-solid border-white outline-2 outline-offset-4 outline-solid outline-cyan-400 rounded-lg">
                <img src={value.url} alt="image" className="p-2 m-2 rounded-xl block mx-auto" /> <br />
                <h3 className="text-xl text-cyan-400 text-center font-mono font-bold p-2 m-2">
                {value.alt}
                </h3>
                <p className="p-2 m-2 font-sans text-gray-500">
                    Technologies Used: 
                    {value.technologies.map((technology)=>
                    <span className="text-gray-300 text-sm">
                    &nbsp; {technology} 
                    </span>
                    )}
                </p>
                  <span className="text-center flex justify-evenly items-center">
                      <a target="_blank" href={value.github} className="p-2 m-2 mx-auto text-cyan-400 underline underline-offset-4 border-2 border-cyan-500 rounded-lg outline-2 outline-offset-4 outline-solid outline-white m-2 hover:opacity-80 transition-all transition-ease transiton-500"> <i>Github</i> </a>
                  </span>

            </div> 
            <br />
            <br />
            </>
        })}

        </div>
        </div>
        </div>
        </>
    )
}