package com.cleverpine.user.auth.principal;

import com.cleverpine.viravaspringhelper.core.ViravaPrincipalProvider;
import org.springframework.stereotype.Component;

@Component
public class PrincipalProvider extends ViravaPrincipalProvider<UserPrincipal> {

    protected PrincipalProvider() {
        super(UserPrincipal.class);
    }

    @Override
    public UserPrincipal provideCustomPrincipalInfo(String username) {
        return null;//TODO
    }
}
