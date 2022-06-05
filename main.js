
        function openLightbox() {
            document.getElementById('Lightbox').style.display = 'block';
        };

        function closeLightbox() {
            document.getElementById('Lightbox').style.display = 'none';
        };

        let slideIndex = 1;
        showSlide(slideIndex);

        function changeSlide(n) {
            showSlide(slideIndex += n);
        };

        function toSlide(n) {
            showSlide(slideIndex = n);
        };

        function showSlide(n) {
            const slides = document.getElementsByClassName('slide');
            let modalPreviews = document.getElementsByClassName('modal-preview');

            if (n > slides.length) {
                slideIndex = 1;
            };

            if (n < 1) {
                slideIndex = slides.length;
            };

            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            };

            for (let i = 0; i < modalPreviews.length; i++) {
                modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
            };

            slides[slideIndex - 1].style.display = 'block';
            modalPreviews[slideIndex - 1].className += ' active';
        };

        function open(){


            document.getElementById('foto').style.display=blok;


        }

var tyukari=document.getElementsByClassName("yukari")[0]
window.addEventListener("scroll",function(){
var mesafe=window.scrollY;
if(mesafe>300){
    tyukari.classList.add("göster");
}
else{
    tyukari.classList.remove("göster");
}
})









       