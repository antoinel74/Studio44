export let FAQaccordeon = () => {
  const faqs = document.querySelectorAll(".faq__container");

  faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
      faq.classList.toggle("active");
    });
  });
};
