import { BackendURL } from "./sources";

async function addQuiz(data){
   return await fetch(`${BackendURL}createquiz`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    body: JSON.stringify(data)})
    .then(respose=>respose.json())
    .then(data=>{
       if(data.success){
        return {message: true, quizid: data.id};
       }
    })
}

async function getQuiz(){
   return await fetch(`${BackendURL}getquizzes`)
       .then(response=>response.json())
       .then((data)=>{
        return data
       })
}

async function getQuizQuestionList(idobj){
    return await fetch(`${BackendURL}getQuestionList`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
    },
    body: JSON.stringify(idobj)})
        .then(response=>response.json())
        .then((data)=>{
         return data
        }) 
 }

 async function addQuestion(data){
  return await fetch(`${BackendURL}addQuestion`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
  body: JSON.stringify(data)})
  .then(respose=>respose.json())
  .then(data=>{
     if(data.success){
      return {message: true, quizid: data._id};
     }
  })
 }

const dbMethods = {
    addQuiz: addQuiz,
    getQuiz: getQuiz,
    getQuizQuestionList: getQuizQuestionList,
    addQuestion: addQuestion
}

export default dbMethods;
