function angle_Type(ang){
    if(ang < 90){
        return "Acute angle";
    } else if(ang == 90){
        return "Right angle";
    } else if(ang > 90 && ang < 180){
        return "Obtuse angle";
    }else if(ang == 180){
        return "Straight angle";
    }else{
        return "Not a number!!!";
    }
}
console.log(angle_Type(47));
console.log(angle_Type(90));
console.log(angle_Type(145));
console.log(angle_Type("sss"));