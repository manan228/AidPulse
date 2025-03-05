import {
  answerValidationPrompt,
  questionFormationPrompt,
} from "@/data/prompts.js";
import { LLMCOMMUNICATION_API_URL } from "@/data/constants.js";
import axios from "axios";
import pre_post_question from "@/data/pre_post_data.json";

const promptFunction = (value, type) => {
  if (type === "QUESTION_FORMATION")
    return `${questionFormationPrompt}${value}. Example: {question: What is your name?}`;
  if (type === "ANSWER_VALIDATION") return `${answerValidationPrompt}${value}`;
};

const findFirstEmptyValue = (json) => {
  json.data.sort((a, b) => a.priority - b.priority);

  const data = json.data;
  for (const queObj of data) {
    if (queObj.value === "" || queObj.value === null) {
      return queObj;
    }
  }
  return null;
};

const checkPrePostQuestion = (sectionKey) => {
  console.log(pre_post_question);
  console.log(sectionKey);
};

const updateValueByName = (data, victimData, name, newValue) => {
  const queArr = data.data;

  for (const queObj of queArr) {
    if (queObj.name === name) {
      queObj.value = newValue;
      break;
    }

    for (const category in victimData) {
      if (victimData[category].hasOwnProperty(name)) {
        victimData[category][name] = newValue;
        break;
      }
    }
  }

  localStorage.setItem("victimQuestionData", JSON.stringify(victimData));
  localStorage.setItem("questionData", JSON.stringify(data));
};

const generateQuestionFromLLM = async (question) => {
  try {
    const payload = { prompt: question };
    const { data } = await axios.post(LLMCOMMUNICATION_API_URL, payload);
    return data.response;
  } catch (error) {
    console.error("Error communicating with LLM API:", error);
  }
};

const generateVirtuosoMessage = (user, idCounter, message, virtuoso) => {
  const messageObj = {
    user: user,
    key: `${idCounter}`,
    text: message,
  };

  virtuoso.current?.data.append([messageObj], "smooth");
};

export {
  promptFunction,
  findFirstEmptyValue,
  generateQuestionFromLLM,
  generateVirtuosoMessage,
  LLM_CALL_FOR_ANSWER_VALIATION,
  updateValueByName,
  checkPrePostQuestion,
};
