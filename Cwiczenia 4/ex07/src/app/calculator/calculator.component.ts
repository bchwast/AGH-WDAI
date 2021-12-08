import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  result: string = "";
  input: string = "";
  operator: string = "";

  pressNumber(num: string) {
    if (this.result != "" && this.operator == "") {
      return;
    }

    if (num == ".") {
      if (this.input.includes(".")) {
        return;
      }

      if (this.input == "") {
        this.input = "0";
      }
    }

    if (num == "0") {
      if (this.input == "") {
        return;
      }
    }

    this.input = this.input + num;
  }

  pressOperator(op: string) {
    // if (this.operator != "") {
    //   return;
    // }

    if (this.input == "") {
      if (this.result != "" && op == "s") {
        if (parseFloat(this.result) >= 0) {
          this.result = Math.sqrt(parseFloat(this.result)).toString();
          this.operator = "";
        }
        return;
      }

      if (this.result != "") {
        this.operator = op;
        return;
      }
    }

    if (parseFloat(this.input) >= 0 && op == "s") {
      this.result = Math.sqrt(parseFloat(this.input)).toString();
      this.input = "";
      return;
    }

    if (this.input != "" && this.operator != "" && this.input != "") {
      this.pressResult();
      this.operator = op;
      return;
    }


    this.result = this.input;
    this.input = "";
    this.operator = op;
  }

  pressNegative() {
    if (this.input != "") {
      this.input = (parseFloat(this.input) * (-1)).toString();
    }
    else if (this.result != "") {
     this.result = (parseFloat(this.result) * (-1)).toString();
    }
  }

  pressResult() {
    let result = 0;
    let input = 0;
    if (this.result != "") {
      result = parseFloat(this.result);
    }

    if (this.input == "") {
      return;
    }
    else {
      input = parseFloat(this.input);
    }

    if (this.operator == "") {
      return;
    }

    if (this.operator == "+") {
      result += input;
    }
    else if (this.operator == "-") {
      result -= input;
    }
    else if (this.operator == "*") {
      result *= input;
    }
    else if (this.operator == "/") {
      if (result == 0) {
        return
      }
      result /= input;
    }

    this.input = "";
    this.operator = "";
    this.result = result.toString();
  }

  pressDelete() {
    this.input = "";
    this.operator = "";
  }

  pressClear() {
    this.input = "";
    this.result = "";
    this.operator = "";
  }

}
