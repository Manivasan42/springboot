package com.jrishmani.Dashboardsend.mail.repo;

import com.jrishmani.Dashboardsend.mail.model.FormData;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FormRepository extends JpaRepository<FormData,Long> {
    Optional<FormData> findByEmail(String email);
}
