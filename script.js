function changeColor() {
  const colors = ['#f0f0f0', '#ffcccb', '#cceeff', '#d4edda', '#fff3cd'];
  document.body.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
}
