// Закругленный текст

const text = document.querySelector('.text p');
text.innerHTML = text.innerText.split("").map(
  (char, i) =>
  `<span style="transform:rotate(${i * 9.1}deg)">${char}</span>`
).join("")

// Спойлер

const spoiler = document.getElementsByClassName('quest__item')

for (i = 0; i < spoiler.length; i++) {
  spoiler[i].addEventListener('click', function() {
    this.classList.toggle('active')
  })
}
