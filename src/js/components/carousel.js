export default {
  data() {
    return {
      items: [
        {
          id: 1,
          img: "src/img/mercurio.png",
          alt: "Mercúrio",

          //html
          html: `
            <p class="body1 purple-text"><b>Mercúrio</b></p>
            <br />
            <p>O planeta mais próximo do Sol, Mercúrio, é uma esfera rochosa e desolada com uma fina atmosfera e exposta a extremos térmicos. Sua superfície 
            tem crateras de impacto, falésias e planícies que são o resultado da atividade vulcânica intensa que ocorreu no passado. Com uma órbita elíptica 
            e um período de rotação lento, um dia em Mercúrio é mais longo que seu ano. Devido à falta de atmosfera para reter calor, as temperaturas podem 
            atingir até 430°C durante o dia e cair para -180°C à noite. A configuração orbital de Mercúrio é única, pois não possui luas e tem uma rotação 3:2 
            em relação à órbita solar. Os resultados da sonda MESSENGER mostraram que há provas de gelo de água em áreas polares que estão cobertas pela sombra 
            eterna de crateras.
            </p>
            
            `,
        },
        {
          id: 2,
          img: "src/img/venus.png",
          alt: "Vênus",

          //html
          html: `
         
            <p class="body1 purple-text"><b>Vênus</b></p>
            <br />
            <p>Devido ao tamanho e composição semelhantes, o planeta rochoso Vênus é chamado de "gêmeo" da Terra. Sua atmosfera densa e tóxica de dióxido de 
            carbono causa um efeito estufa extremo que pode atingir 450°C. Sua superfície é árida, com vulcões desaparecidos e terreno montanhoso. Esse planeta é 
            protegido pelas sombras eternas de crateras e tem uma rotação retrógrada lenta e nenhuma lua.
            </p>
            
            `,
        },
        {
          id: 3,
          img: "src/img/terra.png",
          alt: "Terra",

          //html
          html: `
         
            <p class="body1 purple-text"><b>Terra</b></p>
            <br />
            <p>Com água líquida na superfície e uma atmosfera rica em oxigênio, a Terra é o único planeta no sistema solar que pode ser habitado. Vários tipos de 
            terreno a caracterizam, incluindo vastos oceanos, imponentes montanhas e vastas planícies. É o habitat de uma infinidade de formas de vida, desde micro-organismos 
            até formas complexas, incluindo os seres humanos. A Terra é um planeta dinâmico, com uma lua que influencia as marés e os fenômenos naturais. Como resultado, 
            ciclos naturais e interação entre seus elementos criam um ambiente favorável à vida.
            </p>
            
            `,
        },
      ],
      carousel: {
        class: "carousel-01",
        key: 0,
        elemento: null,
        qtdSlides: 0,
        ordem: 1,
        ordemAnterior: 99,
      },

      instances: null, // Declare instances as a reactive variable
    };
  },
  methods: {
    /**
     * Advances the carousel to the next slide.
     * Displays the "previous" button to allow navigation back to the previous slide.
     */

    next() {
      this.carousel.elemento.querySelector(".previous").style.display = "flex";
      this.instances[this.carousel.key].next(); // Access the first carousel instance
    },
    /**
     * Goes back to the previous slide.
     * Hides the "previous" button if on the first slide.
     */
    previous() {
      this.instances[this.carousel.key].prev();
    },
  },
  /**
   * When the component is mounted, it initializes the carousel, gets the first slide,
   * and sets the display of the "previous" button to none.
   * The onCycleTo callback is set to update the current slide and the previous slide index.
   * If the current slide is the first one, the "previous" button is hidden.
   * @return {void} This function does not return a value.
   */
  mounted() {
    this.carousel.elemento = document.querySelector("." + this.carousel.class);

    let elems = document.querySelectorAll(".carousel." + this.carousel.class);
    this.instances = M.Carousel.init(elems, {
      fullWidth: true,
      indicators: true,
      shift: 20,
      numVisible: 1,
      /**
       * Callback function triggered when the carousel cycles to a new slide.
       * Determines the current and previous slide indices and updates the display of the "previous" button.
       * If the current slide is the first one, the "previous" button is hidden.
       * @param {HTMLElement} slide - The current slide element.
       */

      onCycleTo: (slide) => {
        // this.qtdSlides = slide.parentNode.querySelectorAll(".carousel-item").length;

        // Lógica para saber o slide atual
        let search = slide.parentNode;
        let slideIndex = [...search.children].indexOf(slide);
        this.carousel.ordem = slideIndex;
        this.carousel.ordemAnterior = this.ordem - 1;

        // Se for o primeiro slide, não mostrar o botão anterior
        if (this.carousel.ordem == 1) {
          this.carousel.elemento.querySelector(".previous").style.display =
            "none";
        } else {
          this.carousel.elemento.querySelector(".previous").style.display =
            "flex";
        }
      },
    });
    this.carousel.elemento.querySelector(".previous").style.display = "none";
  },

  template: //html
  `
    <!-- Carousel -->
    <div class="carousel carousel-slider center" :class="[carousel.class]">
    <!-- Arrows -->
      <div class="carousel-fixed-item center">
        <a @click="previous" class="previous flex--align-center card card--purple-shadow">
          <span class="material-symbols-rounded">
            chevron_left
          </span>
        </a>
        <a @click="next" class="next flex--align-center card ml-4 card--purple-shadow">
          <span class="material-symbols-rounded">
            chevron_right
          </span>
        </a>
      </div>

      <!-- slides -->
      <!-- item -->
      <div v-for="item in items" :key="item.id" class="carousel-item card">
        <div class="row card-content">
        <div class="col s12 m6">
          <img :src="item.img" :alt="item.alt" class="img-rounded carousel-img">
          </div>
          <div class="col s12 m6 left-align" v-html="item.html"></div>
        </div>
      </div>
      <!-- item -->
      
    </div>
    <!-- Fim Carousel -->
  `,
};
