import React, { Component } from 'react';

function Main() {

    return(

       <div className=' grid-cols-2  flex'>
 
        <img src="\check-green-click.jpg" className='w-1/2' alt="" />
        <h2 className='w-1/2 pt-20 text-cyan-700 font-bold  text-5xl pl-4'>Prenota il tuo CheckUp Gratuito 
        
        <h3 className='text-cyan-300 font-bold text-2xl pt-4'> Stai dando valore ai tuoi soldi e al tuo business online?</h3>
        
         <h4 className='text-black font-bold text-lg pt-4'>Hai scelto i canali giusti per la tua pubblicità? Sei consapevole di come viene speso il tuo budget pubblicitario?
         <br /> Stai ottenendo i risultati attesi?
         <br />
Green.Click ti aiuta a capirlo con un checkup gratuito, durante il quale un nostro tecnico analizzerà il tuo account, valuterà la strategia applicata e ti darà idee e consigli per ottimizzare le campagne.
<br />

ANALISI GRATUITA</h4>

<button className='text-black bg-cyan-800 text-2xl rounded-md p-3 flex items-center'>prova ora!<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>
</button>
        </h2>
        
        

       </div>
    )


}

export default Main;