const Button = ({ icon, text, ...rest }) => {

    return (
        <button {...rest} className=' mx-3  w-42 px-2.5 py-3 cursor-pointer 
         bg-black text-white rounded-md items-center flex  ' >
            {icon}{text}
        </button>
    );
}
export default Button;
/*
yha humnai props jo use kiya hai uski
 help se hum text aur icon as a
 property use kar paa rhe hai */


//  important---------------------------------------------------------------
/* aur we can use const {icon,text} = props; in ine 4 then we can use
{icon} in line 8
{text} in line 9
 */