import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { commonContext } from "../ContextAPI/Context";
import { getDatabase, onValue, ref } from "firebase/database";
import app from "../config/firebase";

export default function PlayQuiz() {
  const [quiz, setQuiz] = useState([]);
  const [score, setScore] = useState(0); 
  const [wrongScore, setWrongScore] = useState(0); 
  const [totalScore, setTotalScore] = useState(0); 

  useEffect(() => {
    const db = getDatabase(app);
    const starCountRef = ref(db, "quizzess");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const quizdata = Object.values(data || {});
      setQuiz([...quizdata]);
    });
  }, []);

  const navigate = useNavigate();
  let { isLogin } = useContext(commonContext);

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <div className="max-w-[500px] mx-auto bg-[#ccc] mt-2 p-4">
        <h1 className="text-[40px] font-bold text-center">Play Quiz</h1>
        <h2 className="text-[25px] font-bold text-center">Total Questions Attempted: {totalScore}</h2>
        <h2 className="text-[25px] font-bold text-green-600 text-center">Right Answers: {score}</h2>
        <h2 className="text-[25px] font-bold text-red-600 text-center">Wrong Answers: {wrongScore}</h2>
        
        {quiz.map((question, index) => (
          <QuestionItem 
            key={index} 
            question={question} 
            index={index} 
            setScore={setScore} 
            setWrongScore={setWrongScore} 
            setTotalScore={setTotalScore} 
          />
        ))}
      </div>
    </>
  );
}

function QuestionItem({ question, index, setScore, setWrongScore, setTotalScore }) {
  const [cAns, setcAns] = useState(""); 
  let correctanswer = question.correct_answer; 

  const handleAnswerClick = (option) => {
    if (!cAns) { 
      setcAns(option);
      setTotalScore(prevTotal => prevTotal + 1);
      
      if (option === correctanswer) {
        setScore(prevScore => prevScore + 1); 
      } else {
        setWrongScore(prevWrongScore => prevWrongScore + 1);
      }
    }
  };

  return (
    <div className="bg-[#f6f5f5] p-3 mb-4">
      <h3 className="text-[30px]">{index + 1}. {question.question}</h3>
      <ul className="my-[10px]">
        {["1", "2", "3", "4"].map((option) => (
          <li
            key={option}
            className={`cursor-pointer text-[20px] text-white p-2 mb-3 rounded-md transition-all duration-300 
              ${
                cAns
                  ? cAns === option
                    ? cAns === correctanswer
                      ? "bg-green-500" 
                      : "bg-red-500" 
                    : correctanswer === option
                    ? "bg-green-500" 
                    : "bg-slate-600"
                  : "bg-slate-600 hover:bg-slate-700"
              }`}
            onClick={() => handleAnswerClick(option)}
          >
            {question[`option_${option}`]}
          </li>
        ))}
      </ul>
    </div>
  );
}
