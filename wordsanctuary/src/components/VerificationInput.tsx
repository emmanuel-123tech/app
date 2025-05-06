import React, { useState, useRef, useEffect } from 'react';

interface VerificationInputProps {
  length: number;
  onChange: (code: string) => void;
}

const VerificationInput: React.FC<VerificationInputProps> = ({ length, onChange }) => {
  const [code, setCode] = useState<string[]>(Array(length).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    // Initialize refs array
    inputRefs.current = inputRefs.current.slice(0, length);
    
    // Focus first input on mount
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [length]);

  useEffect(() => {
    onChange(code.join(''));
  }, [code, onChange]);

  const handleChange = (index: number, value: string) => {
    // Only accept single digits
    if (!/^\d*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value.slice(0, 1);
    setCode(newCode);

    // Move to next input if current one is filled
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Move to previous input on backspace if current is empty
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain').trim();
    
    // Check if pasted content is numeric and matches expected length
    if (!/^\d+$/.test(pastedData)) return;
    
    const digits = pastedData.split('').slice(0, length);
    const newCode = [...code];
    
    digits.forEach((digit, index) => {
      if (index < length) {
        newCode[index] = digit;
      }
    });
    
    setCode(newCode);
    
    // Focus last filled input or the next empty one
    const lastIndex = Math.min(digits.length, length - 1);
    inputRefs.current[lastIndex]?.focus();
  };

  return (
    <div className="flex justify-center space-x-3">
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={code[index]}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          className="w-12 h-12 text-center text-xl font-bold border-2 border-gray-300 
                    rounded-md focus:outline-none focus:border-purple-500 focus:ring-2 
                    focus:ring-purple-200"
          aria-label={`Digit ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default VerificationInput;