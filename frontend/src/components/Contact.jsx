import { Github, GithubIcon, Linkedin, Mail, MailCheck,MapPin } from 'lucide-react';
import {toast} from 'react-toastify'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "77931c76-1e95-4bde-88a4-11c7af5dfc6d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Submit Successfully");
      event.target.reset();
    }
    else{
      toast.error("Error");
    }
  };
  return (
    <div id="contact" className="text-white  md:mx-5 lg:mx-0 py-20 md:py-40">
      <h2 className="text-4xl font-bold justify-center flex items-center gap-3"><Mail className='size-9'/>Get in Touch</h2>
      <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-6xl mx-auto py-10 gap-20 md:gap-12  lg:gap-40">
        <div className="flex  flex-col gap-3  max-w-[310px] md:max-w-[500px] ">
          <h2 className="text-2xl font-bold mb-5 ">Let's Talk</h2>
          <p className="font-medium w-[300px]  md:max-w-[300px] lg:max-w-[700px] ">
            Have a project in mind or just want to say hello? I’d love to hear
            from you! Whether it’s a collaboration, freelance work, or just a
            tech chat, feel free to reach out
          </p>
          <p className='flex items-center '>
            <b className='flex items-center gap-1' ><MailCheck className='size-3'/>Email</b> : chethant426@gmail.com
          </p>
          <p className='flex items-center '>
            <b className='flex items-center gap-1'><MapPin className="size-3"/>Location</b> : Tiptur,Tumkur District
          </p>
          <p className='flex items-center '>
            <b className='flex items-center gap-1'><Linkedin className='size-3'/>Linkedin</b> :{" "}
            <a target='_blank'  href="https://www.linkedin.com/in/chethant/">
              https://www.linkedin.com/in/chethant/
            </a>
          </p>
          <p className='flex items-center '>
            <b className='flex items-center gap-1'><GithubIcon className='size-3'/>Github</b> :{" "}
            <a target='_blank' href="https://github.com/Chethantram">
              https://github.com/Chethantram
            </a>
          </p>
        </div>
        <div className="flex flex-col justify-center items-center mt-20 md:mt-0">
          <form onSubmit={onSubmit} className="text-white flex flex-col  gap-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="outline-none border-2 mb-3 border-white rounded-md px-4 h-10 w-[300px] md:w-[320px] lg:w-[350px] "
              required
              placeholder="Name here"
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="outline-none border-2 border-white rounded-md px-4 w-[300px] md:w-[320px] lg:w-[350px]  h-10  mb-3"
              required
              placeholder="Email here"
            />
            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              id="message"
              name="message"
              className="outline-none border-2 border-white rounded-md px-4 w-[300px] md:w-[320px] lg:w-[350px]  mb-3"
              required
              placeholder="Message here"
              rows={5}
            />
            <button
              type="submit"
              className="px-3 py-2 w-[300px] md:w-auto bg-[#00b4d8] text-white rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
