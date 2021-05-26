export function bmi(weight: number, height: number): string {
  let bmi: number = weight / height * height;
  if(bmi <= 18.5){
    return "Underweight"
  } else if(bmi <= 25.0 ){
    return "Normal"
  } else if (bmi <= 30.0){
    return "Overweight"
  } else if (bmi > 30){
    return "Obese"
  }
  
  throw new Error("The method or operation is not implemented.");
}
