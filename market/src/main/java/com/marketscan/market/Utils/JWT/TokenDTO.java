package com.marketscan.market.Utils.JWT;

public class TokenDTO {
    private String token;

    public TokenDTO(String token){
        this.token = token;
    }

    public String geToken(){
        return token;
    }
}
