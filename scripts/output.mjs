function setTitle(course) {
  const courseName = document.querySelector("#courseName");
  const courseCode = document.querySelector("#courseCode");
  if (courseName && courseCode) {
    courseName.textContent = course.name;
    courseCode.textContent = course.code;
  } else {
    console.error("Course name or code element not found");
  }
}

function renderSections(sections) {
  const sectionsTable = document.querySelector("#sections");
  if (!sectionsTable) {
    console.error("Element #sections not found");
    return;
  }
  const html = sections.map(
    (section) => `<tr>
      <td>${section.sectionNumber}</td>
      <td>${section.enrolled}</td>
      <td>${section.instructor}</td>
    </tr>`
  );
  sectionsTable.innerHTML = html.join("");
}

export { setTitle, renderSections };