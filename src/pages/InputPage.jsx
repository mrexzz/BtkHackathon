import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";


export default function InputPage() {
    const [nameText, setNameText] = useState("");
    const genAI = new GoogleGenerativeAI("AIzaSyBACS-RLsDCla6yMCtWanm2u1B3hJ1I1_M");

    async function fileToGenerativePart(file) {
        const base64EncodedDataPromise = new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result.split(',')[1]);
            reader.readAsDataURL(file);
        });
        return {
            inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
        };
    }

    async function run() {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

        const prompt = "Görseldeki problemi anlatarak çöz";

        const fileInputEl = document.querySelector("input[type=file]");
        const imageParts = await Promise.all(
            [...fileInputEl.files].map(fileToGenerativePart)
        );

        const result = await model.generateContent([prompt, ...imageParts]);
        const response = await result.response;
        const text = response.text();
        setNameText(text);
    }
    return (
        <>
          <div className="container mt-4">
            <h1 className="text-center mb-4">Görsel Soru Cevaplama</h1>
            <div className="d-flex justify-content-center">
              <div className="col-md-8">
                <div className="input-group mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="inputGroupFile04"
                    aria-describedby="inputGroupFileAddon04"
                    aria-label="Upload"
                  />
                  <button
                    className="btn btn-outline-dark"
                    type="button"
                    id="inputGroupFileAddon04"
                    onClick={run}
                  >
                    Gönder
                  </button>
                </div>
                {nameText && (
                  <div className="card p-3 mt-3 shadow-sm">
                    <p className="mb-0">{nameText}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      );
      
      

}
