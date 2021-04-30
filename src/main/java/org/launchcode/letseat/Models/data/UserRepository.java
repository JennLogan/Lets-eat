package org.launchcode.letseat.Models.data;

import org.launchcode.letseat.Models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {
    User findByUsername(String username);
}
