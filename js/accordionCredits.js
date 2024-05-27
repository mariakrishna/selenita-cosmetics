export function initializeAccordion() {
  const accordionCredits = document.querySelectorAll('.credits dt');

  function activeAccordion(event) {
    this.classList.toggle('ativo');
    this.nextElementSibling.classList.toggle('ativo');
  }

  accordionCredits.forEach((item) => {
    item.addEventListener('click', activeAccordion);
  });
}