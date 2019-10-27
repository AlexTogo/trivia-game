export interface QuestionsModel {
    category: string;
    question: string;
    answer_1: Answer;
    answer_2: Answer;
    answer_3: Answer;
    answer_4: Answer;
}

export interface Answer {
    text:      string;
    isCorrect: boolean;
}
