package com.marketscan.market.Controller;
import com.marketscan.market.Model.User;
import com.marketscan.market.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*") //Autorizar qualquer domínio fazer requisição (mudar em produção) !!!11
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User loginData){
        Optional<User> userOPT = userRepository.findByCpf(loginData.getCpf());
        if (userOPT.isPresent()) {
            User user = userOPT.get();

            if (user.getSenha().equals(loginData.getSenha())){
                return ResponseEntity.ok("Login Sucesso");
            }else {
                return ResponseEntity.status(401).body("Senha incorreta");
            }
        }
        return ResponseEntity.status(404).body("Usuário não encontrado");
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User novoUsuario){
        try {
            if (userRepository.findByCpf(novoUsuario.getCpf()).isPresent()) {
                return ResponseEntity.status(400).body("Usuário já cadastrado");
            }
            userRepository.save(novoUsuario);
            return ResponseEntity.ok("Usuário cadastrado com sucesso");
        }catch (Exception e){
            e.printStackTrace();//Mostrar erro no terminal
            return ResponseEntity.status(500).body("Erro ao cadastrar usuário");
        }
    }
}
