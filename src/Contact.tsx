import { useEffect, useRef, useState, type FormEvent } from "react"
import emailjs from "@emailjs/browser";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AOS from "aos";
 
export default function Contact(){

    useEffect(()=>{
        AOS.init({
            duration:1000,
            once:false,
        });
        AOS.refresh();
    },[])

    const form = useRef<HTMLFormElement|null>(null);

    const [mailSent,setMailSent] = useState(false);

    const [message,setMessage] = useState('');

    const sendMail = (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        setMailSent(true)

        if(form.current){

        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_PUBLIC_KEY
        ).then(()=>{
            setMessage("Mail Sent!")
            if(form.current)
            form.current.reset();
        }).catch(()=>{
            setMessage("Error!")
            if(form.current)
            form.current.reset();
        })
    }else{
        return;
    }

    }

    return(
        <>
        <div id="contact" className="bg-transparent backdrop-blur-lg border-2 border-solid border-gray-800 p-2 m-2 rounded-lg sm:w-8/12 md:w-6/12 mx-auto">
        <h1 className="text-cyan-700 font-serif text-2xl text-center p-2 m-2 underline underline-offset-6">
        Contact

        <div className="p-2 m-2 flex justify-evenly items-center">
        <a target="_blank" href="https://www.github.com/ayushxvx" className="hover:opacity-80 transition-all transition-ease transition-500">
            <GitHubIcon />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/ayush-verma-a31050293" className="hover:opacity-80 transition-all transition-ease transition-500">
            <LinkedInIcon />
        </a>
        </div>

        </h1>
        <form ref={form} onSubmit={sendMail} className="p-2 m-2 border-2 border-solid border-gray-500 rounded-lg" >

            <input type="text" name="name" required className="text-gray-200 text-right font-mono p-2 m-2 rounded-lg backdrop-blur-2xl border-2 border-solid border-gray-500 block mx-auto w-10/12 sm:w-8/12 md:w-6/12" placeholder="Enter Your Name" />

            <input type="email" name="email" required className="text-gray-200 text-right font-mono p-2 m-2 rounded-lg backdrop-blur-2xl border-2 border-solid border-gray-500 block mx-auto w-10/12 sm:w-8/12 md:w-6/12" placeholder="Enter Your Email" />

            <input type="text" name="message" required className="text-gray-200 text-right font-mono p-2 m-2 rounded-lg backdrop-blur-2xl border-2 border-solid border-gray-500 block mx-auto w-10/12 sm:w-8/12 md:w-6/12" placeholder="Enter Your Message" />

            <button className="border-2 border-solid border-cyan-500 p-2 m-2 block mx-auto cursor-pointer text-white hover:opacity-80 rounded-lg hover:bg-gray-900 hover:text-cyan-200">
                Send Mail
            </button>

        </form>

        {mailSent?<div data-aos="fade-up" className="font-mono font-bold text-cyan-500 text-center">
            {message}
        </div>:<></>}

        </div>
        </>
    )
}