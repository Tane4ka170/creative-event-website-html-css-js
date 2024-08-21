// schedule-table
function scheduleTabs(params) {
  const tabs = document.querySelectorAll(".js-schedule-tab");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      if (tab.classList.contains("active")) {
        return;
      }
      const activeTab = document.querySelector(".js-schedule-tab.active");
      if (activeTab) {
        activeTab.classList.remove("active");
      }
      tab.classList.add("active");

      const target = tab.getAttribute("data-target");

      const activeTable = document.querySelector(".js-schedule-table.active");
      if (activeTable) {
        activeTable.classList.remove("active");
      }

      const targetTable = document.querySelector(`#${target}`);
      if (targetTable) {
        targetTable.classList.add("active");
      }
    });
  });
}
scheduleTabs();
