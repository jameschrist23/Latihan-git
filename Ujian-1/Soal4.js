function getReport(studentGrades) {
    const arrClass=['A', 'B', 'C'];
    let arrResult = [];
    for ( let i = 0; i< arrClass.length; i++ ){
        let arrFailed = [];
        let arrPassed = [];
        for ( let j = 0; j< studentGrades.length; j++ ){
            if ( studentGrades[j].classCode === arrClass[i] ){
                if ( studentGrades[j].score < 70 ){
                    arrFailed.push(studentGrades[j].name);
                } else { arrPassed.push(studentGrades[j].name)}
            }
        }

        let resultObject = {
            classCode: arrClass[i],
            failed: arrFailed,
            passed: arrPassed,
        }

        arrResult.push(resultObject)
    }
    return arrResult
}

const grades1 = [
    {name:'John', score: 80, classCode: 'A'},
    {name:'Mike', score: 60, classCode: 'B'},
    {name:'Budi', score: 70, classCode: 'C'},
    {name:'Siti', score: 50, classCode: 'A'},
    {name:'Aaron', score: 10, classCode: 'A'},
    {name:'Arthur', score: 10, classCode: 'C'},
    {name:'Ossas', score: 10, classCode: 'B'},
    {name:'Yolo', score: 90, classCode: 'C'},

]

console.log(getReport(grades1));
