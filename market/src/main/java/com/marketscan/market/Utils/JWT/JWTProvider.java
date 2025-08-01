package com.marketscan.market.Utils.JWT;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Value;
import java.util.Date;

@Component
public class JWTProvider {
    @Value("${jwt.secret}")// application.properties
    private String secret;

    @Value("${jwt.expiration}")
    private long expiration;

    //Gerar token com o cpf do usuario
    public String gerarToken(String userName){
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + expiration);

        return Jwts.builder()
                .setSubject(userName) //
                .setIssuedAt(now) //Data de emissão
                .setExpiration(expiryDate)
                .signWith(SignatureAlgorithm.HS512, secret) // assinar com a chave secreta
                .compact();
    }

    public boolean validarToken(String token){
        try{
            Jwts.parser().setSigningKey(secret).parseClaimsJws(token);
            return true;
        }catch (Exception e){
            return false;
        }
    }
}
