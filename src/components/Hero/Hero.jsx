import { motion } from "framer-motion";

import "./Hero.css";

function Hero(){

return(

<section className="hero">

<div className="overlay"/>

<motion.div

className="hero-content"

initial={{opacity:0,y:80}}

animate={{opacity:1,y:0}}

transition={{duration:1}}

>

<h1>

Descubra milhares de filmes e séries.

</h1>

<p>

Pesquise filmes, séries, trailers, elenco e favoritos em uma única plataforma.

</p>

</motion.div>

</section>

)

}

export default Hero;