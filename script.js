// Hàm đọc dữ liệu từ file matches.txt
async function loadMatches() {
    try {
        const response = await fetch("https://buidathieu.github.io/kiemtradonthuoc/matches.txt"); // Đọc file matches.txt
        const jsonData = await response.json(); // Chuyển đổi nội dung file thành JSON

        const matches = jsonData.Data; // Lấy danh sách trận đấu từ JSON
        displayMatches(matches); // Gọi hàm hiển thị dữ liệu
    } catch (error) {
        console.error("Lỗi khi tải hoặc xử lý dữ liệu:", error);
    }
}

// Hàm hiển thị danh sách trận đấu trong bảng
function displayMatches(matches) {
    const tableBody = document.querySelector("#match-table tbody");
    tableBody.innerHTML = ""; // Xóa nội dung cũ nếu có

    matches.forEach(match => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${match.team1}</td>
            <td>${match.team2}</td>
            <td>${match.time}</td>
            <td>${match.venue}</td>
        `;

        tableBody.appendChild(row);
    });
}

// Gọi hàm loadMatches để tải và hiển thị dữ liệu
loadMatches();
