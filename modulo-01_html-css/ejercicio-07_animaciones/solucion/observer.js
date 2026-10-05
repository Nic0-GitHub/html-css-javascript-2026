document.documentElement.classList.add("js");
const elementosRevelables = document.querySelectorAll(".revelar");

if (!("IntersectionObserver" in window)) {
  elementosRevelables.forEach((elemento) => elemento.classList.add("visible"));
} else {
  const observadorDeEntrada = new IntersectionObserver((entradas, observador) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visible");
        observador.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.14, rootMargin: "0px 0px -36px 0px" });
  elementosRevelables.forEach((elemento) => observadorDeEntrada.observe(elemento));
}
