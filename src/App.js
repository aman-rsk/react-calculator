import { useState } from "react";
import "./App.css";

function App() {
	const [calc, setCalc] = useState("");
	const [result, setResult] = useState("");

	const updateCalc = (value) => {
		if (
			(operation.includes(value) && calc === "") ||
			(operation.includes(value) && operation.includes(calc.slice(-1)))
		) {
			return;
		}
		setCalc(calc + value);

		if (!operation.includes(value)) {
			setResult(eval(calc + value).toString());
		}
	};

	const operation = ["+", "-", "*", "/", "."];

	const calculate = () => {
		setCalc(eval(calc).toString());
	};

	const delDigit = () => {
		if (calc == "0") {
			return;
		}

		const value = calc.slice(0, -1);
		setCalc(value);
	};

	const allClear = () => {
		setCalc("");
		setResult(0);
	};

	return (
		<div className="calculator-grid">
			<div className="output">
				<div className="previous-operand">
					{result ? <span>{result}</span> : ""}
				</div>
				<div className="current-operand">{calc || "0"}</div>
			</div>
			<button className="span-two" onClick={allClear}>
				AC
			</button>
			<button onClick={delDigit}>DEL</button>
			<button onClick={() => updateCalc("/")}>/</button>
			<button onClick={() => updateCalc("1")}>1</button>
			<button onClick={() => updateCalc("2")}>2</button>
			<button onClick={() => updateCalc("3")}>3</button>
			<button onClick={() => updateCalc("*")}>*</button>
			<button onClick={() => updateCalc("4")}>4</button>
			<button onClick={() => updateCalc("5")}>5</button>
			<button onClick={() => updateCalc("6")}>6</button>
			<button onClick={() => updateCalc("+")}>+</button>
			<button onClick={() => updateCalc("7")}>7</button>
			<button onClick={() => updateCalc("8")}>8</button>
			<button onClick={() => updateCalc("9")}>9</button>
			<button onClick={() => updateCalc("-")}>-</button>
			<button className="fullStop" onClick={() => updateCalc(".")}>
				.
			</button>
			<button onClick={() => updateCalc("0")}>0</button>
			<button className="span-two equal" onClick={calculate}>
				=
			</button>
		</div>
	);
}

export default App;
