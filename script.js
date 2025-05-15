// Danh sách các trận đấu
const matches = [
    // Sơ sinh và chương trình mở rộng
    { vax1: "BCG", vax2: "Viêm gan B", tuongtac: "Có thể tiêm đồng thời ở các vị trí khác nhau." },

    // 6 trong 1, 5 trong 1, 4 trong 1, DPT và các vắc xin khác
    { vax1: "Hexaxim", vax2: "OPV", tuongtac: "Có thể tiêm đồng thời ở các vị trí khác nhau; Hexaxim tiêm bắp, OPV uống." },
    { vax1: "Infanrix Hexa", vax2: "OPV", tuongtac: "Có thể tiêm đồng thời ở các vị trí khác nhau; Infanrix Hexa tiêm bắp, OPV uống." },
    { vax1: "Hexaxim", vax2: "Prevenar 13", tuongtac: "Có thể tiêm đồng thời ở các vị trí khác nhau." },
    { vax1: "Infanrix Hexa", vax2: "Prevenar 13", tuongtac: "Có thể tiêm đồng thời ở các vị trí khác nhau." },
    { vax1: "Hexaxim", vax2: "Menactra", tuongtac: "Có thể tiêm đồng thời ở các vị trí khác nhau." },
    { vax1: "Infanrix Hexa", vax2: "Menactra", tuongtac: "Có thể tiêm đồng thời ở các vị trí khác nhau." },
    { vax1: "Hexaxim", vax2: "Hib", tuongtac: "Không nên tiêm đồng thời; Hexaxim đã chứa thành phần Hib." },
    { vax1: "Infanrix Hexa", vax2: "Hib", tuongtac: "Không nên tiêm đồng thời; Infanrix Hexa đã chứa thành phần Hib." },
    { vax1: "Hexaxim", vax2: "Engerix B", tuongtac: "Không nên tiêm đồng thời; Hexaxim đã chứa thành phần viêm gan B." },
    { vax1: "Infanrix Hexa", vax2: "Engerix B", tuongtac: "Không nên tiêm đồng thời; Infanrix Hexa đã chứa thành phần viêm gan B." },
    { vax1: "Hexaxim", vax2: "DPT", tuongtac: "Không nên tiêm đồng thời; Hexaxim đã chứa thành phần DPT." },
    { vax1: "Infanrix Hexa", vax2: "DPT", tuongtac: "Không nên tiêm đồng thời; Infanrix Hexa đã chứa thành phần DPT." },
    { vax1: "Hexaxim", vax2: "MMR", tuongtac: "Có thể tiêm đồng thời ở các vị trí khác nhau." },
    { vax1: "Infanrix Hexa", vax2: "MMR", tuongtac: "Có thể tiêm đồng thời ở các vị trí khác nhau." },
    { vax1: "Hexaxim", vax2: "Rotarix", tuongtac: "Hexaxim tiêm bắp, Rotarix uống; có thể tiêm đồng thời." },
    { vax1: "Infanrix Hexa", vax2: "Rotateq", tuongtac: "Infanrix Hexa tiêm bắp, Rotateq uống; có thể tiêm đồng thời." },

    // 5 trong 1, 4 trong 1 và các vắc xin khác
    { vax1: "Pentaxim", vax2: "Prevenar 13", tuongtac: "Có thể tiêm đồng thời ở các vị trí khác nhau." },
    { vax1: "ComBE Five", vax2: "OPV", tuongtac: "Có thể tiêm đồng thời ở các vị trí khác nhau." },
    { vax1: "Pentaxim", vax2: "Menactra", tuongtac: "Có thể tiêm đồng thời ở các vị trí khác nhau." },
    { vax1: "ComBE Five", vax2: "Menactra", tuongtac: "Có thể tiêm đồng thời ở các vị trí khác nhau." },
    { vax1: "Tetraxim", vax2: "Menactra", tuongtac: "Có thể tiêm đồng thời ở các vị trí khác nhau." },

    // Menactra tiêm sau các vắc xin phối hợp hoặc DPT
    { vax1: "Menactra", vax2: "Hexaxim", tuongtac: "Nếu Menactra tiêm sau Hexaxim, cần cách tối thiểu 4 tuần để đảm bảo hiệu quả miễn dịch tối ưu." },
    { vax1: "Menactra", vax2: "Infanrix Hexa", tuongtac: "Nếu Menactra tiêm sau Infanrix Hexa, cần cách tối thiểu 4 tuần để đảm bảo hiệu quả miễn dịch tối ưu." },
    { vax1: "Menactra", vax2: "Pentaxim", tuongtac: "Nếu Menactra tiêm sau Pentaxim, cần cách tối thiểu 4 tuần để đảm bảo hiệu quả miễn dịch tối ưu." },
    { vax1: "Menactra", vax2: "ComBE Five", tuongtac: "Nếu Menactra tiêm sau ComBE Five, cần cách tối thiểu 4 tuần để đảm bảo hiệu quả miễn dịch tối ưu." },
    { vax1: "Menactra", vax2: "Tetraxim", tuongtac: "Nếu Menactra tiêm sau Tetraxim, cần cách tối thiểu 4 tuần để đảm bảo hiệu quả miễn dịch tối ưu." },
    { vax1: "Menactra", vax2: "DPT", tuongtac: "Nếu Menactra tiêm sau DPT, cần cách tối thiểu 4 tuần để đảm bảo hiệu quả miễn dịch tối ưu." },

    // Phế cầu, não mô cầu
    { vax1: "Prevenar 13", vax2: "Pneumovax 23", tuongtac: "Không tiêm đồng thời: Tiêm Prevenar 13 trước, Pneumovax 23 sau ít nhất 8 tuần (trẻ 6–18 tuổi) hoặc 1 năm (người ≥19 tuổi)." },
    { vax1: "Prevenar 13", vax2: "Synflorix", tuongtac: "Không nên tiêm đồng thời; chọn một loại vắc xin phế cầu phù hợp." },
    { vax1: "Menactra", vax2: "Prevenar 13", tuongtac: "Không nên tiêm đồng thời ở người cắt lách hoặc suy giảm miễn dịch; các đối tượng khác có thể tiêm đồng thời ở các vị trí khác nhau, nhưng nên giãn cách 4 tuần." },
    { vax1: "Menactra", vax2: "Pneumovax 23", tuongtac: "Có thể tiêm đồng thời ở các vị trí khác nhau." },
    { vax1: "Menactra", vax2: "Bexsero", tuongtac: "Có thể tiêm đồng thời ở các vị trí khác nhau." },
    { vax1: "Bexsero", vax2: "Menactra", tuongtac: "Có thể tiêm đồng thời ở các vị trí khác nhau." },
    { vax1: "VA-Mengoc-BC", vax2: "Menactra", tuongtac: "Không nên tiêm đồng thời; chọn loại phù hợp với chủng lưu hành." },

    // Sởi, quai bị, rubella, thủy đậu
    { vax1: "MMR II", vax2: "Varilrix", tuongtac: "Có thể tiêm đồng thời ở các vị trí khác nhau; nếu không tiêm cùng lúc, cách nhau tối thiểu 4 tuần." },
    { vax1: "Priorix", vax2: "Varivax", tuongtac: "Có thể tiêm đồng thời ở các vị trí khác nhau; nếu không tiêm cùng lúc, cách nhau tối thiểu 4 tuần." },
    { vax1: "MMR II", vax2: "MMR", tuongtac: "Không nên tiêm đồng thời; chọn một loại phối hợp sởi-quai bị-rubella." },
    { vax1: "MMR", vax2: "MR", tuongtac: "Không nên tiêm đồng thời; chọn một loại phối hợp sởi-quai bị-rubella." },

    // Viêm não Nhật Bản
    { vax1: "Imojev", vax2: "Jevax", tuongtac: "Không nên tiêm đồng thời; nếu cần, cách nhau tối thiểu 28 ngày." },

    // Cúm
    { vax1: "Vaxigrip Tetra", vax2: "Influvac Tetra", tuongtac: "Không nên tiêm đồng thời; chọn một loại vắc xin cúm để tiêm hàng năm." },

    // HPV
    { vax1: "Gardasil", vax2: "Gardasil 9", tuongtac: "Không nên tiêm đồng thời; nên hoàn thành một loại vắc xin HPV trước khi bắt đầu loại khác." },
    { vax1: "Gardasil 9", vax2: "Cervarix", tuongtac: "Không nên tiêm đồng thời; nên hoàn thành một loại vắc xin HPV trước khi bắt đầu loại khác." },
    { vax1: "Gardasil 9", vax2: "Prevenar 13", tuongtac: "Có thể tiêm đồng thời ở các vị trí khác nhau." },
    { vax1: "Gardasil 9", vax2: "Menactra", tuongtac: "Có thể tiêm đồng thời ở các vị trí khác nhau." },
    { vax1: "Pneumovax 23", vax2: "Gardasil 9", tuongtac: "Có thể tiêm đồng thời ở các vị trí khác nhau." },

    // Rotavirus
    { vax1: "Rotarix", vax2: "Rotateq", tuongtac: "Không nên dùng đồng thời; chọn một loại vắc xin phòng Rotavirus." },

    // Viêm gan A, B
    { vax1: "Avaxim", vax2: "Havrix", tuongtac: "Không nên tiêm đồng thời; chọn một loại vắc xin viêm gan A." },
    { vax1: "Engerix B", vax2: "Euvax B", tuongtac: "Không nên tiêm đồng thời; chọn một loại vắc xin viêm gan B." },

    // Thương hàn
    { vax1: "Typhim Vi", vax2: "Avaxim", tuongtac: "Có thể tiêm đồng thời ở các vị trí khác nhau." },

    // Dại
    { vax1: "Verorab", vax2: "Abhayrab", tuongtac: "Không nên tiêm đồng thời; chọn một loại vắc xin phòng dại." },

    // Uốn ván
    { vax1: "TT", vax2: "Td", tuongtac: "Không nên tiêm đồng thời; chọn một loại phù hợp với chỉ định phòng uốn ván." },
    { vax1: "Tdap", vax2: "Adacel", tuongtac: "Không nên tiêm đồng thời; chọn một loại vắc xin phòng bạch hầu-ho gà-uốn ván." },

    // COVID-19
    { vax1: "AstraZeneca", vax2: "Pfizer", tuongtac: "Có thể phối hợp trong lịch tiêm chủng COVID-19 theo hướng dẫn Bộ Y tế." },
    { vax1: "Moderna", vax2: "Pfizer", tuongtac: "Có thể phối hợp trong lịch tiêm chủng COVID-19 theo hướng dẫn Bộ Y tế." },

    // Sốt xuất huyết
    { vax1: "Qdenga", vax2: "MMR", tuongtac: "Có thể tiêm đồng thời ở các vị trí khác nhau." },
    // OPV và Rotavin
    {
        vax1: "OPV",
        vax2: "Rotavin",
        tuongtac: "Có thể uống đồng thời trong cùng buổi tiêm chủng."
    },
    // OPV và Rotarix/Rotateq
    {
        vax1: "OPV",
        vax2: "Rotarix",
        tuongtac: "Có thể uống đồng thời trong cùng buổi tiêm chủng."
    },
    {
        vax1: "OPV",
        vax2: "Rotateq",
        tuongtac: "Có thể uống đồng thời trong cùng buổi tiêm chủng."
    },
    // Rotavin và Rotarix/Rotateq
    {
        vax1: "Rotavin",
        vax2: "Rotarix",
        tuongtac: "Không nên uống đồng thời; chỉ chọn một loại vắc xin rota cho mỗi trẻ."
    },
    {
        vax1: "Rotavin",
        vax2: "Rotateq",
        tuongtac: "Không nên uống đồng thời; chỉ chọn một loại vắc xin rota cho mỗi trẻ."
    }
];


// Lấy danh sách các đội bóng từ dữ liệu trận đấu
const teams = Array.from(new Set(matches.flatMap(match => [match.vax1, match.vax2])));

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

    selectedTeams.forEach((team, idx) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${idx + 1}. ${team}`;

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
        selectedTeams.includes(match.vax1) && selectedTeams.includes(match.vax2)
    );

    if (relatedMatches.length > 0) {
        relatedMatches.forEach(match => {
            const listItem = document.createElement("li");
            listItem.textContent = `${match.vax1} vs ${match.vax2}: ${match.tuongtac}`;
            matchResults.appendChild(listItem);
        });
    } else {
        matchResults.innerHTML = "<li>Không có tương tác nào giữa các vắc xin đã chọn.</li>";
    }
}
