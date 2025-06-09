import "./App.css";

interface LetterElementProps {
  letter: string;
}

function LetterElement({ letter }: LetterElementProps) {
  return (
    <>
      <button className="letterElement">{letter}</button>;
    </>
  );
}

export default LetterElement;
