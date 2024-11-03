import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function App() {
  const [text, setGeneratedText] = useState('');
  const [answertext, setAnswerText] = useState('');


  const genAI = new GoogleGenerativeAI('AIzaSyBACS-RLsDCla6yMCtWanm2u1B3hJ1I1_M');

  async function run() {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = "10 tane Edebiyat sorusu yaz ";

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    setGeneratedText(text);
  }
  async function answer() {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt1 = `${text} sorulan soruları tekrar yazmadan sırasıyla cevapla`;

    const sonuc = await model.generateContent(prompt1);
    const cevap = await sonuc.response;
    const answertext = await cevap.text();



    setAnswerText(answertext);
  }

  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center">Edebiyat</h1>
        <h3 className="text-center">Soru Yapıcı</h3>
        <div className="mt-5 mb-5">
          <button onClick={run} type="submit" className="btn btn-primary mt-3 col-lg-12">
            Soru Üret
          </button>
        </div>
          {text && (
            <div>
              {text.split('\n').map((line, index) => (
                <p key={index} className="card p-2 mb-3 shadow-sm">{line}</p>
              ))}
            </div>
          )}
      </div>
  
      <div className="container mt-5">
        <div className="mb-4">
          <button type="submit" onClick={answer} className="btn btn-primary mt-3 col-lg-12">
            Soruyu Cevapla
          </button>
        </div>
          {answertext && (
            <div>
              {answertext.split('\n').map((answerLine, index) => (
                <p key={index} className="card p-2 mb-3 shadow-sm">{answerLine}</p>
              ))}
            </div>
          )}
      </div>
    </>
  );
  
}

