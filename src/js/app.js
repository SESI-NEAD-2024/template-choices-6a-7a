import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

// Esse dá erro
// import {
//   createApp,
// } from "https://unpkg.com/vue@3.4.35/dist/vue.esm-browser.prod.js";
// import Carousel from "./components/carousel.js";
import Navbar from "./components/navbar.js";
import Hero from "./components/hero.js";
import ImgSideCard from "./components/img-side-card.js";
import AppFooter from "./components/app-footer.js";
import Concluir from "./components/concluir.js";
import Carousel from "./components/carousel.js";
import CarouselTxt from "./components/carousel-txt.js";
import CarouselLabel from "./components/carousel-label.js";
import QuestionRadio from "./components/question-radio.js";
import QuestionCheckbox from "./components/question-checkbox.js";
import QuestionInOrder from "./components/question-in-order.js";
import QuestionMatriz from "./components/question-matriz.js";

const app = createApp({
  components: {
    Navbar,
    Hero,
    ImgSideCard,
    AppFooter,
    Concluir,
    Carousel,
    CarouselTxt,
    CarouselLabel,
    QuestionRadio,
    QuestionCheckbox,
    QuestionInOrder,
    QuestionMatriz,
  },

  // Quando o componente estiver montado, executa o código
  /**
   * Inicializa a funcionalidade de scrollspy e adiciona um ouvinte de evento de scroll.
   *
   * Esta função é chamada quando o componente é montado. Ela seleciona todos os elementos
   * com a classe "scrollspy" usando `document.querySelectorAll` e inicializa o scrollspy
   * usando `M.ScrollSpy.init`. A função `M.ScrollSpy.init` recebe dois parâmetros: os elementos
   * a serem inicializados e um objeto de opções opcional.
   *
   * Após inicializar o scrollspy, a função adiciona um ouvinte de evento de scroll à janela
   * usando `window.addEventListener`. O ouvinte de evento chama o método `handleScroll`
   * do componente atual.
   *
   * @return {void} Esta função não retorna um valor.
   */
  mounted() {
    /**
     * Oculta o elemento com id "loading" e exibe o elemento com id "content"
     * quando a página está totalmente carregada.
     *
     * @return {void} Esta função não retorna um valor.
     */
    document.getElementById("loading").style.display = "none";
    document.getElementById("content").style.opacity = "1";

    // Toolltip
    var tooltipes = document.querySelectorAll(".tooltipped");
    var mTooltip = M.Tooltip.init(tooltipes, {
      // specify options here
    });

    // scrollspy -----------------------------------------------------
    // Para a ancoragem de links de funcionar de modo animado
    var elems = document.querySelectorAll(".scrollspy");
    var instances = M.ScrollSpy.init(elems, {
      scrollOffset: -600,
      // specify options here
    });

    // Collapsible -----------------------------------------------------
    var accordeon = document.querySelectorAll(".collapsible");
    var instaccordeon = M.Collapsible.init(accordeon, {
      // specify options here
    });

    // Adiciona o evento de scroll
    window.addEventListener("scroll", this.handleScroll);

    // AOS Animation -------------------------------------
    AOS.init({
      delay: 50,
    });
    window.addEventListener('load', function() {
      AOS.refresh(); // Força a recalculação das animações após o carregamento da página
    });

    // Collapsible
    var elemsC = document.querySelectorAll(".collapsible");
    var Collapsible = M.Collapsible.init(elemsC, {
      // specify options here
    });



  },
  methods: {



    // Revelar conteúdo
    pulseReview(number) {
      let element = document
        .querySelector(".content-reveal." + number)
        .querySelector(".scale-transition");

      element.classList.toggle("scale-in");
    },

    // Barra de progresso Scroll -----------------------------------------------------

    /**
     * Atualiza a barra de progresso e exibe a porcentagem rolada.
     *
     * Esta função calcula a porcentagem rolada com base na posição de rolagem do usuário. Em seguida, atualiza a largura da barra de progresso e exibe a porcentagem rolada na caixa de progresso.
     *
     * @return {void} Esta função não retorna nenhum valor.
     */
    handleScroll() {
      var winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;

      var barras = document.querySelectorAll(".determinate");

      barras.forEach((barra) => {
        barra.style.width = scrolled + "%";
      });

      document.querySelector(".progress-box__number").innerHTML =
        Math.round(scrolled) + "%";
    },

    enableScroll() {
      document.body.style.overflow = "";
    },
    disableScroll() {
      document.body.style.overflow = "hidden";
    },
  },
});

app.mount("#app");
