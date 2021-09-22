class Thruster{
    Poten_Act : number;
    Poten_Max : number;

    constructor(Poten_Max:number){
        this.Poten_Act = 0;
        this.Poten_Max = Poten_Max;
    }

    get getPoten_Max(){
        return this.Poten_Max;
    }
}