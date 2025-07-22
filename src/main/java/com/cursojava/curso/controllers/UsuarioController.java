package com.cursojava.curso.controllers;

import com.cursojava.curso.models.Usuario;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UsuarioController {
    @RequestMapping(value = "usuario/{id}")
    public Usuario getUsuario(@PathVariable Long id){
        Usuario usuario = new Usuario();
        usuario.setId(id);
        usuario.setNombre("Gonzalo");
        usuario.setApellido("Herrera");
        usuario.setEmail("gonzacai1994@gmail.com");
        usuario.setTelefono("1168454311");
        return usuario;
    }
    @RequestMapping(value = "usuario22")
    public Usuario editar(){
        Usuario usuario = new Usuario();
        usuario.setNombre("Gonzalo");
        usuario.setApellido("Herrera");
        usuario.setEmail("gonzacai1994@gmail.com");
        usuario.setTelefono("1168454311");
        return usuario;
    }
    @RequestMapping(value = "usuario33")
    public Usuario eliminar(){
        Usuario usuario = new Usuario();
        usuario.setNombre("Gonzalo");
        usuario.setApellido("Herrera");
        usuario.setEmail("gonzacai1994@gmail.com");
        usuario.setTelefono("1168454311");
        return usuario;
    }
    @RequestMapping(value = "usuario44")
    public Usuario buscar(){
        Usuario usuario = new Usuario();
        usuario.setNombre("Gonzalo");
        usuario.setApellido("Herrera");
        usuario.setEmail("gonzacai1994@gmail.com");
        usuario.setTelefono("1168454311");
        return usuario;
    }
}
