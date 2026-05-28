package com.javaproyect.demo.dao;

import java.util.List;

import com.javaproyect.demo.models.User;

public interface UserDao {

    List<User> getUsers();
    void deleteUser(Long id);
    void registerUser(User user);


}
