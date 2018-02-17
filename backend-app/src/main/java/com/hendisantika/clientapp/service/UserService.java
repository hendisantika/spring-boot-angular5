package com.hendisantika.clientapp.service;

import com.hendisantika.clientapp.entity.User;

import java.util.List;

/**
 * Created by IntelliJ IDEA.
 * Project : backend-app
 * User: hendisantika
 * Email: hendisantika@gmail.com
 * Telegram : @hendisantika34
 * Date: 17/02/18
 * Time: 08.34
 * To change this template use File | Settings | File Templates.
 */
public interface UserService {

    User create(User user);

    User delete(int id);

    List<User> findAll();

    User findById(int id);

    User update(User user);
}
