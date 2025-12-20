import data from "../data/data.json";
import QuizContainer from "./components/QuizContainer";

export default function Home() {
  console.log(data);
  return (
    <>
      <h1>Quiz-app</h1>
      <QuizContainer />
    </>
  );
}
