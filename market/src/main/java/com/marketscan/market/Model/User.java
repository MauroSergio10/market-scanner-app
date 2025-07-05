package com.marketscan.market.Model;
import jakarta.persistence.*;
import lombok.Setter;

@Entity
@Table(name = "users")
public class User{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    @Setter
    @Column(nullable = false, unique = true, length = 11)
    private String cpf;

    @Column(nullable = false)
    private String senha;

 // Getters and setteres

    public Long getId() {return id; }

    public String getCpf() {return cpf; }

    public String getSenha() {return senha;}
    public void setSenha(String senha) {this.senha = senha;}



}