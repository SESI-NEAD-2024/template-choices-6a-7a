export default {
    name: "Divisor",
    /**
     * Componente Divisor que aceita classes modificadoras:
     * - divisor--mbot: adiciona margem inferior
     * - divisor--mtop: adiciona margem superior
     */
    props:{
      src: String,
      d_class: String, // d_class: "divisor--mbot" ou "divisor--mtop"
    },
    template: //html
     `
     <div class="divisor" :class="[d_class]">
        <img
          :src="src"
          alt="Divisor de onda"
        />
      </div>
    `,
  };