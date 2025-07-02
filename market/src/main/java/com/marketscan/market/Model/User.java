package com.marketscan.market.Model;


import jakarta.persistence.*;

@Entity
@Table(name = "User")
public class User{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    @Column(nullable = false, unique = true, length = 11)
    private String cpf;

    @Column(nullable = false)
    private String senha;

 // Getters and setteres

    public Long getId() {return id; }
    public String getCpf() {return cpf; }
    public void setCpf(String cpf) {this.cpf = cpf;}
    public String getSenha() {return senha;}
    public void setSenha(String senha) {senha = this.senha;}



}