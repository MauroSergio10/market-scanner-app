package com.marketscan.market.Controller;
import com.marketscan.market.Model.User;
import com.marketscan.market.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*") //Autorizar qualquer domínio fazer requisição (mudar em produção) !!!11
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public

}
