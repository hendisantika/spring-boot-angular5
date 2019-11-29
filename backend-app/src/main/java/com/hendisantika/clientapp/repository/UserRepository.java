package com.hendisantika.clientapp.repository;

import com.hendisantika.clientapp.entity.User;
import org.springframework.data.repository.Repository;

import java.util.List;

/**
 * Created by IntelliJ IDEA.
 * Project : backend-app
 * User: hendisantika
 * Email: hendisantika@gmail.com
 * Telegram : @hendisantika34
 * Date: 17/02/18
 * Time: 08.33
 * To change this template use File | Settings | File Templates.
 */
public interface UserRepository extends Repository<User, Integer> {

    void delete(User user);

    List<User> findAll();

    User findById(int id);

    User save(User user);
}