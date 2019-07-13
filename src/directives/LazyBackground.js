import inViewPort from 'in-viewport';

function setBackGround (el, image)
{
  el.style.backgroundImage = `url(${image})`;
}

function loadImage (el, binding)
{
  if (binding.value.lowResSrc)
  {
    setBackGround(el, binding.value["lowResSrc"]);
  }
  if (binding.value.blur) {
    el.classList.add("blurry-bg-vision")
  }
  const imageElement = new Image();
  imageElement.src = binding.value["highResSrc"];
  console.log(binding.value, imageElement.src);

  imageElement.addEventListener("load", function ()
  {
    setTimeout(() => el.classList.add("loaded"), 100);

    if (binding.value.highResSrc)
    {
      setBackGround(el, imageElement.src);
      // imageElement.removeEventListener("load", setHighResImage);
    }
  });
  imageElement.addEventListener("error", (e) => console.log(e));
}

export default {
  inserted (el, binding)
  {
    inViewPort(el, () =>
    {
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
