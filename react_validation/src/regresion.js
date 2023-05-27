export const Namevalid=name=>{
    const namereg=/^([A-z a-z ])+$/;
    return namereg.test(name)
}


export const Emailvalid=email=>{
    const emailreg=/^([A-Z a-z 0-9])+\@([a-z])+\.([a-z])+$/;
    return emailreg.test(email)
}

export const passvalid=password=>{
    const passreg=/^([A-z a-z 0-9 ])+\@&+([a-z])+$/;
    return passreg.test(password)
}