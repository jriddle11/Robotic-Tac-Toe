import {useEffect, useRef} from 'react';
import anime from "animejs/lib/anime.es.js"
import Game from './Game.js';

const Home = () => {
    const animation = useRef(null);
    let idle = true;

    useEffect(() => {
        animation.current = anime.timeline({
            loop: true,
            easing: "linear"
        });
        if(idle){
          animation.current.add(
            {
                targets : ".head",
                rotate: 10,
                duration : 100
                
            }, 2000
            )
            animation.current.add(
              {
                  targets : ".head",
                  rotate: 0,
                  duration : 100
                  
              }, 4000
              )
            animation.current.add(
              {
                  targets : ".head",
                  rotate: -10,
                  duration : 100
                  
              }, 6000
              )
            animation.current.add(
                {
                    targets : ".head",
                    rotate: 0,
                    duration : 100
                    
                }, 8000
                )
            animation.current.add(
              {
                  targets : ".head",
                  translateY : 20,
                  duration : 100
                  
              }, 10000
              )
              animation.current.add(
                {
                    targets : ".head",
                    translateY : 0,
                    duration : 100
                    
                }, 12000
              )    
        }
        else{

        }
        
       
      });
     
    return (
      <div>
        <div className="home">
          <p>
            
            <svg width="171" height="245" viewBox="0 0 171 245" fill="none" xmlns="http://www.w3.org/2000/svg" className='neck'>
                <path d="M171 33.4132C171 33.4132 155.476 62 87.7434 62C20.0105 62 0 33.4132 0 33.4132C0 33.4132 20.0105 0 87.7434 0C155.476 0 171 33.4132 171 33.4132Z" fill="#151515"/>
                <path d="M171 64.4132C171 64.4132 155.476 93 87.7434 93C20.0105 93 0 64.4132 0 64.4132C0 64.4132 20.0105 31 87.7434 31C155.476 31 171 64.4132 171 64.4132Z" fill="#151515"/>
                <path d="M171 101.413C171 101.413 155.476 130 87.7434 130C20.0105 130 0 101.413 0 101.413C0 101.413 20.0105 68 87.7434 68C155.476 68 171 101.413 171 101.413Z" fill="#151515"/>
                <path d="M171 140.413C171 140.413 155.476 169 87.7434 169C20.0105 169 0 140.413 0 140.413C0 140.413 20.0105 107 87.7434 107C155.476 107 171 140.413 171 140.413Z" fill="#151515"/>
                <path d="M171 177.413C171 177.413 155.476 206 87.7434 206C20.0105 206 0 177.413 0 177.413C0 177.413 20.0105 144 87.7434 144C155.476 144 171 177.413 171 177.413Z" fill="#151515"/>
                <path d="M171 216.413C171 216.413 155.476 245 87.7434 245C20.0105 245 0 216.413 0 216.413C0 216.413 20.0105 183 87.7434 183C155.476 183 171 216.413 171 216.413Z" fill="#151515"/>
            </svg>

            <svg width="410" height="210" viewBox="0 0 410 210" fill="none" xmlns="http://www.w3.org/2000/svg" className='head'>
                <path d="M410 105C410 208.553 409.92 210 205.463 210C1.00517 210 0 208.553 0 105C0 1.44661 1.00517 0 205.463 0C409.92 0 410 1.44661 410 105Z" fill="black"/>
                <path d="M405 105C405 203.622 404.922 205 205.451 205C5.98065 205 5 203.622 5 105C5 6.37772 5.98065 5 205.451 5C404.922 5 405 6.37772 405 105Z" fill="#BABABA"/>
                <path d="M395 105C395 193.76 394.926 195 205.429 195C15.9316 195 15 193.76 15 105C15 16.24 15.9316 15 205.429 15C394.926 15 395 16.24 395 105Z" fill="#3A3A3A"/>
                <path d="M178 105C178 145.869 144.869 179 104 179C63.1309 179 30 145.869 30 105C30 64.1309 63.1309 31 104 31C144.869 31 178 64.1309 178 105Z" fill="black"/>
                <path d="M173 105C173 143.108 142.108 174 104 174C65.8924 174 35 143.108 35 105C35 66.8924 65.8924 36 104 36C142.108 36 173 66.8924 173 105Z" fill="#BABABA"/>
                <path d="M168 105C168 140.346 139.346 169 104 169C68.6538 169 40 140.346 40 105C40 69.6538 68.6538 41 104 41C139.346 41 168 69.6538 168 105Z" fill="#181818"/>
                <path d="M154 105C154 132.614 131.614 155 104 155C76.3858 155 54 132.614 54 105C54 77.3858 76.3858 55 104 55C131.614 55 154 77.3858 154 105Z" fill="#18AA00"/>
                <path d="M144 105C144 127.091 126.091 145 104 145C81.9086 145 64 127.091 64 105C64 82.9086 81.9086 65 104 65C126.091 65 144 82.9086 144 105Z" fill="#181818"/>
                <path d="M379 105C379 145.869 345.869 179 305 179C264.131 179 231 145.869 231 105C231 64.1309 264.131 31 305 31C345.869 31 379 64.1309 379 105Z" fill="black"/>
                <path d="M374 105C374 143.108 343.108 174 305 174C266.892 174 236 143.108 236 105C236 66.8924 266.892 36 305 36C343.108 36 374 66.8924 374 105Z" fill="#BABABA"/>
                <path d="M369 105C369 140.346 340.346 169 305 169C269.654 169 241 140.346 241 105C241 69.6538 269.654 41 305 41C340.346 41 369 69.6538 369 105Z" fill="#181818"/>
                <path d="M355 105C355 132.614 332.614 155 305 155C277.386 155 255 132.614 255 105C255 77.3858 277.386 55 305 55C332.614 55 355 77.3858 355 105Z" fill="#18AA00"/>
                <path d="M345 105C345 127.091 327.091 145 305 145C282.909 145 265 127.091 265 105C265 82.9086 282.909 65 305 65C327.091 65 345 82.9086 345 105Z" fill="#181818"/>
            </svg>
          </p>
          <p>
          <svg width="485" height="416" viewBox="0 0 485 416" fill="none" xmlns="http://www.w3.org/2000/svg" className='body'>
              <path d="M485 208C485 413.134 484.906 416 243.047 416C1.18906 416 0 413.134 0 208C0 2.86566 1.18906 0 243.047 0C484.906 0 485 2.86566 485 208Z" fill="black"/>
              <path d="M479.085 208C479.085 403.366 478.993 406.095 243.034 406.095C7.07466 406.095 5.91463 403.366 5.91463 208C5.91463 12.634 7.07466 9.90476 243.034 9.90476C478.993 9.90476 479.085 12.634 479.085 208Z" fill="#BABABA"/>
              <path d="M467.256 208C467.256 383.829 467.169 386.286 243.007 386.286C18.8459 386.286 17.7439 383.829 17.7439 208C17.7439 32.1706 18.8459 29.7143 243.007 29.7143C467.169 29.7143 467.256 32.1706 467.256 208Z" fill="#3A3A3A"/>
            </svg>
            
          </p>
          <Game />
        </div>
        </div>
      );
}


export default Home;