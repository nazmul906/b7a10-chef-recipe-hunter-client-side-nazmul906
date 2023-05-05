import React from "react";
// import { useRef } from "react";
// import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
// import MyDocument from "./MyDocument";
import jsPDF from "jspdf";
import "jspdf-autotable";
import html2canvas from "html2canvas";
const Blog = () => {
  // const pdfRef = useRef();
  // const generatePdf = () => {
  //   const doc = <MyDocument />;

  //   pdfRef.current.updateContainer(doc);
  // };

  const handleDownloadPDF = () => {
    // create a new jsPDF instance
    // const doc = new jsPDF();

    // add content to the PDF
    // doc.text("Blog about", 20, 10);
    // doc.autoTable({ html: "#blog-content" });

    // // save the PDF
    // doc.save("blog.pdf");

    const input = document.getElementById("blogContent");

    html2canvas(input, { useCORS: true }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const imgWidth = 210; // A4 size
      const pageHeight = 297; // A4 size
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      const doc = new jsPDF("p", "mm");
      let position = 10;

      doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight - position;
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      doc.save("blog.pdf");
    });
  };

  return (
    <div>
      <div>
        {" "}
        <button onClick={handleDownloadPDF}>Download PDF</button>
      </div>

      <div id="blogContent">
        <h4>
          1.Tell us the differences between uncontrolled and controlled
          components.
        </h4>
        <p>
          When behaviour of a component state is controlled by its parent
          component its called controlled element. this uncontrolled bahaviour
          is because its parent controll its state via props
          <br />
          And an uncontrolled component can manage its own state by itself
        </p>
        <h4>2. How to validate React props using PropTypes</h4>
        <p>
          PropTypes is a react machanism to validate props. we validate props to
          debug unexpected error. to validate props with Proptypes we first
          import PropTypes. Then we use
          <br />
          propsname =PropTypes.string.isRequired , inside a functional component
          named MyComponent to validate the recived props. There are few more
          props validator like
          PropTypes.bool,PropTypes.number,PropTypes.func,PropTypes.array etc
        </p>
        <h4>3.Tell us the difference between nodejs and express js.</h4>
        <p>
          node js is a server side technology which work best with single page
          application while express js is a framework of node js.It means
          express need nodejs to run. Node js is super speedy than express as it
          has non-blocking architecture and it has large library of js module.
          <br />
          Express js makes it simpler to build server side app with many
          features and powerful api route ,it also offer middleware and can
          integrate in database like mongoDB
        </p>
        <h4>
          4. What is a custom hook, and why will you create a custom hook?
        </h4>
        <p>
          custom hook can be created by us. custom hook is used to reuse the
          hook when necessary to avoid repeating the same code. It is applied
          with the word "use".
          <br />
          we need to make custom hooks to make code clean and also So if we need
          to create a resuable function like fetching data from API, which could
          be used in other component we do it by custom hook
        </p>
      </div>
    </div>
  );
};

export default Blog;
