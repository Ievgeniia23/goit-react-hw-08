import { FaUserLarge } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

import css from './Contact.module.css'



const Contact = ({ id, name, number, onDelete }) => {
  return (
<div className={css.contactWrapper} >
    <div>
          <p className={css.contactTextWrapper}><FaUserLarge className={css.icon}/> {name}</p>  
          <p className={css.contactTextWrapper}><FaPhone className={css.icon}/> {number}</p>
    </div>
          
     <button type="button" className={css.listBtn} onClick={() => onDelete(id)}>Delete</button>     
</div>  
  )

}

export default Contact


