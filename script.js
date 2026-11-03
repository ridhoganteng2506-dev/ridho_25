
function applyJob(jobName) {
    const position = document.getElementById("position");

    position.value = jobName;

    document.getElementById("lamaran").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

document.getElementById("applicationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const position = document.getElementById("position").value;
    const result = document.getElementById("result");

    result.innerHTML = `
        <span style="color: green; font-size: 20px;">
            Lamaran Berhasil Dikirim!
        </span>
        <br>
        Terima kasih, ${name}! <br>
        Lamaran untuk posisi ${position} berhasil disubmit.
    `;

    result.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    alert("Lamaran Berhasil Dikirim!");
});
