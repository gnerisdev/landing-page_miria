const offeredTreatments = [
  {
    title: "LEDterapia",
    description: "Terapia não invasiva que utiliza luzes de diferentes comprimentos de onda para estimular a regeneração celular, reduzir inflamações e potencializar tratamentos para pele e cabelos."
  },
  {
    title: "MMP – Microinfusão de Medicamentos na Pele",
    description: "Técnica que utiliza microagulhas para infundir ativos diretamente na pele ou couro cabeludo, promovendo o estímulo do colágeno, melhora da textura e combate à queda capilar."
  },
  {
    title: "Fotona Laser",
    description: "Tecnologia a laser que atua no rejuvenescimento da pele, melhorando firmeza, textura e estimulando colágeno sem necessidade de tempo de recuperação prolongado."
  },
  {
    title: "Ultraformer MPT",
    description: "Aparelho de ultrassom micro e macrofocado que promove efeito lifting sem cirurgia, tratando flacidez e redefinindo contornos faciais e corporais com estímulo profundo de colágeno."
  },
  {
    title: "Collagen Biostimulators",
    description: "Injeção de substâncias que ativam a produção natural de colágeno, restaurando firmeza e volume da pele de maneira progressiva e natural."
  },
  {
    title: "Botulinum Toxin (Botox®)",
    description: "Tratamento para suavizar rugas dinâmicas e prevenir o envelhecimento precoce, garantindo um efeito rejuvenescido e natural."
  },
  {
    title: "Profhilo® – Deep Hydration and Biostimulation",
    description: "Inovador ácido hialurônico injetável que promove hidratação intensa, melhora da qualidade da pele e estímulo de colágeno de forma global."
  }
];

const containerCustomTreatmentItems = document.querySelector("#custom-treatment-items");

offeredTreatments.forEach((item, index) => {
  containerCustomTreatmentItems.innerHTML += `
    <article>
      <img src="./service-${index + 1}.avif" alt="${item.title}">
      <span></span>
      <h4 class="custom-treatment-items__title">${item.title}</h4>
      <p>${item.description}</p>
      <a 
        target='_blank' 
        title='Cosmetic' 
        class='dt-sc-button medium icon-right with-icon  bordered  type2' 
        data-delay='0'
      > 
        Agendar Sessão
        <span class='fa fa-chevron-right' style="color: transparent"></span>
      </a>
    </article>
  `
})

// Feedbacks
const feedbacks = [
  {
    text: "Dra Miriã é uma excelente pro ssional, realizei quatro procedimentos e todos tiveram um resultado excepcional. A doutora é extremamente atenciosa e, se preocupa principalmente, com o bem estar e a autoestima dos seus pacientes. É muito cautelosa, não senti dor em momento algum, todo o processo foi muito delicado e preciso. Resultados maravilhosos e duradouros.",
    author: "Raquel Stagliano"
  },
  {
    text: "Saio satisfeito com as minhas queixas capilares graças a Dra. Miriã, que consegue ter uma leitura individualizada do paciente e junto com a sua dedicação e competência entrega resultado a quem lhe procura.",
    author: "Luiz Filipe"
  },
  {
    text: "Dra Miriã é uma excelente pro ssional, realizei quatro procedimentos e todos tiveram um resultado excepcional",
    author: "Célia Cavalcanti"
  },
  {
    text: "Minha experiência com a Dra Miriã foi incrível, fui muito bem recebida e atendida. Uma excelente pro ssional, muito comprometida e atenciosa. Sempre buscando e investindo em conhecimento para entregar o que há de mais inovador no mercado. Parabéns pela dedicação e pela excelente pro ssional que és, con o de olhos fechados.",
    author: "Thalita C. Amaral"
  },
  {
    text: "Dra Miriã é uma pro ssional sem igual! Mãos leves, cuidadosa e entrega sempre um resultado maravilhoso.",
    author: "Ester Tavares"
  },
  {
    text: "A Dra. Miriã é simplesmente incrível! Desde a primeira consulta, me senti super à vontade. Ela explica tudo com calma, sem pressa, e realmente se preocupa com a gente. Finalmente encontrei uma médica que escuta e não empurra qualquer tratamento!",
    author: "Mariana Souza"
  },
  {
    text: "Fiz um tratamento com bioestimulador e quei chocada com a diferença! Minha pele está muito mais rme e com um viço lindo. E o melhor: tudo super natural, do jeitinho que eu queria. A Dra. Miriã tem uma mão leve e um olhar super cuidadoso!",
    author: "Camila Torres"
  },
  {
    text: "Meu cabelo estava caindo muito, e eu já tinha tentado de tudo. A Dra. Miriã me explicou direitinho o que estava acontecendo e montou um tratamento especí co pra mim. Hoje, meu cabelo está bem mais forte e saudável.",
    author: "Fernanda Almeida"
  },
  {
    text: "Sempre tive medo de fazer procedimentos estéticos, mas com a Dra. Miriã foi diferente. Ela passa tanta segurança que eu fui sem medo e o resultado cou perfeito! Sutil, bonito e sem exageros. Agora só faço com ela!",
    author: "Tatiane Ribeiro"
  },
  {
    text: "Em pouco tempo de tratamento, já vi muita melhora na minha pele! A Dra. Miriã usa tecnologias modernas e explica tudo de um jeito simples. Sem contar que é super atenciosa",
    author: "Gabriela Martins"
  }
];


const containerCustomFeedbackItems = document.querySelector("#custom-feedback-items");

feedbacks.forEach((item, index) => {
  containerCustomFeedbackItems.innerHTML += `
   <div class="swiper-slide animation-element slide-left testimonial">
      <div class="right">
        <h6 style="margin: 0">${item.author}</h6>
        <div class="rating">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star-half-o"></i>
        </div>
      </div>
      <div class="content" style="font-size: 14px; line-height: 20px;">${item.text}</div>
    </div>
  `
})

// // Section Tecnology

// Menu
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
  });
});

document.querySelectorAll('.menu-icon').forEach(icon => {
  icon.addEventListener('click', function() {
      this.classList.toggle('active');
  });
});

// const offcanvas = document.getElementById('offcanvasNavbar');
// offcanvas.addEventListener('hidden.bs.offcanvas', function () {
//   document.querySelector('.menu-icon').classList.remove('active');
// });

