var realpin = "133100731";
var pin;
var count = 0;
do {
  pin = prompt("Masukkan PIN anda: ");
  count++;
} while (pin != realpin && count < 3);
if (pin == realpin) {
  alert("Congratulations! You Get The Secret Plot");
  document.write(" I Love You! ");
} else {
  alert(" Tidak semudah itu fergusoo! ");
  document.write(" Terkutuklah kau Badjingan!!! ");
}
