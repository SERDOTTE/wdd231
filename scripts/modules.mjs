import byuiCourse from './course.mjs';
import { setSectionSelection } from './sections.mjs';
import { setTitle, renderSections } from "./output.mjs";

function initialize() {
  const enrollButton = document.querySelector("#enrollStudent");
  const dropButton = document.querySelector("#dropStudent");
  const sectionSelect = document.querySelector("#sectionNumber");

  if (!enrollButton || !dropButton || !sectionSelect) {
    console.error("One or more DOM elements not found");
    return;
  }

  enrollButton.addEventListener("click", () => {
    const sectionNum = Number(sectionSelect.value);
    byuiCourse.changeEnrollment(sectionNum);
  });

  dropButton.addEventListener("click", () => {
    const sectionNum = Number(sectionSelect.value);
    byuiCourse.changeEnrollment(sectionNum, false);
  });

  setTitle(byuiCourse);
  setSectionSelection(byuiCourse.sections);
  renderSections(byuiCourse.sections);
}

document.addEventListener("DOMContentLoaded", initialize);