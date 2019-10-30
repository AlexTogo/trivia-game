export interface QuestionsModel {
    category: string;
    point: number;
    question: string;
    questionRus: string;
    answer_1: Answer;
    answer_2: Answer;
    answer_3: Answer;
    answer_4: Answer;
    alreadyPlay: boolean;
}

export interface Answer {
    text:      string;
    isCorrect: boolean;
}
