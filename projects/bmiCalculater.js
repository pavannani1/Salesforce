
    import { LightningElement, track } from 'lwc';

    export default class BmiCalculator extends LightningElement {
        @track height = '';
        @track weight = '';
        bmiValue = '';
        result='';


        inputHandler(event) {
            const { name, value } = event.target;
            if (name === 'height') {
                this.height = value;
            }
            if (name === 'weight') {
                this.weight = value;
            }
        }

        submitHandler(event) {
            event.preventDefault(); // Prevent form submission
            // Perform BMI calculation or other logic here
            console.log('Height:', this.height);
            console.log('Weight:', this.weight);
            this.calculate()
        }
    calculate(){
        let height= Number(this.height)/100;
        let weight= Number(this.weight)
        let bmi= (weight/(height*height))
        console.log("your Bmi:" , bmi);
        this.bmiValue = Number(bmi.toFixed(2));
    

        if(this.bmiValue <18.5){
            this.result= "under weight"
        }
        else if(this.bmiValue>18.5 &&this.bmiValue <25){
            this.result="Helthy"
        }
        else if(this.bmiValue>25 &&this.bmiValue <30){
            this.result="over Weight"
        }
        else if(this.bmiValue>30 ){
            this.result=" You are Obese"
        }
        console.log("result of Bmi:" ,this.result)
    

    }
    recalculate(){
        this.result= ''
        this.height= ''
        this.weight=''
        this.bmiValue=''

    }
    }