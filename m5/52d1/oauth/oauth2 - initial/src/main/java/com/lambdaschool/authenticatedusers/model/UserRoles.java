package com.lambdaschool.authenticatedusers.model;



import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "userroles")
public class UserRoles extends Auditable implements Serializable
{
    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnoreProperties({"userRoles", "hibernateLazyInitializer"})
    @JoinColumn(name = "userid")
    private User user;

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "roleid")
    @JsonIgnoreProperties({"userRoles", "hibernateLazyInitializer"})
    private Role role;

    public UserRoles()
    {
    }

    public UserRoles(User user, Role role)
    {
        this.user = user;
        this.role = role;
    }

    public User getUser()
    {
        return user;
    }

    public void setUser(User user)
    {
        this.user = user;
    }

    public Role getRole()
    {
        return role;
    }

    public void setRole(Role role)
    {
        this.role = role;
    }

    @Override
    public boolean equals(Object o)
    {
        if (this == o)
        {
            return true;
        }
        if (!(o instanceof UserRoles))
        {
            return false;
        }
        UserRoles userRoles = (UserRoles) o;
        return getUser().equals(userRoles.getUser()) && getRole().equals(userRoles.getRole());
    }

    @Override
    public int hashCode()
    {
        return Objects.hash(getUser(), getRole());
    }
}
