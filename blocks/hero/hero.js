export default function decorate(block) {
  // Add the necessary classes to the elements
  const imageContainer = block.querySelector('picture').parentElement.parentElement;
  imageContainer.classList.add('hero-image-container');

  const contentContainer = block.querySelector('h1').parentElement.parentElement;
  contentContainer.classList.add('hero-content-container');

  const h1 = block.querySelector('h1');
  h1.classList.add('hero-title');

  const ps = block.querySelectorAll('p');
  ps.forEach((p, index) => {
    p.classList.add('hero-paragraph');
    if (index === ps.length - 1) {
      p.classList.add('hero-links');
    }
  });

  const links = block.querySelectorAll('a');
  links.forEach((link, index) => {
    if (index === 0) {
      link.classList.add('hero-discover-offers');
    } else {
      link.classList.add('hero-card-comparison');
    }
  });
}
