function applyJob(jobName) {
  const positionInput = document.getElementById("position");
  const applicationSection = document.getElementById("lamaran");

  positionInput.value = jobName;

  applicationSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

// Logika Form Submit & Pop-up Modal
const form = document.getElementById("applicationForm");
const modal = document.getElementById("successModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalText = document.getElementById("modalText");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const position = document.getElementById("position").value.trim();

  if (!position) {
    alert("Pilih posisi pekerjaan terlebih dahulu.");
    return;
  }

  // Set teks pesan modal
  modalText.textContent = "Terima kasih, " + name + "! Simulasi lamaran untuk posisi " + position + " berhasil dikirim.";
  
  // Tampilkan modal
  modal.classList.add("active");

  // Reset form
  this.reset();
});

// Tutup modal saat tombol diklik
closeModalBtn.addEventListener("click", function () {
  modal.classList.remove("active");
});

// Tutup modal saat area gelap di luar box diklik
modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.classList.remove("active");
  }
});

// Logika Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  
  // Ubah ikon tombol
  if (document.body.classList.contains("dark-mode")) {
    darkModeToggle.textContent = "LIGHT";
  } else {
    darkModeToggle.textContent = "DARK";
  }
});AWDDWWAWDAWWS