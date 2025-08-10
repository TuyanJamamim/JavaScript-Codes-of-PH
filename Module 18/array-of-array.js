 const numers = [ 1, 2, 3, 4, 6];
 const tournament_runs = [ [], [], []];//an array can e inside an array

 const exam_marks = [
    [98, 87 , 45, 12 , 63],
    [ 54, 89, 74, 23, 11 ],
    [45, 87 , 12, 56, 45],
    [78, 65, 32, 87, 54]
 ]//this is array inside array and 2d array
 console.log(numers[0]);
 console.log(exam_marks[0]);
const first_class_marks = exam_marks[0];
console.log(first_class_marks[0]);//here's how first element of the array1 inside bigger array will  printed
const second_class_marks = exam_marks[1];
console.log(second_class_marks[0]);
console.log(exam_marks[0][0]);//here is how frist element of array at 0 index is printed 
 exam_marks[0][1] =66; //the mark becomes 66
 exam_marks[1].pop()//this means the last element of the 2nd array is een removed 
 exam_marks[1].push(44);//44 is added to the last element of the second array 
 console.log(exam_marks[1]);

 for(const marks of exam_marks)
 {
    console.log(marks);//this will work exactly like multiple oject inside one array type loop
 }


