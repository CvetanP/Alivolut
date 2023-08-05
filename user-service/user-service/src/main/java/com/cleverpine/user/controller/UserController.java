package com.cleverpine.user.controller;


import com.cleverpine.cpspringerrorutil.util.ListResponseEntityUtil;
import com.cleverpine.cpspringerrorutil.util.ResponseEntityUtil;
import com.cleverpine.user.api.UsersApi;
import com.cleverpine.user.auth.ViravaSecured;
import com.cleverpine.user.auth.roles.Resources;
import com.cleverpine.viravaspringhelper.dto.ScopeType;
import jdk.jfr.Registered;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.Map;

@RestController
public class UserController implements UsersApi {

}


