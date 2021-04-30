package org.launchcode.letseat.Models.dto;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;



public class LoginFormDTO {
    @NotNull
    @NotBlank
    @Size(min=3, max=25, message="Username must be 3-25 characters.")
    private String username;

    @NotNull
    @NotBlank
    @Size(min=5, max=30, message="Password must be between 5-30 characters.")
    private String password;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
