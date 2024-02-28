document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
let nameElement = document.querySelector(".name");
// Lấy tất cả các nút và thêm sự kiện click cho chúng
var btns = document.querySelectorAll(".button");
btns.forEach(function (btn) {
  btn.addEventListener("click", filterProjects);
});

function filterProjects(e) {
  var category = this.dataset.category;

  // Lấy tất cả các dự án
  var projects = document.querySelectorAll(".item--project");

  // Lặp qua tất cả các dự án và ẩn chúng
  projects.forEach(function (project) {
    project.style.display = "none";
  });

  // Nếu danh mục là 'all', hiển thị tất cả các dự án
  if (category === "all") {
    projects.forEach(function (project) {
      project.style.display = "block";
    });
  } else {
    // Nếu không, hiển thị tất cả các dự án thuộc danh mục đã chọn
    var selectedProjects = document.querySelectorAll(
      ".item--project." + category
    );
    selectedProjects.forEach(function (project) {
      project.style.display = "block";
    });
  }
}
