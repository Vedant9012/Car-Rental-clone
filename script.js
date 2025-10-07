function goToLogin() {
  window.location.href = "login.html";
}

function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  if (email && password) {
    window.location.href = "cars.html";
  } else {
    alert("Please enter both email and password!");
  }
}

function selectCar(car, price) {
  localStorage.setItem("selectedCar", car);
  localStorage.setItem("selectedPrice", price);
  window.location.href = "dl.html";
}

function previewDL() {
  const fileInput = document.getElementById("dlUpload");
  const preview = document.getElementById("dlPreview");
  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      preview.src = reader.result;
      preview.classList.remove("hidden");
      localStorage.setItem("dlUploaded", "true");
    };
    reader.readAsDataURL(file);
  }
}

function goToTransaction() {
  if (!localStorage.getItem("dlUploaded")) {
    alert("Please upload your Driving Licence!");
    return;
  }
  window.location.href = "payment.html";
}

window.onload = () => {
  if (document.getElementById("summary")) {
    const car = localStorage.getItem("selectedCar");
    const price = localStorage.getItem("selectedPrice");
    document.getElementById("summary").innerText = `Car: ${car} | ₹${price}/day`;
  }
};

function makePayment() {
  const card = document.getElementById("cardNumber").value.trim();
  const expiry = document.getElementById("expiry").value.trim();
  const cvv = document.getElementById("cvv").value.trim();
  if (!card || !expiry || !cvv) {
    alert("Please fill all payment fields!");
    return;
  }
  localStorage.clear();
  window.location.href = "success.html";
}
