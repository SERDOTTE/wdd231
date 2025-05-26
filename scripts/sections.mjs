function setSectionSelection(sections) {
  const sectionSelect = document.querySelector("#sectionNumber");
  if (!sectionSelect) {
    console.error("Element #sectionNumber not found");
    return;
  }
  sectionSelect.innerHTML = ""; // Clear existing options
  sections.forEach((section) => {
    const option = document.createElement("option");
    option.value = section.sectionNumber;
    option.textContent = `${section.sectionNumber}`;
    sectionSelect.appendChild(option);
  });
}

export { setSectionSelection };