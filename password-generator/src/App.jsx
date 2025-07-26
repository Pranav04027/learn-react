import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [isChar, setIsChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef();

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    const num = "1234567890";
    const char = "!@#$%^&*()_+=-][\\';/.,?><:|}{}";

    if (isNumber) str += num;
    if (isChar) str += char;

    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }

    setPassword(pass);
  }, [isNumber, isChar, length]);

  useEffect(() => {
    generatePassword();
  }, [isNumber, isChar, length, generatePassword]);

  const copyPasswordToClipboard = () => {
    navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black w-screen h-screen flex justify-center items-center p-4">
      <div className="bg-gray-800 text-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-4">🔐 Password Generator</h1>

        <div className="flex items-center gap-2 mb-4">
          <input
            type="text"
            ref={passwordRef}
            readOnly
            value={password}
            className="flex-1 px-4 py-2 rounded-md text-black text-sm"
            placeholder="Generated password"
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm"
          >
            Copy
          </button>
        </div>

        <div className="mb-4">
          <label htmlFor="Input" className="block mb-1 text-sm font-medium">
            Password Length: <span className="font-bold">{length}</span>
          </label>
          <input
            type="range"
            min={3}
            max={20}
            value={length}
            onChange={(e) => setlength(Number(e.target.value))}
            className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>

        <div className="flex items-center gap-3 mb-2">
          <input
            type="checkbox"
            checked={isNumber}
            onChange={() => setIsNumber((prev) => !prev)}
            id="number"
            className="accent-green-500"
          />
          <label htmlFor="number" className="text-sm">
            Include Numbers
          </label>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <input
            type="checkbox"
            checked={isChar}
            onChange={() => setIsChar((prev) => !prev)}
            id="char"
            className="accent-purple-500"
          />
          <label htmlFor="char" className="text-sm">
            Include Special Characters
          </label>
        </div>

        <button
          onClick={generatePassword}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-medium transition-all duration-200"
        >
          🔄 Regenerate Password
        </button>
      </div>
    </div>
  );
}

export default App;
