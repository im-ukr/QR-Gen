import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [temp, setTemp] = useState("");
    const [word, setWord] = useState("");
    const [size, setSize] = useState(400);
    const [qrColor, setQrColor] = useState("000000");
    const [qrCode, setQrCode] = useState("");

    useEffect(() => {
        setQrCode(`http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&color=${qrColor}`);
    }, [word, size, qrColor]);

    function handleClick() {
        setWord(temp);
    }

    function handleClear() {
        setTemp("");
        setWord("");
    }

    function copyToClipboard() {
        navigator.clipboard.writeText(qrCode);
        alert("QR Code link copied to clipboard!");
    }

    return (
        <div className="App">
            <h1>Generate your own QR</h1>
            <div className="input-box">
                <div className="gen">
                    <input 
                        type="text" 
                        value={temp}
                        onChange={(e) => setTemp(e.target.value)} 
                        placeholder="Enter link and click on Generate" 
                    />
                    <button className="button generate-button" onClick={handleClick}>
                        Generate
                    </button>
                    <button className="button clear-button" onClick={handleClear}>
                        Clear 
                    </button>
                </div>
                <div className="extra">
                    <div className="color-picker">
                        <label>QR Code Color</label>
                        <input 
                            type="color" 
                            onChange={(e) => setQrColor(e.target.value.substring(1))} 
                        />
                    </div>
                    <div className="slider">
                        <label>Select Dimension</label>
                        <input 
                            type="range" 
                            min="200" 
                            max="600" 
                            value={size} 
                            onChange={(e) => setSize(e.target.value)} 
                        />
                    </div>
                </div>
            </div>
            <div className="output-box">
                {word && <img src={qrCode} alt="QR Code" />}
                <div className="buttons">
                    {word && (
                        <>
                            <a href={qrCode} download="QRCode">
                                <button type="button" className="button download-button">Download</button>
                            </a>
                            <button type="button" className="button copy-button" onClick={copyToClipboard}>Copy Link</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
