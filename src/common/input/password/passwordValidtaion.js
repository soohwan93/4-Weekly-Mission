import errMsg from '../../errMsg/errMsg.js';

const selector = document.querySelector('#password');
const selectorOfChk = document.querySelector('#password-chk');

//비밀번호 유효성 체크
const isPasswordValid = (password) => {
  const pattern = /^(.{0,7}|[0-9]+|[a-zA-Z]+)$/;
  return pattern.test(password);
}

//비밀번호 유효성 검사(로그인)
const validateSigninPasswordInput = (e) => {
  if(isEmpty(e)){
    errMsg(e, '비밀번호를 입력해 주세요.');
  }
}

//비밀번호 유효성 검사(회원가입)
const validateSignupPasswordInput = (e) => {
  if(isEmpty(e)){
    errMsg(e, '비밀번호를 입력해 주세요.');
  }else if(isValid(e)){
    errMsg(e, '비밀번호는 영문,숫자 조합 8자 이상 입력해 주세요.');
  }
}

//비밀번호 확인 유효성 검사(회원가입)
const validateSignupPasswordChkInput = (e) => {
  if(isEmpty(e)){
    errMsg(e, '비밀번호를 입력해 주세요.');
  }else if(isMatch(e)){
    errMsg(e, '비밀번호가 일치하지 않아요.');
  }
}

const isEmpty = (e) => {
  if(!e.value) {
    return true;
  }
}

const isMatch = (e) => {
  if(e.value !== selector.value){
    return true;
  }
}

const isValid = (e) => {
  if(isPasswordValid(e.value)){
    return true;
  }
}


export default {selector, selectorOfChk, validateSigninPasswordInput, validateSignupPasswordInput, validateSignupPasswordChkInput};