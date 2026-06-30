import { motion } from "framer-motion";

import "./Carousel.css";

function Carousel({children}){

return(

<motion.div

className="carousel"

drag="x"

dragConstraints={{

left:-900,

right:0

}}

>

{children}

</motion.div>

)

}

export default Carousel;