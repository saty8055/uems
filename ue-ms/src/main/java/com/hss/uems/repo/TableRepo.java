package com.hss.uems.repo;

import com.hss.uems.entity.RestaurantTable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TableRepo extends JpaRepository<RestaurantTable, String> {



}
