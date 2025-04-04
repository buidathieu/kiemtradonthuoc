// Danh sách các trận đấu
const matches = [
    { team1: "Brazil", team2: "Argentina", time: "2025-06-10 18:00", venue: "Stadium A" },
    { team1: "France", team2: "Germany", time: "2025-06-11 20:00", venue: "Stadium B" },
    { team1: "Brazil", team2: "Germany", time: "2025-06-12 17:00", venue: "Stadium C" },
    { team1: "Argentina", team2: "France", time: "2025-06-13 19:00", venue: "Stadium D" },
    { team1: "Spain", team2: "Italy", time: "2025-06-14 16:00", venue: "Stadium E" }
];

// Lấy danh sách các đội bóng từ dữ liệu trận đấu
const teams = Array.from(new Set(matches.flatMap(match => [match.team1, match.team2])));

// Các phần tử HTML
const input = document.getElementById("team-input");
const suggestions = document.getElementById("suggestions");
const matchResults = document.getElementById("match-results");
const selectedTeamsList = document.getElementById("selected-teams-list");

// Danh sách các đội đã chọn
let selectedTeams = [];

// Hiển thị gợi ý khi nhập
input.addEventListener("input", () => {
    const value = input.value.toLowerCase();
    suggestions.innerHTML = "";
    
    if (value.trim() === "") {
        suggestions.style.display = "none";
        return;
    }

    const filteredTeams = teams.filter(team => team.toLowerCase().includes(value));
    
    filteredTeams.forEach(team => {
        const suggestionItem = document.createElement("div");
        suggestionItem.textContent = team;
        suggestionItem.style.padding = "10px";
        suggestionItem.style.cursor = "pointer";

        // Khi người dùng nhấp vào gợi ý
        suggestionItem.addEventListener("click", () => {
            if (!selectedTeams.includes(team)) {
                selectedTeams.push(team);
                updateSelectedTeams();
                updateMatches();
            }
            input.value = "";
            suggestions.style.display = "none";
        });

        suggestions.appendChild(suggestionItem);
    });

    suggestions.style.display = filteredTeams.length > 0 ? "block" : "none";
});

// Cập nhật danh sách các đội đã chọn
function updateSelectedTeams() {
    selectedTeamsList.innerHTML = "";
    
    selectedTeams.forEach(team => {
        const listItem = document.createElement("li");
        listItem.textContent = team;

        // Nút xóa đội khỏi danh sách
        const removeButton = document.createElement("button");
        removeButton.textContent = "X";
        removeButton.style.marginLeft = "10px";
        removeButton.addEventListener("click", () => {
            selectedTeams = selectedTeams.filter(t => t !== team);
            updateSelectedTeams();
            updateMatches();
        });

        listItem.appendChild(removeButton);
        selectedTeamsList.appendChild(listItem);
    });
}

// Cập nhật danh sách các trận đấu liên quan
function updateMatches() {
    matchResults.innerHTML = "";

    const relatedMatches = matches.filter(match =>
        selectedTeams.includes(match.team1) && selectedTeams.includes(match.team2)
    );

    if (relatedMatches.length > 0) {
        relatedMatches.forEach(match => {
            const listItem = document.createElement("li");
            listItem.textContent = `${match.team1} vs ${match.team2} - Thời gian: ${match.time}, Địa điểm: ${match.venue}`;
            matchResults.appendChild(listItem);
        });
    } else {
        matchResults.innerHTML = "<li>Không có trận đấu nào giữa các đội đã chọn.</li>";
    }
}
