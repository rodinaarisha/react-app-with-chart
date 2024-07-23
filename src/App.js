import logo from './logo.svg';
import './App.css';

import { Chart } from "react-google-charts";

export const data = [
  ["Задачи", "Hours per Day"],
  ["Работа", 8],
  ["Еда", 2],
  ["Общение/сериалы", 2.5],
  ["Учеба", 2.5],
  ["Сон", 7.5],
  ["Спорт", 1.5],
];

export const options = {
  title: "Моя рутина",
};

export function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}


export default App;