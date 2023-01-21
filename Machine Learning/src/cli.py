from Questions import *
from transformers import AutoTokenizer, T5Tokenizer,T5ForConditionalGeneration
from Model import *
from Embeddings import *

CONTEXT_PATH = 'context.txt'

if __name__ == "__main__":
    print('Initialising Database...             ', end = '\r')
    embeddings = EmbeddingModel(CONTEXT_PATH)
    embeddings.create_mappings()
    print('Database Initialised...             ')

    trained_model = QandAModel()
    trained_model.eval()
    while True:
        question = input('Question: ')
        if question == 'exit':
            break
        context = embeddings.get_closest(question)
        answer = generate_answer(trained_model,generate_question(question,context))
        print(answer)
