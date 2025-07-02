package com.marketscan.market.Repository;
import com.marketscan.market.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<User, Long> {

}
