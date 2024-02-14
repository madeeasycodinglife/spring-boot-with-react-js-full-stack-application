package com.madeeasy.service.impl;

import com.madeeasy.entity.User;
import com.madeeasy.exception.UserNotFoundException;
import com.madeeasy.repository.UserRepository;
import com.madeeasy.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserById(Long id) {
        return userRepository.findById(id).orElseThrow(() -> new UserNotFoundException("User not found with id " + id));
    }

    @Override
    public User createUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User updateUser(Long id, User user) {
        User foundUser = this.userRepository.findById(id).orElseThrow(() -> new UserNotFoundException("User Not Found with id: " + id));
        foundUser.setName(user.getName());
        foundUser.setEmail(user.getEmail());
        foundUser.setPhoneNumber(user.getPhoneNumber());
        foundUser.setImageUrl(user.getImageUrl());
        return userRepository.save(foundUser);
    }

    @Override
    public void deleteUser(Long id) {
        User foundUser = this.userRepository.findById(id).orElseThrow(() -> new UserNotFoundException("User Not Found with id: " + id));
        userRepository.deleteById(id);
    }
}

