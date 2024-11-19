import Joi from "joi";

export const joiValidation = {
  loginId: Joi.string()
    .alphanum()
    .min(5)
    .pattern(new RegExp(/^[a-z0-9]{5,}$/))
    .required()
    .messages({
      "string.empty": "아이디를 입력해주세요.",
      "string.pattern.base": "아이디는 영문 소문자와 숫자를 조합하여 최소 5자 이상 입력해주세요.",
    }),
  password: Joi.string()
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]+$/)
    .min(8)
    .messages({
      "string.empty": "비밀번호를 입력해주세요.",
      "string.pattern.base": "비밀번호는 영문, 숫자, 그리고 특수문자를 포함하여 최소 8자 이상으로 설정해주세요.",
    })
    .required(),
  name: Joi.string()
    .pattern(/[ㄱ-힣]/)
    .messages({
      "string.empty": "이름을 입력해주세요.",
      "string.pattern.base": "이름은 한글만 입력해주세요.",
    })
    .required(),
  updatePassword: Joi.string()
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]+$/)
    .message("비밀번호는 영문, 숫자, 그리고 특수문자를 포함하여 최소 8자 이상으로 설정해주세요."),
};
