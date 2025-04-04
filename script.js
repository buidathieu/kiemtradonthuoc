// Hàm đọc dữ liệu từ file matches.txt
async function loadInteractions() {
    try {
        const response = await fetch("matches.txt"); // Đọc file matches.txt
        const jsonData = await response.json(); // Chuyển đổi nội dung file thành JSON

        const interactions = jsonData.aaData; // Lấy danh sách tương tác thuốc từ JSON
        displayInteractions(interactions); // Gọi hàm hiển thị dữ liệu
    } catch (error) {
        console.error("Lỗi khi tải hoặc xử lý dữ liệu:", error);
    }
}

// Hàm hiển thị danh sách tương tác thuốc trong bảng
function displayInteractions(interactions) {
    const tableBody = document.querySelector("#interaction-table tbody");
    tableBody.innerHTML = ""; // Xóa nội dung cũ nếu có

    interactions.forEach(interaction => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${interaction.STT}</td>
            <td>${interaction["Hoạt chất 1"]}</td>
            <td>${interaction["Hoạt chất 2"]}</td>
            <td>${interaction["Cơ chế"]}</td>
            <td>${interaction["Hậu quả"]}</td>
            <td>${interaction["Xử trí"]}</td>
        `;

        tableBody.appendChild(row);
    });
}

// Gọi hàm loadInteractions để tải và hiển thị dữ liệu
loadInteractions();
