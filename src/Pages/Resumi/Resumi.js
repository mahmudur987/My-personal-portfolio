import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React from "react";
import picture from "../../assets/resumi.png";
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
      <div className="mb5">
        <button className="btn btn-info my-6" onClick={printDocument}>
          Print Resumi As Pdf
        </button>
      </div>
      <div
        id="divToPrint"
        className="mt4"
        style={{
          backgroundColor: "#f5f5f5",
          width: "210mm",
          minHeight: "297mm",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {/* <div>Note: Here the dimensions of div are same as A4</div>  */}
        <div className="p-2">
          <img className="rounded-lg  " src={picture} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Resumi;
