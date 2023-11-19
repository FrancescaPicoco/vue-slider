/*TRACCIA C - Slide con step numerati
Immagine, titolo e testo sono racchiusi in una card, uno sotto l’altro, e avranno un numero che parte da 1 e si incrementa man mano in un angolo della slide
*/

const { createApp } = Vue;

const carousel = {
    data: function () {
           return {
                slides : [
                    {
                        immagine: 'https://img.freepik.com/free-vector/welcome-pattern-different-languages_23-2147870141.jpg',
                        titolo: 'Benvenuti nel nostro sito',
                        testo: 'Esplora la nostra vasta gamma di prodotti e scopri offerte speciali.'
                    },
                    {
                        immagine: 'https://img.freepik.com/free-vector/spring-sale-instagram-post_23-2148849921.jpg',
                        titolo: 'Nuova collezione primavera',
                        testo: 'Scopri le ultime tendenze della moda con la nostra collezione primavera.'
                    },
                    {
                        immagine: 'https://img.freepik.com/free-vector/special-offer-modern-sale-banner-template_1017-20667.jpg',
                        titolo: 'Offerte speciali',
                        testo: 'Approfitta delle nostre offerte speciali. Sconti incredibili solo per te!'
                    }
                ],
                image : [
                    'https://img.freepik.com/free-vector/welcome-pattern-different-languages_23-2147870141.jpg',
                    'https://img.freepik.com/free-vector/spring-sale-instagram-post_23-2148849921.jpg',
                    'https://img.freepik.com/free-vector/special-offer-modern-sale-banner-template_1017-20667.jpg'
                ],
                title : [
                    'Benvenuti nel nostro sito',
                    'Nuova collezione primavera',
                    'Offerte speciali'
                ],
                current : 0 ,
                visibile : true,         
            }              
        },
        methods: {
            next(){
                if(this.current < this.image.length-1) { 
                     
                    this.current++;
                    //this.image.current.classList.remove("invisible")                    
                } else if (this.current == this.image.length-1){
                    this.current = 0;    
                }
                },          
            back(){
                if(this.current > 0) {
                    //this.image.current.classList.add("invisible")                    
                    this.current--;
                    //this.image.current.classList.remove("invisible")                    
                } else {
                    this.current = this.image.length-1;
                }
            },
            curr(){
                for (let i = 0; i < current; i++) {
                    const indexCurrent = current[i];
                    
                }
            }
        }        
}


createApp(carousel).mount('#app')  