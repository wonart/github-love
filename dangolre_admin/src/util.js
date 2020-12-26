// 특수 문자 제거
export function regExp_sign(str){  
  const reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
  if(reg.test(str)){
    return str.replace(reg, "");    
  } else {
    return str;
  }  
}

// 공백 제거
export function regExp_space(str){  
  const reg = /\s/g;
  if(reg.test(str)){
    return str.replace(reg, "");    
  } else {
    return str;
  }  
} 
