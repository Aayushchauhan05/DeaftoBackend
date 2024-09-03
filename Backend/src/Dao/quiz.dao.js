const Quiz = require("../Entities/quiz.entities")

module.exports= class quizDao{
model=Quiz
async createQuiz(data){
    return this.model.create(data)
}
async updateQuiz(Quiz_id,update){
    return this.model.findByIdAndUpdate(Quiz_id,{...update})
}
async getAllQuiz(){
    return this.model.find()
}
async getQuizById(Quiz_id){
    return this.model.findById(Quiz_id)
}

}