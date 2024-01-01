import inViewPort from 'in-viewport';
import { SIRV_BASE_URL } from "@/config/config";

function setBackGround (el, image) {
  el.style.backgroundImage = `url(${image})`;
}

function loadImage (el, binding) {
  const { blur, src } = binding.value;
  const url = `${SIRV_BASE_URL}${src}`;

  if (src) {
    setBackGround(el, url + "?q=3");
  }

  if (blur) {
    el.classList.add("blurry-bg-vision")
  }

  const imageElement = new Image();
  imageElement.src = url;

  imageElement.addEventListener("load", function () {
    let timeout;
    timeout = setTimeout(() => {
      clearTimeout(timeout);
      el.classList.add("loaded")
    }, 100);

    if (src) {
      setBackGround(el, imageElement.src);
    }
  });

  imageElement.addEventListener("error", (e) => console.log(e));
}

export default {
  inserted (el, binding) {
    inViewPort(el, () => {
      loadImage(el, binding);
    })
  },
}

/* function handleIntersect (entries, observer)
 {
 entries.forEach((entry) =>
 {
 if (entry.isIntersecting)
 {
 loadImage();
 observer.unobserve(el);
 }
 });
 }

 function createObserver ()
 {
 const options = {
 root      : null,
 threshold : "0"
 };
 const observer = new IntersectionObserver(handleIntersect, options);
 observer.observe(el);
 }

 console.log('iovr', window["IntersectionObserver"]);
 if (window["IntersectionObserver"])
 {
 createObserver();
 }
 else
 {
 loadImage();
 } */
