import { useState } from "react";
import Button from "./Button";
import Whitebutton from "./Whitebutton";

import { BiSolidMessageDetail } from 'react-icons/bi';
import { BiPhone } from 'react-icons/bi';
import { ImMail } from 'react-icons/im';


// manik
const Contactform = () => {

    const [name, setname] = useState("User");
    const [email, setemail] = useState("User@gmail.com");
    const [text, settext] = useState("Hi,User");


    const onSubmit = (event) => {
        event.preventDefault();

        setname(event.target[0].value);
        setemail(event.target[1].value);
        settext(event.target[2].value);
    }
    return (
        <section className="flex mt-2 py-2 ml-24 " >

            <div className="contact_form gap-6 flex flex-col ml-24 "  >

                <div className="top_button flex  ">
                    <Button text="  VIA SUPPORT CHAT" icon={<BiSolidMessageDetail className='mr-3' />} />

                    <Button text="  VIA CALL" icon={<BiPhone className='mr-3' />} />
                </div>
                <Whitebutton text="  VIA E-MAIL FORM " icon={<ImMail className='mr-3' />} />

                <form onSubmit={onSubmit}
                    className="ml-4 mx-2">
                    <div className="form flex flex-col gap-4">

                        <div className="form_container flex flex-col relative ... ">
                            <label className="absolute ... -top-3 left-2.5  bg-white px-2.5  font-bold" htmlFor="name">NAME</label>
                            <input className="h-10 px-2 py-4 border border-solid border-black" type="text" name="name" />
                        </div>

                        <div className="form_container flex flex-col relative ... ">
                            <label className="absolute ... -top-3 left-2.5  bg-white px-2.5 font-bold " htmlFor="email">E-MAIL</label>
                            <input className="h-10 px-2 py-4 border border-solid border-black" type="email" name="email" />
                        </div>

                        <div className="form_container flex flex-col relative ... ">
                            <label className="absolute ... -top-3 left-2.5  bg-white px-2.5 font-bold" htmlFor="text">TEXT</label>
                            <textarea className="h-10 px-2 py-4 border border-solid border-black" name="text"  />
                        </div>

                        <div className="submitbtn  flex justify-end">
                            <Button text="SUBMIT NOW" />
                        </div>
                        <p>Output of Form</p>
                        <div> {name + "  " + email + "  " + text}</div>
                    </div>
                </form>

            </div>

            <div className="contact_image  h-96  mx-24  my-10  "  >
                <img className=" lg:h-[300px] lg:w-[600px] w-[800px]" src="images/contact.svg" alt="contact-main-image" />
            </div>

        </section>
    );
}
export default Contactform;

/*
yha humnai jo icon aur text property us eki
 hai wo hum props ki wajh se us karte hai
 abb hum button main jaake props use karenege  */