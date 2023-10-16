

const Whitebutton = (props) => {
  
    return (
        <button className='px-2.5 py-3   ml-4 mx-2 cursor-pointer bg-white 
        text-black rounded-md items-center justify-center  flex  border border-solid border-black ' >
      
            {props.icon}
            {props.text}
        </button>
    );
}
export default Whitebutton;