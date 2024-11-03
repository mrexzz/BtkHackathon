import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function App() {
    const [text, setGeneratedText] = useState('');
    const [chooseOptions, setChooseOptions] = useState([]);
    const [answertext, setAnswerText] = useState('');
    const [loading, setLoading] = useState(false);
    const [load, setLoad] = useState(false);

    const genAI = new GoogleGenerativeAI('Your Api Key');

    async function run() {
        setLoading(true);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const prompt = "10 tane matematik problemi yaz ilkokul düzeyinde ";
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const generatedText = await response.text();
        setGeneratedText(generatedText);
        const prompt1 = `${generatedText} sorularını cevaplayıp sayı olarak cevabı yaz`;
        const result1 = await model.generateContent(prompt1);
        const response1 = await result1.response;
        const generatedChooseOptions = await response1.text();
        const options = generatedChooseOptions.split('\n');
        setChooseOptions(options);
        setLoading(false);
    }

    async function answer() {
        setLoad(true);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const prompt1 = `${text} sorulan soruları tekrar yazmadan sırasıyla çözümü basamak basamak anlatarak cevapla`;
        const result = await model.generateContent(prompt1);
        const response = await result.response;
        const generatedAnswerText = await response.text();
        setAnswerText(generatedAnswerText);
        setLoad(false);
    }


   

    return (
        <>
            <div className="container mt-5">
                <h1 className="text-center">Project X</h1>
                <h3 className="text-center">Soru Yapıcı</h3>
                <div className="mt-5 mb-5">
                    <button onClick={run} type="submit" className="btn btn-primary mt-3 col-lg-12">
                        Soru Üret
                    </button>
                </div>
                {loading && (
                    <div className="text-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only"></span>
                        </div>
                    </div>
                )}
                <div className="mt-4">
                    {chooseOptions.length > 0 && (
                        <div className="mt-4">
                            {text.split('\n').map((line, index) => {
                                
                               
                                return (
                                    <div key={index} className="card p-3 mb-3 shadow-sm">
                                        <p className="font-weight-bold">{line}</p>
                                        
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
            <div className="container mt-5 mb-5">
                <div>
                    <button type="submit" onClick={answer} className="btn btn-primary mt-3 col-lg-12">
                        Soruyu Cevapla
                    </button>
                </div>
                {load && (
                    <div className="text-center mt-3">
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only"></span>
                        </div>
                    </div>
                )}
                <div className="mt-4">
                    {answertext && (
                        <div>
                            {answertext.split('\n').map((answerLine, index) => (
                                <p key={index} className="card p-2 mt-2 shadow-sm">{answerLine}</p>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
