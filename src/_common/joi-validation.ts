import Joi from "joi";

export const joiValidation = Joi.object({
  loginId: Joi.string()
    .required()
    .min(5)
    .pattern(/^[a-z0-9]{5,}$/)
    .messages({
      "string.empty": "아이디를 입력해주세요.",
      "string.min": "아이디는 최소 5글자 이상 입력해주세요.",
      "string.pattern.base": "아이디는 영문 소문자와 숫자를 조합하여 최소 5자 이상 입력해주세요.",
    }),

  password: Joi.string()
    .required()
    .min(8)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]+$/)
    .messages({
      "string.empty": "비밀번호를 입력해주세요.",
      "string.min": "비밀번호는 최소 8자 이상 입력해주세요.",
      "string.pattern.base": "비밀번호는 영문, 숫자, 그리고 특수문자를 포함하여 최소 8자 이상 설정해주세요.",
    }),

  name: Joi.string()
    .required()
    .pattern(/[ㄱ-힣]/)
    .messages({
      "string.empty": "이름을 입력해주세요.",
      "string.pattern.base": "이름은 한글만 입력해주세요.",
    }),

  updatePassword: Joi.string()
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]+$/)
    .messages({
      "string.pattern.base": "비밀번호는 영문, 숫자, 그리고 특수문자를 포함하여 최소 8자 이상으로 설정해주세요.",
    }),
});
