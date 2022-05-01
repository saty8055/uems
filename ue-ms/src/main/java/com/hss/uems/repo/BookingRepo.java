package com.hss.uems.repo;

import com.hss.uems.entity.Booking;
import com.hss.uems.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepo extends JpaRepository<Booking, String> {

    Page<Booking> findByUser(User user, Pageable pageable);

}
