import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React from "react";
import picture from "../../assets/resumi.png";
import SkillsPage from "../../components/Skills/Skills";
import EducationPage from "../../components/Education/Education";
import MyAbility from "../../components/MyAbility/MyAbility";
import ExperiencePage from "../../components/Experience/Experience";
const Resumi = () => {
  const printDocument = () => {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save("download.pdf");
    });
  };

  return (
    <div>
      <div className="flex justify-end">
        <button className="btn btn-info my-6" onClick={printDocument}>
          Print Resumi As Pdf
        </button>
      </div>
      <div
        id="divToPrint"
        className=" hidden"
        style={{
          backgroundColor: "#f5f5f5",
          width: "210mm",
          minHeight: "297mm",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {/* <div>Note: Here the dimensions of div are same as A4</div>  */}
        <div className="p-2 border border-black mx-auto">
          <img className="rounded-lg  " src={picture} alt="" />
        </div>
      </div>

      <div>
        <SkillsPage />
      </div>
      <div>
        <EducationPage />
      </div>
      <div>
        <ExperiencePage />
      </div>
      <div>
        <MyAbility />
      </div>
    </div>
  );
};

export default Resumi;
